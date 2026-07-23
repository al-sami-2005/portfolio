import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { useSiteData } from '../context/SiteDataContext';

function CvDownload() {
  const { data } = useSiteData();
  const { cv } = data;
  
  return (
    <a
      href={cv.url}
      download
      className="cv-fab"
      title={cv.label}
      aria-label={cv.label}
    >
      <FiDownload size={16} />
      {cv.label}
    </a>
  );
}

export default CvDownload;
