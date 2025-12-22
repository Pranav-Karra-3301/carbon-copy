'use client';

import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './codeblock.module.css';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TOCWrapper() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Find the TOC container
    const tocContainer = document.getElementById('toc-container');
    setContainer(tocContainer);
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const article = document.querySelector('article');
      if (!article) return;

      const elements = article.querySelectorAll('h1, h2, h3');
      const items: TOCItem[] = [];

      elements.forEach((el, index) => {
        if (!el.id) {
          el.id = `heading-${index}`;
        }
        const text = el.textContent || '';
        if (text.trim()) {
          items.push({
            id: el.id,
            text: text.trim(),
            level: parseInt(el.tagName[1]),
          });
        }
      });

      setHeadings(items);
      
      // Set initial active
      if (items.length > 0) {
        setActiveId(items[0].id);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Get all intersecting entries
        const intersecting = entries.filter(e => e.isIntersecting);
        
        if (intersecting.length === 0) {
          // If nothing is intersecting, find the last heading that's above the viewport
          const allHeadings = headings.map(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const rect = el.getBoundingClientRect();
            return { id, top: rect.top, element: el };
          }).filter(Boolean) as Array<{ id: string; top: number; element: HTMLElement }>;
          
          // Find the heading closest to the top (but above it)
          const aboveViewport = allHeadings
            .filter(h => h.top < 100)
            .sort((a, b) => b.top - a.top);
          
          if (aboveViewport.length > 0) {
            setActiveId(aboveViewport[0].id);
          }
          return;
        }
        
        // Sort intersecting entries by their position in the viewport
        // The one closest to the top (but still visible) should be active
        intersecting.sort((a, b) => {
          const aTop = a.boundingClientRect.top;
          const bTop = b.boundingClientRect.top;
          // Prefer headings that are near the top of the viewport
          if (aTop < 150 && bTop >= 150) return -1;
          if (bTop < 150 && aTop >= 150) return 1;
          return aTop - bTop;
        });
        
        setActiveId(intersecting[0].target.id);
      },
      {
        rootMargin: '-100px 0px -60% 0px',
        threshold: [0, 0.1, 0.5, 1],
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

  if (!container || headings.length === 0) return null;

  return createPortal(
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
    </nav>,
    container
  );
}

