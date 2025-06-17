import React, { useState } from 'react';
import "../styles/components/Lightbox.scss"; // Add zoom styles here

export default function Lightbox({ src, alt, zoom, close, download }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scale, setScale] = useState(1);

    function handleWheel(e) {
        e.preventDefault();
        setScale(prev => Math.max(1, prev + (e.deltaY > 0 ? -0.1 : 0.1)));
    }

  return (
    <>
    <div className="image" onClick={() => setIsOpen(true)}>
        <img
          src={src.src}
          alt={alt}
          className="lightbox-thumb"
        />
        <div className="magnify">
          <img src={zoom.src} className="magnify_icon" alt="Zoom in on menu." role="button" />
        </div>
      </div>
      {isOpen && (
        <div className="lightbox-backdrop" onClick={() => setIsOpen(false)}>
          <img
            src={src.src}
            alt={alt}
            className="lightbox-full"
            style={{ transform: `scale(${scale})` }}
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
          />
          <div className="buttons">
                <a className="btn" onClick={() => setIsOpen(false)}>
                    <img src={close.src} alt="Close window." role='button' />
                </a>
                <a href={src} download={`pbp-menu-${Date.now()}.jpg`} className="btn" onClick={(e) => e.stopPropagation()} >
                    <img src={download.src} alt="Download menu." role='button'/>
                </a>
          </div>
        </div>
      )}
    </>
  );
}
