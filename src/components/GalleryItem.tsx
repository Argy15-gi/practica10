import React from 'react';
import { GaleriaItem as GaleriaItemType } from '../types';

const GalleryItem = ({ item }: { item: GaleriaItemType }) => {
  const { img, title, category } = item;

  return (
    <div className="galeria-item">
      <img src={img} alt={title} />
      <div className="galeria-overlay">
        <h4>{title}</h4>
        <span>{category}</span>
      </div>
    </div>
  );
};

export default GalleryItem;
