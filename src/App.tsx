import { useQuery } from './hooks/useQuery';
import UsersTable from './components/UsersTable';

export default function App() {
  const { users, loading, error } = useQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ maxWidth: 1000, margin: '40px auto', padding: 24 }}>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Users</h1>
      <UsersTable users={users} />
    </div>
  );
}
