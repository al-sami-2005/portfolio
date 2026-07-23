import React, { useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';

export default function AdminLogin({ onLogin }) {
  const { data } = useSiteData();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === data.settings.adminPassword) {
      sessionStorage.setItem('admin-auth', 'true');
      onLogin();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login-card">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="admin-field">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
          </div>
          {error && <p style={{ color: '#ff3b30', fontSize: '0.9rem', marginTop: 0 }}>Incorrect password.</p>}
          <button type="submit" className="admin-btn" style={{ width: '100%', marginTop: '1rem' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
