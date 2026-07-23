import React, { useState } from 'react';
import { useSiteData } from '../../context/SiteDataContext';

export default function ExperienceEditor({ showToast }) {
  const { data, updateSection } = useSiteData();
  const [formData, setFormData] = useState(data.experience);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateSection('experience', formData);
    showToast('Experience section saved!');
  };

  const handleEntryChange = (index, field, value) => {
    const newEntries = [...formData.entries];
    newEntries[index] = { ...newEntries[index], [field]: value };
    setFormData({ ...formData, entries: newEntries });
  };

  const handleTagsChange = (index, value) => {
    const tags = value.split(',').map(t => t.trim()).filter(Boolean);
    const newEntries = [...formData.entries];
    newEntries[index] = { ...newEntries[index], tags };
    setFormData({ ...formData, entries: newEntries });
  };

  const handleBulletsChange = (index, value) => {
    const bullets = value.split('\n').filter(Boolean);
    const newEntries = [...formData.entries];
    newEntries[index] = { ...newEntries[index], bullets };
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
      entries: [...formData.entries, { title: '', company: '', date: '', tags: [], bullets: [] }] 
    });
  };

  return (
    <div className="admin-card">
      <div className="admin-editor-header">
        <h2>Experience Settings</h2>
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
            <div className="admin-field">
              <label>Title</label>
              <input value={entry.title || ''} onChange={(e) => handleEntryChange(i, 'title', e.target.value)} />
            </div>
            <div className="admin-field">
              <label>Company</label>
              <input value={entry.company || ''} onChange={(e) => handleEntryChange(i, 'company', e.target.value)} />
            </div>
            <div className="admin-field">
              <label>Date</label>
              <input value={entry.date || ''} onChange={(e) => handleEntryChange(i, 'date', e.target.value)} />
            </div>
            <div className="admin-field">
              <label>Tags (comma separated)</label>
              <input value={entry.tags?.join(', ') || ''} onChange={(e) => handleTagsChange(i, e.target.value)} />
            </div>
            <div className="admin-field">
              <label>Bullets (one per line)</label>
              <textarea value={entry.bullets?.join('\n') || ''} onChange={(e) => handleBulletsChange(i, e.target.value)} />
            </div>
          </div>
        ))}
      </div>
      <button className="admin-btn-outline" onClick={addEntry}>+ Add Experience Entry</button>
    </div>
  );
}
