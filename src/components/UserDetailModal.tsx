import type { User } from '../types/user';
import styles from './UserDetailModal.module.css';

interface UserDetailModalProps {
  user: User;
  onClose: () => void;
}

export default function UserDetailModal({ user, onClose }: UserDetailModalProps) {
  const mapUrl = `https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`;

  return (
    <div className={styles.overlay} tabIndex={-1} aria-modal="true" role="dialog">
      <div className={styles.modal} role="document">
        <button
          className={styles.closeButton}
          aria-label="Close modal"
          tabIndex={0}
          onClick={onClose}
        >
          ×
        </button>
        <div className={styles.header}>
          <div className={styles.userName}>{user.name}</div>
          <a href={`mailto:${user.email}`} className={styles.userEmail}>{user.email}</a>
        </div>
        <div className={styles.divider} />
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Address</div>
          <div>{user.address.street}, {user.address.suite}</div>
          <div>{user.address.city}, {user.address.zipcode}</div>
          <a
            href={mapUrl}
            className={styles.mapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.mapIcon}>📍</span> View on map
          </a>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Contact</div>
          <div><span className={styles.label}>Phone:</span> {user.phone}</div>
          <div>
            <span className={styles.label}>Website:</span>{' '}
            <a
              href={`http://${user.website}`}
              className={styles.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Company</div>
          <div><span className={styles.label}>Name:</span> {user.company.name}</div>
          <div><span className={styles.label}>Catchphrase:</span> {user.company.catchPhrase}</div>
          <div><span className={styles.label}>Business:</span> {user.company.bs}</div>
        </div>
      </div>
    </div>
  );
} 