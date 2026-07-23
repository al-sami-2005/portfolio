import React, { useState } from 'react';
import { useSiteData } from '../../context/SiteDataContext';

export default function HeroEditor({ showToast }) {
  const { data, updateSection } = useSiteData();
  const [formData, setFormData] = useState(data.hero);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateSection('hero', formData);
    showToast('Hero section saved!');
  };

  const handleRoleChange = (index, value) => {
    const newRoles = [...formData.roles];
    newRoles[index] = value;
    setFormData({ ...formData, roles: newRoles });
  };

  const removeRole = (index) => {
    const newRoles = [...formData.roles];
    newRoles.splice(index, 1);
    setFormData({ ...formData, roles: newRoles });
  };

  const addRole = () => {
    setFormData({ ...formData, roles: [...formData.roles, ''] });
  };

  const handleStatChange = (index, field, value) => {
    const newStats = [...formData.stats];
    newStats[index] = { ...newStats[index], [field]: value };
    setFormData({ ...formData, stats: newStats });
  };

  const removeStat = (index) => {
    const newStats = [...formData.stats];
    newStats.splice(index, 1);
    setFormData({ ...formData, stats: newStats });
  };

  const addStat = () => {
    setFormData({ ...formData, stats: [...formData.stats, { num: '', label: '' }] });
  };

  return (
    <div className="admin-card">
      <div className="admin-editor-header">
        <h2>Hero Settings</h2>
        <button className="admin-btn" onClick={handleSave}>Save Changes</button>
      </div>

      <div className="admin-field">
        <label>First Name</label>
        <input name="firstName" value={formData.firstName || ''} onChange={handleChange} />
      </div>

      <div className="admin-field">
        <label>Last Name</label>
        <input name="lastName" value={formData.lastName || ''} onChange={handleChange} />
      </div>

      <div className="admin-field">
        <label>Eyebrow</label>
        <input name="eyebrow" value={formData.eyebrow || ''} onChange={handleChange} />
      </div>
      
      <div className="admin-field">
        <label>Badge Text</label>
        <input name="badgeText" value={formData.badgeText || ''} onChange={handleChange} />
      </div>

      <div className="admin-field">
        <label>Photo URL</label>
        <input name="photo" value={formData.photo || ''} onChange={handleChange} />
      </div>

      <h3>Roles</h3>
      <div className="admin-list">
        {formData.roles?.map((role, i) => (
          <div key={i} className="admin-list-item">
            <div className="admin-list-item-header">
              <button className="admin-btn-danger" onClick={() => removeRole(i)}>Remove</button>
            </div>
            <div className="admin-field">
              <input value={role} onChange={(e) => handleRoleChange(i, e.target.value)} />
            </div>
          </div>
        ))}
      </div>
      <button className="admin-btn-outline" onClick={addRole}>+ Add Role</button>

      <h3 style={{ marginTop: '2rem' }}>Stats</h3>
      <div className="admin-list">
        {formData.stats?.map((stat, i) => (
          <div key={i} className="admin-list-item">
            <div className="admin-list-item-header">
              <button className="admin-btn-danger" onClick={() => removeStat(i)}>Remove</button>
            </div>
            <div className="admin-field">
              <label>Number</label>
              <input value={stat.num} onChange={(e) => handleStatChange(i, 'num', e.target.value)} />
            </div>
            <div className="admin-field">
              <label>Label</label>
              <input value={stat.label} onChange={(e) => handleStatChange(i, 'label', e.target.value)} />
            </div>
          </div>
        ))}
      </div>
      <button className="admin-btn-outline" onClick={addStat}>+ Add Stat</button>
    </div>
  );
}
