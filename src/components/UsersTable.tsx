import type { User } from '../types/user';
import styles from './UsersTable.module.css';
import UserDetailModal from './UserDetailModal';
import { useModal } from '../hooks/useModal';

interface UsersTableProps {
  users: User[];
}

export default function UsersTable({ users }: UsersTableProps) {
  const { openModal } = useModal();

  const handleRowClick = (user: User) => {
    openModal(UserDetailModal, { user });
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name / Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr
            key={user.id}
            className={styles.clickableRow}
            tabIndex={0}
            aria-label={`Show details for ${user.name}`}
            onClick={() => handleRowClick(user)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleRowClick(user); }}
          >
            <td>
              <div className={styles.userName}>{user.name}</div>
              <div>{user.email}</div>
            </td>
            <td>
              {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </td>
            <td>{user.phone}</td>
            <td>
              <a
                href={`http://${user.website}`}
                className={styles.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
              >
                {user.website}
              </a>
            </td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}