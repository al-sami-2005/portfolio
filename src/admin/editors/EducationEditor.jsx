import React, { useState } from 'react';
import { useSiteData } from '../../context/SiteDataContext';

export default function EducationEditor({ showToast }) {
  const { data, updateSection } = useSiteData();
  const [formData, setFormData] = useState(data.education);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateSection('education', formData);
    showToast('Education section saved!');
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
      entries: [...formData.entries, { year: '', degree: '', school: '', desc: '', badge: '', featured: false }] 
    });
  };

  return (
    <div className="admin-card">
      <div className="admin-editor-header">
        <h2>Education Settings</h2>
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
              <label>Year</label>
              <input value={entry.year || ''} onChange={(e) => handleEntryChange(i, 'year', e.target.value)} />
            </div>
            <div className="admin-field">
              <label>Degree</label>
              <input value={entry.degree || ''} onChange={(e) => handleEntryChange(i, 'degree', e.target.value)} />
            </div>
            <div className="admin-field">
              <label>School</label>
              <input value={entry.school || ''} onChange={(e) => handleEntryChange(i, 'school', e.target.value)} />
            </div>
            <div className="admin-field">
              <label>Description</label>
              <textarea value={entry.desc || ''} onChange={(e) => handleEntryChange(i, 'desc', e.target.value)} />
            </div>
            <div className="admin-field">
              <label>Badge</label>
              <input value={entry.badge || ''} onChange={(e) => handleEntryChange(i, 'badge', e.target.value)} />
            </div>
            <div className="admin-field" style={{ flexDirection: 'row', alignItems: 'center', gap: '0.5rem' }}>
              <input 
                type="checkbox" 
                checked={entry.featured || false} 
                onChange={(e) => handleEntryChange(i, 'featured', e.target.checked)} 
                style={{ width: 'auto' }}
              />
              <label style={{ margin: 0 }}>Featured</label>
            </div>
          </div>
        ))}
      </div>
      <button className="admin-btn-outline" onClick={addEntry}>+ Add Education Entry</button>
    </div>
  );
}
