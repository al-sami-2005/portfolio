import React, { useState } from 'react';
import { useSiteData } from '../../context/SiteDataContext';

export default function FooterEditor({ showToast }) {
  const { data, updateSection } = useSiteData();
  const [formData, setFormData] = useState(data.footer);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateSection('footer', formData);
    showToast('Footer section saved!');
  };

  const handlePhoneChange = (index, field, value) => {
    const newPhones = [...formData.phones];
    newPhones[index] = { ...newPhones[index], [field]: value };
    setFormData({ ...formData, phones: newPhones });
  };

  const addPhone = () => {
    setFormData({ ...formData, phones: [...formData.phones, { number: '', href: '' }] });
  };
  
  const removePhone = (index) => {
    const newPhones = [...formData.phones];
    newPhones.splice(index, 1);
    setFormData({ ...formData, phones: newPhones });
  };

  const handleSocialChange = (index, field, value) => {
    const newSocials = [...formData.socials];
    newSocials[index] = { ...newSocials[index], [field]: value };
    setFormData({ ...formData, socials: newSocials });
  };

  const addSocial = () => {
    setFormData({ ...formData, socials: [...formData.socials, { label: '', url: '' }] });
  };
  
  const removeSocial = (index) => {
    const newSocials = [...formData.socials];
    newSocials.splice(index, 1);
    setFormData({ ...formData, socials: newSocials });
  };

  return (
    <div className="admin-card">
      <div className="admin-editor-header">
        <h2>Footer Settings</h2>
        <button className="admin-btn" onClick={handleSave}>Save Changes</button>
      </div>

      <div className="admin-field">
        <label>Background Text</label>
        <input name="bgText" value={formData.bgText || ''} onChange={handleChange} />
      </div>

      <div className="admin-field">
        <label>Eyebrow</label>
        <input name="eyebrow" value={formData.eyebrow || ''} onChange={handleChange} />
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
        <label>Subtitle</label>
        <textarea name="subtitle" value={formData.subtitle || ''} onChange={handleChange} />
      </div>

      <div className="admin-field">
        <label>Email Address</label>
        <input name="email" value={formData.email || ''} onChange={handleChange} />
      </div>
      
      <div className="admin-field">
        <label>CTA Button Text</label>
        <input name="ctaText" value={formData.ctaText || ''} onChange={handleChange} />
      </div>

      <h3>Phone Numbers</h3>
      <div className="admin-list">
        {formData.phones?.map((phone, i) => (
          <div key={i} className="admin-list-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div className="admin-field" style={{ flex: 1, margin: 0 }}>
              <label>Number (Display)</label>
              <input value={phone.number || ''} onChange={(e) => handlePhoneChange(i, 'number', e.target.value)} />
            </div>
            <div className="admin-field" style={{ flex: 1, margin: 0 }}>
              <label>Link (e.g., tel:+1...)</label>
              <input value={phone.href || ''} onChange={(e) => handlePhoneChange(i, 'href', e.target.value)} />
            </div>
            <button className="admin-btn-danger" style={{ alignSelf: 'flex-end', marginBottom: '4px' }} onClick={() => removePhone(i)}>Remove</button>
          </div>
        ))}
      </div>
      <button className="admin-btn-outline" onClick={addPhone}>+ Add Phone</button>

      <h3 style={{ marginTop: '2rem' }}>Social Links</h3>
      <div className="admin-list">
        {formData.socials?.map((social, i) => (
          <div key={i} className="admin-list-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div className="admin-field" style={{ flex: 1, margin: 0 }}>
              <label>Label</label>
              <input value={social.label || ''} onChange={(e) => handleSocialChange(i, 'label', e.target.value)} />
            </div>
            <div className="admin-field" style={{ flex: 1, margin: 0 }}>
              <label>URL</label>
              <input value={social.url || ''} onChange={(e) => handleSocialChange(i, 'url', e.target.value)} />
            </div>
            <button className="admin-btn-danger" style={{ alignSelf: 'flex-end', marginBottom: '4px' }} onClick={() => removeSocial(i)}>Remove</button>
          </div>
        ))}
      </div>
      <button className="admin-btn-outline" onClick={addSocial}>+ Add Social</button>

      <h3 style={{ marginTop: '2rem' }}>Other</h3>
      <div className="admin-field">
        <label>Copyright Text</label>
        <input name="copyright" value={formData.copyright || ''} onChange={handleChange} />
      </div>
      <div className="admin-field">
        <label>Built With Text</label>
        <input name="builtWith" value={formData.builtWith || ''} onChange={handleChange} />
      </div>
    </div>
  );
}
