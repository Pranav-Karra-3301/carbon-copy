import Link from 'next/link';
import styles from './docs.module.css';

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Quick Start', href: '/docs/quickstart' },
      { title: 'Theming', href: '/docs/theming' },
    ],
  },
  {
    title: 'Layout',
    items: [
      { title: 'DenseGrid', href: '/docs/components/dense-grid' },
      { title: 'FormLayout', href: '/docs/components/form-layout' },
      { title: 'FormSection', href: '/docs/components/form-section' },
      { title: 'FormGrid', href: '/docs/components/form-grid' },
    ],
  },
  {
    title: 'Form Elements',
    items: [
      { title: 'FormField', href: '/docs/components/form-field' },
      { title: 'Checkbox', href: '/docs/components/checkbox' },
      { title: 'LabeledInput', href: '/docs/components/labeled-input' },
      { title: 'OptionRow', href: '/docs/components/option-row' },
    ],
  },
  {
    title: 'Tables',
    items: [
      { title: 'VintageTable', href: '/docs/components/vintage-table' },
      { title: 'CodeTable', href: '/docs/components/code-table' },
      { title: 'StrikethroughCell', href: '/docs/components/strikethrough-cell' },
    ],
  },
  {
    title: 'Display',
    items: [
      { title: 'SectionHeader', href: '/docs/components/section-header' },
      { title: 'SectionTitle', href: '/docs/components/section-title' },
      { title: 'YearBadge', href: '/docs/components/year-badge' },
      { title: 'PatternedField', href: '/docs/components/patterned-field' },
    ],
  },
  {
    title: 'Examples',
    items: [
      { title: 'Order Form', href: '/docs/examples/order-form' },
      { title: 'Invoice', href: '/docs/examples/invoice' },
      { title: 'Data Sheet', href: '/docs/examples/data-sheet' },
      { title: 'Custom Layouts', href: '/docs/examples/layouts' },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.docsContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark}>CC</span>
            <span className={styles.logoText}>Carbon Copy</span>
          </Link>
          <span className={styles.version}>v0.0.1</span>
        </div>
        
        <nav className={styles.nav}>
          {navigation.map((section) => (
            <div key={section.title} className={styles.navSection}>
              <h3 className={styles.navTitle}>{section.title}</h3>
              <ul className={styles.navList}>
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.navLink}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        
        <div className={styles.sidebarFooter}>
          <a href="https://github.com" className={styles.footerLink}>GitHub</a>
          <a href="/llms.txt" className={styles.footerLink}>llms.txt</a>
        </div>
      </aside>
      
      <main className={styles.content}>
        <div className={styles.contentInner}>
          {children}
        </div>
        <aside className={styles.tocSidebar} id="toc-container">
          {/* TOC will be mounted here by client component */}
        </aside>
      </main>
    </div>
  );
}

