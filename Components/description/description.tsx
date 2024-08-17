'use client';

import React, { useState } from 'react';
import '@/Components/description/description.css';

export default function Description() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`description-wrapper ${isExpanded ? 'expanded' : ''}`}>
      <div className="description-container" onClick={toggleExpand}>
        <span className="description-text">Description</span>
        <button className="description-button">
          <span className="plus-icon">{isExpanded ? '-' : '+'}</span>
        </button>
      </div>
      <div className={`description-content ${isExpanded ? 'show' : 'hide'}`}>
        <p>Step into comfort and style with these versatile shoes, designed for everyday wear. Crafted with premium materials, they offer a perfect blend of durability and flexibility. The cushioned insole provides all-day support, while the breathable upper ensures your feet stay cool and dry. With a sleek design and a variety of colors to choose from, these shoes are perfect for both casual outings and more formal occasions. Whether you're walking through the city or heading to a meeting, these shoes will keep you comfortable and looking sharp.</p>
      </div>
    </div>
  );
}
