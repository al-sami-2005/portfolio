import React, { useState, useRef } from 'react';
import { useSiteData } from '../../context/SiteDataContext';

export default function SettingsEditor({ showToast }) {
  const { data, updateSection, replaceAll, resetAll } = useSiteData();
  const [settings, setSettings] = useState(data.settings);
  const [cv, setCv] = useState(data.cv);
  
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
  const fileInputRef = useRef(null);

  const handlePasswordSave = () => {
    if (passwords.current !== data.settings.adminPassword) {
      alert("Current password incorrect.");
      return;
    }
    if (passwords.new !== passwords.confirm) {
      alert("New passwords do not match.");
      return;
    }
    if (passwords.new.length < 4) {
      alert("Password too short.");
      return;
    }
    updateSection('settings', { ...settings, adminPassword: passwords.new });
    setPasswords({ current: '', new: '', confirm: '' });
    showToast('Password updated!');
  };

  const handleCVSave = () => {
    updateSection('cv', cv);
    showToast('CV settings saved!');
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Data exported successfully!');
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        if (window.confirm('This will overwrite all current site data. Continue?')) {
          replaceAll(importedData);
          showToast('Data imported successfully!');
        }
      } catch (err) {
        alert('Invalid JSON file.');
      }
    };
    reader.readAsText(file);
    e.target.value = null; // reset
  };

  const handleReset = () => {
    if (window.confirm('WARNING: This will erase all your changes and reset to the default portfolio data. Are you absolutely sure?')) {
      resetAll();
      showToast('Site data reset to defaults.');
    }
  };

  return (
    <div>
      <div className="admin-card">
        <h2>Change Password</h2>
        <div className="admin-field">
          <label>Current Password</label>
          <input 
            type="password" 
            value={passwords.current} 
            onChange={(e) => setPasswords({...passwords, current: e.target.value})} 
          />
        </div>
        <div className="admin-field">
          <label>New Password</label>
          <input 
            type="password" 
            value={passwords.new} 
            onChange={(e) => setPasswords({...passwords, new: e.target.value})} 
          />
        </div>
        <div className="admin-field">
          <label>Confirm New Password</label>
          <input 
            type="password" 
            value={passwords.confirm} 
            onChange={(e) => setPasswords({...passwords, confirm: e.target.value})} 
          />
        </div>
        <button className="admin-btn" onClick={handlePasswordSave}>Update Password</button>
      </div>

      <div className="admin-card">
        <h2>CV / Resume Settings</h2>
        <div className="admin-field">
          <label>CV File URL / Path</label>
          <input 
            value={cv.url || ''} 
            onChange={(e) => setCv({...cv, url: e.target.value})} 
          />
        </div>
        <div className="admin-field">
          <label>Download Button Label</label>
          <input 
            value={cv.label || ''} 
            onChange={(e) => setCv({...cv, label: e.target.value})} 
          />
        </div>
        <button className="admin-btn" onClick={handleCVSave}>Save CV Settings</button>
      </div>

      <div className="admin-card">
        <h2>Data Management</h2>
        <p style={{ color: 'var(--text-2)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          Export your site data as a JSON file to create a backup, or import a previous backup.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="admin-btn" onClick={handleExport}>
            Export JSON Backup
          </button>
          
          <button className="admin-btn-outline" onClick={() => fileInputRef.current?.click()}>
            Import JSON
          </button>
          <input 
            type="file" 
            accept=".json" 
            ref={fileInputRef} 
            onChange={handleImport} 
            style={{ display: 'none' }} 
          />
        </div>
      </div>

      <div className="admin-card" style={{ borderColor: 'rgba(255, 59, 48, 0.3)' }}>
        <h2 style={{ color: '#ff3b30' }}>Danger Zone</h2>
        <p style={{ color: 'var(--text-2)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          Resetting will permanently erase all custom edits and restore the original template data.
        </p>
        <button className="admin-btn-danger" onClick={handleReset} style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
          Reset Site to Defaults
        </button>
      </div>
    </div>
  );
}
