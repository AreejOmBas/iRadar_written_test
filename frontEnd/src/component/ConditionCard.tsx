import React, { SyntheticEvent } from 'react';
import './ConditionCard.css';

/* 
  Functional component to represent each condition as a card 
 */


interface Props {
  image?: string;
  snippet?: string;
  label: string;
  synonyms?: Array<string>;
  keywords?: Array<string>;
}

export const ConditionCard: React.FC<Props> = ({ image, snippet, label }) => {

  // fall back funtion when an image is not properly loaded , it replaces the src of the image with a generic one
  const addDefaultSrc = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      'https://cdn.pixabay.com/photo/2013/07/18/10/55/dna-163466_1280.jpg';
  };

  return (
    <article className='card'>
      {image ? ( // if image is not available will use a generic one
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

        {snippet && ( // if snippet missing will only show find out more.
          <span> {snippet.substring(0, snippet.lastIndexOf(' ', 50))}</span>
        )}
        <span>.... </span><a href='#'>find out more.</a>
      </div>
    </article>
  );
};
