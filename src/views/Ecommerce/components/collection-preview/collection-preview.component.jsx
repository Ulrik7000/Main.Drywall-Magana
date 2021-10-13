import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.css';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-previewa'>
    <h1 className='titlea'>{title.toUpperCase()}</h1>
    <div className='previewa'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
