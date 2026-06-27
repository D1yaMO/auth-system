import { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import AnimatedBackground from '../components/AnimatedBackground';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      setMessage(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/reset-password', {
        token,
        newPassword,
      });
      setMessage(res.data.message);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    border: '1px solid #e5e7eb',
    background: 'rgba(255,255,255,0.8)',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const cardStyle = {
    position: 'relative',
    zIndex: 1,
    background: 'rgba(255,255,255,0.6)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    padding: '2.5rem',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    border: '1px solid rgba(255,255,255,0.8)',
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <AnimatedBackground />
      <div style={cardStyle}>
        <h2 style={{ marginBottom: '0.25rem', fontSize: '1.8rem', color: '#1e1b4b' }}>
          {token ? 'Set New Password' : 'Forgot Password'}
        </h2>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
          {token ? 'Enter your new password below' : "We'll send you a reset link"}
        </p>

        {message && (
          <p style={{ color: '#10b981', background: '#f0fdf4', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem' }}>
            {message}
          </p>
        )}
        {error && (
          <p style={{ color: '#ef4444', background: '#fef2f2', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem' }}>
            {error}
          </p>
        )}

        {!token ? (
          <form onSubmit={handleForgot}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.4rem', color: '#374151', fontWeight: 500 }}>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
            </div>
            <button type="submit" style={{
              width: '100%', padding: '0.75rem', borderRadius: '10px', border: 'none',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white',
              fontSize: '1rem', fontWeight: 600, cursor: 'pointer', boxSizing: 'border-box',
            }}>
              Send Reset Link
            </button>
          </form>
        ) : (
          <form onSubmit={handleReset}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.4rem', color: '#374151', fontWeight: 500 }}>New Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={inputStyle}
              />
            </div>
            <button type="submit" style={{
              width: '100%', padding: '0.75rem', borderRadius: '10px', border: 'none',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white',
              fontSize: '1rem', fontWeight: 600, cursor: 'pointer', boxSizing: 'border-box',
            }}>
              Reset Password
            </button>
          </form>
        )}

        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#6b7280' }}>
          Remember it?{' '}
          <Link to="/login" style={{ color: '#6366f1', fontWeight: 600, textDecoration: 'none' }}>
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;