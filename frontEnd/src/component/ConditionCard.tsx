import React, { SyntheticEvent } from 'react';

import './ConditionCard.css';

interface Props {
  image?: string;
  snippet?: string;
  label: string;
  synonyms?: Array<string>;
  keywords?: Array<string>;
}

export const ConditionCard: React.FC<Props> = ({ image, snippet, label }) => {
  const addDefaultSrc = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      'https://cdn.pixabay.com/photo/2013/07/18/10/55/dna-163466_1280.jpg';
  };

  return (
    <article className='card'>
      {image ? (
        <img
          className='card-img'
          onError={addDefaultSrc}
          src={image}
          alt={label}
        />
      ) : (
        <img
          className='card-generic-img'
          src='https://cdn.pixabay.com/photo/2013/07/18/10/55/dna-163466_1280.jpg'
          alt={label}
        />
      )}

      <div className='card-body'>
        <p className='card-title'>{label}</p>

        {snippet && (
          <span> {snippet.substring(0, snippet.lastIndexOf(' ', 50))}.... </span>
        )}
        <a href='#'>find out more.</a>
      </div>
    </article>
  );
};
