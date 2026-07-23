import React, { useState } from 'react';
import { useSiteData } from '../../context/SiteDataContext';

export default function ProjectsEditor({ showToast }) {
  const { data, updateSection } = useSiteData();
  const [formData, setFormData] = useState(data.projects);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateSection('projects', formData);
    showToast('Projects section saved!');
  };

  const handleEntryChange = (index, field, value) => {
    const newEntries = [...formData.entries];
    newEntries[index] = { ...newEntries[index], [field]: value };
    setFormData({ ...formData, entries: newEntries });
  };

  const handleTechChange = (index, value) => {
    const tech = value.split(',').map(t => t.trim()).filter(Boolean);
    const newEntries = [...formData.entries];
    newEntries[index] = { ...newEntries[index], tech };
    setFormData({ ...formData, entries: newEntries });
  };

  const removeEntry = (index) => {
    const newEntries = [...formData.entries];
    newEntries.splice(index, 1);
    setFormData({ ...formData, entries: newEntries });
  };

  const addEntry = () => {
    setFormData({ 
      ...formData, 
      entries: [...formData.entries, { num: '', title: '', desc: '', tech: [], img: '', github: '', live: '' }] 
    });
  };

  return (
    <div className="admin-card">
      <div className="admin-editor-header">
        <h2>Projects Settings</h2>
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

      <h3>Entries</h3>
      <div className="admin-list">
        {formData.entries?.map((entry, i) => (
          <div key={i} className="admin-list-item">
            <div className="admin-list-item-header">
              <button className="admin-btn-danger" onClick={() => removeEntry(i)}>Remove</button>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div className="admin-field" style={{ width: '80px' }}>
                <label>Num</label>
                <input value={entry.num || ''} onChange={(e) => handleEntryChange(i, 'num', e.target.value)} />
              </div>
              <div className="admin-field" style={{ flex: 1 }}>
                <label>Title</label>
                <input value={entry.title || ''} onChange={(e) => handleEntryChange(i, 'title', e.target.value)} />
              </div>
            </div>
            <div className="admin-field">
              <label>Description</label>
              <textarea value={entry.desc || ''} onChange={(e) => handleEntryChange(i, 'desc', e.target.value)} />
            </div>
            <div className="admin-field">
              <label>Tech Tags (comma separated)</label>
              <input value={entry.tech?.join(', ') || ''} onChange={(e) => handleTechChange(i, e.target.value)} />
            </div>
            <div className="admin-field">
              <label>Image URL</label>
              <input value={entry.img || ''} onChange={(e) => handleEntryChange(i, 'img', e.target.value)} />
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div className="admin-field" style={{ flex: 1 }}>
                <label>GitHub URL</label>
                <input value={entry.github || ''} onChange={(e) => handleEntryChange(i, 'github', e.target.value)} />
              </div>
              <div className="admin-field" style={{ flex: 1 }}>
                <label>Live URL</label>
                <input value={entry.live || ''} onChange={(e) => handleEntryChange(i, 'live', e.target.value)} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="admin-btn-outline" onClick={addEntry}>+ Add Project</button>
    </div>
  );
}
