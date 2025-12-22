import Link from 'next/link';
import styles from './error.module.css';

export default function NotFound() {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorContainer}>
        <div className={styles.errorHeader}>
          <span className={styles.errorCode}>404</span>
          <span className={styles.errorDivider}>|</span>
          <span className={styles.errorLabel}>PAGE NOT FOUND</span>
        </div>
        
        <div className={styles.errorContent}>
          <div className={styles.errorIcon}>
            <div className={styles.strikethrough} />
          </div>
          
          <h1 className={styles.errorTitle}>This page doesn&apos;t exist</h1>
          
          <p className={styles.errorMessage}>
            The document you requested could not be located in our filing system.
            It may have been moved, deleted, or never existed.
          </p>
          
          <div className={styles.errorActions}>
            <Link href="/" className={styles.primaryButton}>
              Return Home
            </Link>
            <Link href="/docs" className={styles.secondaryButton}>
              View Documentation
            </Link>
          </div>
        </div>
        
        <div className={styles.errorFooter}>
          <span>Carbon Copy</span>
          <span>•</span>
          <span>Error Document</span>
        </div>
      </div>
    </div>
  );
}

