import React, { useState } from 'react';
import { useSiteData } from '../../context/SiteDataContext';

export default function HeaderEditor({ showToast }) {
  const { data, updateSection } = useSiteData();
  const [formData, setFormData] = useState(data.header);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateSection('header', formData);
    showToast('Header section saved!');
  };

  const handleNavLinkChange = (index, value) => {
    const newNavLinks = [...formData.navLinks];
    newNavLinks[index] = value;
    setFormData({ ...formData, navLinks: newNavLinks });
  };

  const addNavLink = () => {
    setFormData({ ...formData, navLinks: [...formData.navLinks, ''] });
  };

  const removeNavLink = (index) => {
    const newNavLinks = [...formData.navLinks];
    newNavLinks.splice(index, 1);
    setFormData({ ...formData, navLinks: newNavLinks });
  };

  return (
    <div className="admin-card">
      <div className="admin-editor-header">
        <h2>Header Settings</h2>
        <button className="admin-btn" onClick={handleSave}>Save Changes</button>
      </div>

      <div className="admin-field">
        <label>Logo Text</label>
        <input name="logo" value={formData.logo || ''} onChange={handleChange} />
      </div>

      <div className="admin-field">
        <label>CTA Button Text</label>
        <input name="ctaText" value={formData.ctaText || ''} onChange={handleChange} />
      </div>

      <h3>Navigation Links</h3>
      <div className="admin-list">
        {formData.navLinks?.map((link, i) => (
          <div key={i} className="admin-list-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div className="admin-field" style={{ flex: 1, margin: 0 }}>
              <input value={link || ''} onChange={(e) => handleNavLinkChange(i, e.target.value)} />
            </div>
            <button className="admin-btn-danger" onClick={() => removeNavLink(i)}>Remove</button>
          </div>
        ))}
      </div>
      <button className="admin-btn-outline" onClick={addNavLink}>+ Add Link</button>
    </div>
  );
}
