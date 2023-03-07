import React from 'react';
import css from './Gallery.module.css';

const Gallery = ({ className, images=[], onClick })=> (
  <section className={`${className} ${css.gallery}`}>
    {images.map((image, index)=> (
      <img
        key={index}
        className={css.image}
        src={image}
        alt=''
        onClick={()=>onClick(index)}
      />
    ))}
  </section>
)

export default Gallery