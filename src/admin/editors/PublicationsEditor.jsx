import React, { useState } from 'react';
import { useSiteData } from '../../context/SiteDataContext';

export default function PublicationsEditor({ showToast }) {
  const { data, updateSection } = useSiteData();
  const [formData, setFormData] = useState(data.publications);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateSection('publications', formData);
    showToast('Publications section saved!');
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

  const handleLinkChange = (index, field, value) => {
    const newEntries = [...formData.entries];
    const newLinks = { ...newEntries[index].links, [field]: value === '' ? null : value };
    newEntries[index] = { ...newEntries[index], links: newLinks };
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
      entries: [...formData.entries, { 
        type: 'thesis', year: '', title: '', authors: '', venue: '', abstract: '', 
        tags: [], links: { pdf: null, doi: null, arxiv: null, code: null, cite: null }, 
        citations: 0, featured: false 
      }] 
    });
  };

  const handleBibtexChange = (index, value) => {
    const newBibtex = [...formData.bibtex];
    newBibtex[index] = value;
    setFormData({ ...formData, bibtex: newBibtex });
  };

  const addBibtex = () => {
    setFormData({ ...formData, bibtex: [...(formData.bibtex || []), ''] });
  };
  
  const removeBibtex = (index) => {
    const newBibtex = [...formData.bibtex];
    newBibtex.splice(index, 1);
    setFormData({ ...formData, bibtex: newBibtex });
  };

  return (
    <div className="admin-card">
      <div className="admin-editor-header">
        <h2>Publications Settings</h2>
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
              <div className="admin-field" style={{ flex: 1 }}>
                <label>Type</label>
                <select value={entry.type || 'conference'} onChange={(e) => handleEntryChange(i, 'type', e.target.value)}>
                  <option value="thesis">Thesis</option>
                  <option value="conference">Conference</option>
                  <option value="preprint">Preprint</option>
                  <option value="journal">Journal</option>
                </select>
              </div>
              <div className="admin-field" style={{ flex: 1 }}>
                <label>Year</label>
                <input value={entry.year || ''} onChange={(e) => handleEntryChange(i, 'year', e.target.value)} />
              </div>
            </div>

            <div className="admin-field">
              <label>Title</label>
              <input value={entry.title || ''} onChange={(e) => handleEntryChange(i, 'title', e.target.value)} />
            </div>

            <div className="admin-field">
              <label>Authors (HTML allowed)</label>
              <input value={entry.authors || ''} onChange={(e) => handleEntryChange(i, 'authors', e.target.value)} />
            </div>

            <div className="admin-field">
              <label>Venue</label>
              <input value={entry.venue || ''} onChange={(e) => handleEntryChange(i, 'venue', e.target.value)} />
            </div>

            <div className="admin-field">
              <label>Abstract</label>
              <textarea value={entry.abstract || ''} onChange={(e) => handleEntryChange(i, 'abstract', e.target.value)} />
            </div>

            <div className="admin-field">
              <label>Tags (comma separated)</label>
              <input value={entry.tags?.join(', ') || ''} onChange={(e) => handleTagsChange(i, e.target.value)} />
            </div>

            <h4>Links</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="admin-field">
                <label>PDF URL</label>
                <input value={entry.links?.pdf || ''} onChange={(e) => handleLinkChange(i, 'pdf', e.target.value)} />
              </div>
              <div className="admin-field">
                <label>DOI URL</label>
                <input value={entry.links?.doi || ''} onChange={(e) => handleLinkChange(i, 'doi', e.target.value)} />
              </div>
              <div className="admin-field">
                <label>arXiv URL</label>
                <input value={entry.links?.arxiv || ''} onChange={(e) => handleLinkChange(i, 'arxiv', e.target.value)} />
              </div>
              <div className="admin-field">
                <label>Code URL</label>
                <input value={entry.links?.code || ''} onChange={(e) => handleLinkChange(i, 'code', e.target.value)} />
              </div>
              <div className="admin-field">
                <label>Cite URL</label>
                <input value={entry.links?.cite || ''} onChange={(e) => handleLinkChange(i, 'cite', e.target.value)} />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <div className="admin-field" style={{ width: '100px' }}>
                <label>Citations</label>
                <input type="number" value={entry.citations || 0} onChange={(e) => handleEntryChange(i, 'citations', Number(e.target.value))} />
              </div>
              <div className="admin-field" style={{ flexDirection: 'row', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
                <input 
                  type="checkbox" 
                  checked={entry.featured || false} 
                  onChange={(e) => handleEntryChange(i, 'featured', e.target.checked)} 
                  style={{ width: 'auto' }}
                />
                <label style={{ margin: 0 }}>Featured</label>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="admin-btn-outline" onClick={addEntry}>+ Add Publication</button>

      <h3 style={{ marginTop: '2rem' }}>BibTeX Entries</h3>
      <div className="admin-list">
        {formData.bibtex?.map((bib, i) => (
          <div key={i} className="admin-list-item">
            <div className="admin-list-item-header">
              <button className="admin-btn-danger" onClick={() => removeBibtex(i)}>Remove</button>
            </div>
            <div className="admin-field">
              <textarea value={bib || ''} onChange={(e) => handleBibtexChange(i, e.target.value)} style={{ fontFamily: 'monospace' }} />
            </div>
          </div>
        ))}
      </div>
      <button className="admin-btn-outline" onClick={addBibtex}>+ Add BibTeX</button>
    </div>
  );
}
