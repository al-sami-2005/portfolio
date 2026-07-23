import React, { useState, useEffect } from 'react';
import './admin.css';
import AdminLogin from './AdminLogin';
import HeroEditor from './editors/HeroEditor';
import AboutEditor from './editors/AboutEditor';
import ExperienceEditor from './editors/ExperienceEditor';
import EducationEditor from './editors/EducationEditor';
import SkillsEditor from './editors/SkillsEditor';
import ProjectsEditor from './editors/ProjectsEditor';
import PublicationsEditor from './editors/PublicationsEditor';
import FooterEditor from './editors/FooterEditor';
import HeaderEditor from './editors/HeaderEditor';
import SettingsEditor from './editors/SettingsEditor';

const TABS = [
  'Hero', 'About', 'Experience', 'Education', 'Skills',
  'Projects', 'Publications', 'Footer', 'Header', 'Settings'
];

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('Hero');
  const [toast, setToast] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('admin-auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2000);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin-auth');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  const renderEditor = () => {
    const props = { showToast };
    switch (activeTab) {
      case 'Hero': return <HeroEditor {...props} />;
      case 'About': return <AboutEditor {...props} />;
      case 'Experience': return <ExperienceEditor {...props} />;
      case 'Education': return <EducationEditor {...props} />;
      case 'Skills': return <SkillsEditor {...props} />;
      case 'Projects': return <ProjectsEditor {...props} />;
      case 'Publications': return <PublicationsEditor {...props} />;
      case 'Footer': return <FooterEditor {...props} />;
      case 'Header': return <HeaderEditor {...props} />;
      case 'Settings': return <SettingsEditor {...props} />;
      default: return null;
    }
  };

  return (
    <div className="admin-shell">
      <div className="admin-sidebar">
        {TABS.map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="admin-content-wrapper">
        <header className="admin-header">
          <h1>{activeTab} Editor</h1>
          <div className="admin-header-actions">
            <a href="/">← View Site</a>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </header>
        
        <div className="admin-content">
          {renderEditor()}
        </div>
      </div>

      {toast && (
        <div className="admin-toast">
          {toast}
        </div>
      )}
    </div>
  );
}
