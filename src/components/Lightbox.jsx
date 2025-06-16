import React, { useState } from 'react';
import "../styles/components/Lightbox.scss"; // Add zoom styles here

export default function Lightbox({ src, alt }) {
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
          src={src}
          alt={alt}
          className="lightbox-thumb"
        />
        <div className="magnify">
          <img src={"/icon/zoom_icon.png"} className="magnify_icon"/>
        </div>
      </div>
      {isOpen && (
        <div className="lightbox-backdrop" onClick={() => setIsOpen(false)}>
          <img
            src={src}
            alt={alt}
            className="lightbox-full"
            style={{ transform: `scale(${scale})` }}
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
          />
          <div className="buttons">
                <a className="btn" onClick={() => setIsOpen(false)}>
                    <img src='/icon/close_icon.png' />
                </a>
                <a href={src} download={`pbp-menu-${Date.now()}.jpg`} className="btn" onClick={(e) => e.stopPropagation()}>
                    <img src='/icon/download_icon.png' />
                </a>
          </div>
        </div>
      )}
    </>
  );
}
