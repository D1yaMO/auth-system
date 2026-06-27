import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <AnimatedBackground />
      <div style={{
        position: 'relative',
        zIndex: 1,
        background: 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        padding: '2.5rem',
        width: '100%',
        maxWidth: '480px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        border: '1px solid rgba(255,255,255,0.8)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 700,
            marginRight: '1rem',
          }}>
            {user?.username?.[0]?.toUpperCase() || 'U'}
          </div>
          <div>
            <h2 style={{ margin: 0, color: '#1e1b4b', fontSize: '1.4rem' }}>
              Welcome, {user?.username || 'User'}!
            </h2>
            <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem' }}>
              You're successfully logged in
            </p>
          </div>
        </div>

        <div style={{
          background: 'rgba(99,102,241,0.08)',
          borderRadius: '12px',
          padding: '1rem 1.25rem',
          marginBottom: '1rem',
        }}>
          <p style={{ margin: 0, color: '#6b7280', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Email</p>
          <p style={{ margin: 0, color: '#1e1b4b', fontWeight: 500 }}>{user?.email || '—'}</p>
        </div>

        <div style={{
          background: 'rgba(99,102,241,0.08)',
          borderRadius: '12px',
          padding: '1rem 1.25rem',
          marginBottom: '2rem',
        }}>
          <p style={{ margin: 0, color: '#6b7280', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Role</p>
          <span style={{
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            borderRadius: '20px',
            background: user?.role === 'admin' ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'linear-gradient(135deg, #10b981, #34d399)',
            color: 'white',
            fontSize: '0.85rem',
            fontWeight: 600,
          }}>
            {user?.role || 'user'}
          </span>
        </div>

        <button
          onClick={handleLogout}
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '10px',
            border: '1px solid #e5e7eb',
            background: 'white',
            color: '#ef4444',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;