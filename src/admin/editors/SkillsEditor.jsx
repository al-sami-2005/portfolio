import React, { useState } from 'react';
import { useSiteData } from '../../context/SiteDataContext';

export default function SkillsEditor({ showToast }) {
  const { data, updateSection } = useSiteData();
  const [formData, setFormData] = useState(data.skills);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateSection('skills', formData);
    showToast('Skills section saved!');
  };

  const handleEntryChange = (index, field, value) => {
    const newEntries = [...formData.entries];
    newEntries[index] = { ...newEntries[index], [field]: value };
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
      entries: [...formData.entries, { name: '', icon: '', pct: 50 }] 
    });
  };

  return (
    <div className="admin-card">
      <div className="admin-editor-header">
        <h2>Skills Settings</h2>
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

      <h3>Skills Entries</h3>
      <div className="admin-list">
        {formData.entries?.map((entry, i) => (
          <div key={i} className="admin-list-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="admin-field" style={{ flex: '1 1 200px', margin: 0 }}>
              <label>Name</label>
              <input value={entry.name || ''} onChange={(e) => handleEntryChange(i, 'name', e.target.value)} />
            </div>
            <div className="admin-field" style={{ width: '80px', margin: 0 }}>
              <label>Icon</label>
              <input value={entry.icon || ''} onChange={(e) => handleEntryChange(i, 'icon', e.target.value)} />
            </div>
            <div className="admin-field" style={{ flex: '1 1 200px', margin: 0 }}>
              <label>Proficiency ({entry.pct}%)</label>
              <input 
                type="range" 
                min="0" max="100" 
                value={entry.pct || 0} 
                onChange={(e) => handleEntryChange(i, 'pct', Number(e.target.value))} 
              />
            </div>
            <button className="admin-btn-danger" style={{ alignSelf: 'flex-end', marginBottom: '4px' }} onClick={() => removeEntry(i)}>Remove</button>
          </div>
        ))}
      </div>
      <button className="admin-btn-outline" onClick={addEntry}>+ Add Skill</button>
    </div>
  );
}
