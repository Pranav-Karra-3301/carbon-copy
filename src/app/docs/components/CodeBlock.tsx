'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './codeblock.module.css';

// Simple syntax highlighting - tasteful and minimal
function highlightCode(code: string, language: string): React.ReactNode[] {
  const lines = code.split('\n');
  
  return lines.map((line, lineIndex) => {
    const tokens: React.ReactNode[] = [];
    let remaining = line;
    let keyIndex = 0;
    
    // Keywords for different languages
    const keywords = language === 'css' 
      ? ['@font-face', '@import', 'var', 'calc', 'rgb', 'rgba', 'transparent']
      : ['import', 'export', 'from', 'const', 'let', 'var', 'function', 'return', 'if', 'else', 'interface', 'type', 'async', 'await', 'default', 'true', 'false', 'null', 'undefined'];
    
    const jsxTags = /<\/?[A-Z][A-Za-z0-9]*|<\/?[a-z]+/g;
    const strings = /(["'`])(?:(?!\1)[^\\]|\\.)*?\1/g;
    const comments = /\/\/.*$|\/\*[\s\S]*?\*\//g;
    const properties = /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=[:=])/g;
    const numbers = /\b\d+\.?\d*\b/g;
    
    // Tokenize the line
    const parts: { text: string; type: string; start: number }[] = [];
    
    // Find strings
    let match;
    while ((match = strings.exec(line)) !== null) {
      parts.push({ text: match[0], type: 'string', start: match.index });
    }
    
    // Find comments
    strings.lastIndex = 0;
    while ((match = comments.exec(line)) !== null) {
      parts.push({ text: match[0], type: 'comment', start: match.index });
    }
    
    // Find JSX tags
    comments.lastIndex = 0;
    while ((match = jsxTags.exec(line)) !== null) {
      parts.push({ text: match[0], type: 'tag', start: match.index });
    }
    
    // Find numbers
    jsxTags.lastIndex = 0;
    while ((match = numbers.exec(line)) !== null) {
      parts.push({ text: match[0], type: 'number', start: match.index });
    }
    
    // Find keywords
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      while ((match = regex.exec(line)) !== null) {
        parts.push({ text: match[0], type: 'keyword', start: match.index });
      }
    });
    
    // Sort by position
    parts.sort((a, b) => a.start - b.start);
    
    // Remove overlapping parts
    const filtered: typeof parts = [];
    let lastEnd = 0;
    for (const part of parts) {
      if (part.start >= lastEnd) {
        filtered.push(part);
        lastEnd = part.start + part.text.length;
      }
    }
    
    // Build the highlighted line
    let pos = 0;
    for (const part of filtered) {
      if (part.start > pos) {
        tokens.push(<span key={keyIndex++}>{line.slice(pos, part.start)}</span>);
      }
      tokens.push(
        <span key={keyIndex++} className={styles[part.type]}>
          {part.text}
        </span>
      );
      pos = part.start + part.text.length;
    }
    if (pos < line.length) {
      tokens.push(<span key={keyIndex++}>{line.slice(pos)}</span>);
    }
    
    return (
      <React.Fragment key={lineIndex}>
        {tokens}
        {lineIndex < lines.length - 1 && '\n'}
      </React.Fragment>
    );
  });
}

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = 'tsx', showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.codeBlockWrapper}>
      <div className={styles.codeHeader}>
        <span className={styles.language}>{language}</span>
        <button 
          className={styles.copyButton} 
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className={styles.codeBlock}>
        <code>{highlightCode(code, language)}</code>
      </pre>
    </div>
  );
}

interface PageActionsProps {
  pageContent: string;
  pageTitle: string;
}

export function PageActions({ pageContent, pageTitle }: PageActionsProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const copyAsText = async () => {
    await navigator.clipboard.writeText(pageContent);
    setCopiedFormat('text');
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const copyAsMarkdown = async () => {
    const markdown = `# ${pageTitle}\n\n${pageContent}`;
    await navigator.clipboard.writeText(markdown);
    setCopiedFormat('markdown');
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <div className={styles.pageActionsTop}>
      <button 
        className={styles.actionButton}
        onClick={copyAsText}
      >
        {copiedFormat === 'text' ? '✓ Copied' : 'Copy as Text'}
      </button>
      <button 
        className={styles.actionButton}
        onClick={copyAsMarkdown}
      >
        {copiedFormat === 'markdown' ? '✓ Copied' : 'Copy as Markdown'}
      </button>
    </div>
  );
}

export function ComingSoon({ title }: { title: string }) {
  return (
    <article>
      <h1>{title}</h1>
      <div className={styles.comingSoon}>
        <div className={styles.comingSoonIcon}>📋</div>
        <h2>Coming Soon</h2>
        <p>
          This documentation page is currently being written. 
          Check back soon for complete documentation on <strong>{title}</strong>.
        </p>
        <p className={styles.comingSoonHint}>
          In the meantime, explore the source code or check the API reference.
        </p>
      </div>
    </article>
  );
}

// Table of Contents Component
interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Find all headings in the article
    const article = document.querySelector('article');
    if (!article) return;

    const elements = article.querySelectorAll('h1, h2, h3');
    const items: TOCItem[] = [];

    elements.forEach((el, index) => {
      // Create ID if doesn't exist
      if (!el.id) {
        el.id = `heading-${index}`;
      }
      items.push({
        id: el.id,
        text: el.textContent || '',
        level: parseInt(el.tagName[1]),
      });
    });

    setHeadings(items);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className={styles.toc}>
      <div className={styles.tocTitle}>On This Page</div>
      <ul className={styles.tocList}>
        {headings.map(({ id, text, level }) => (
          <li 
            key={id} 
            className={`${styles.tocItem} ${styles[`tocLevel${level}`]} ${activeId === id ? styles.tocActive : ''}`}
          >
            <button onClick={() => handleClick(id)}>
              {text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
