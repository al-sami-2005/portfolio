import React, { useState } from 'react';
import { useSiteData } from '../../context/SiteDataContext';

export default function AboutEditor({ showToast }) {
  const { data, updateSection } = useSiteData();
  const [formData, setFormData] = useState(data.about);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateSection('about', formData);
    showToast('About section saved!');
  };

  const handleBioChange = (index, value) => {
    const newBio = [...formData.bio];
    newBio[index] = value;
    setFormData({ ...formData, bio: newBio });
  };

  const addBio = () => {
    setFormData({ ...formData, bio: [...formData.bio, ''] });
  };

  const removeBio = (index) => {
    const newBio = [...formData.bio];
    newBio.splice(index, 1);
    setFormData({ ...formData, bio: newBio });
  };
  
  const handleBadgeChange = (e) => {
    setFormData({ ...formData, badge: { ...formData.badge, [e.target.name]: e.target.value } });
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
        <h2>About Settings</h2>
        <button className="admin-btn" onClick={handleSave}>Save Changes</button>
      </div>

      <div className="admin-field">
        <label>Section Label</label>
        <input name="sectionLabel" value={formData.sectionLabel || ''} onChange={handleChange} />
      </div>

      <div className="admin-field">
        <label>Title</label>
        <input name="title" value={formData.title || ''} onChange={handleChange} />
      </div>

      <div className="admin-field">
        <label>Title Accent</label>
        <input name="titleAccent" value={formData.titleAccent || ''} onChange={handleChange} />
      </div>
      
      <div className="admin-field">
        <label>Title End</label>
        <input name="titleEnd" value={formData.titleEnd || ''} onChange={handleChange} />
      </div>

      <div className="admin-field">
        <label>Photo URL</label>
        <input name="photo" value={formData.photo || ''} onChange={handleChange} />
      </div>

      <h3>Badge</h3>
      <div className="admin-field">
        <label>Number</label>
        <input name="num" value={formData.badge?.num || ''} onChange={handleBadgeChange} />
      </div>
      <div className="admin-field">
        <label>Label</label>
        <input name="label" value={formData.badge?.label || ''} onChange={handleBadgeChange} />
      </div>

      <h3>Bio Paragraphs</h3>
      <div className="admin-list">
        {formData.bio?.map((paragraph, i) => (
          <div key={i} className="admin-list-item">
            <div className="admin-list-item-header">
              <button className="admin-btn-danger" onClick={() => removeBio(i)}>Remove</button>
            </div>
            <div className="admin-field">
              <textarea value={paragraph} onChange={(e) => handleBioChange(i, e.target.value)} />
            </div>
          </div>
        ))}
      </div>
      <button className="admin-btn-outline" onClick={addBio}>+ Add Paragraph</button>

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
