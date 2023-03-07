import React from 'react';
import css from './Image.module.css';

const Image = ({ className, name, description, image })=> {

  const handleMouseMove = (e)=> {
    const poster = document.getElementById('poster');
    const height = poster.clientHeight;
    const width = poster.clientWidth;
    const { layerX, layerY } = e.nativeEvent;
    const xRotation = -30 * (layerY - height/2) / height;
    const yRotation = 30 * (layerX - width/2) / width;
    const transform = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    poster.style.transform = transform;
    caption.style.transform = transform;
  }

  const handleMouseOut = ()=> {
    const poster = document.getElementById('poster');
    const transform = `perspective(500px) scale(1) rotateX(0deg) rotateY(0deg)`;
    poster.style.transform = transform;
    caption.style.transform = transform;
  }

  return (
    <div 
      className={`${className} ${css.mask}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
      >
      <div
        id="poster"
        className={css.poster}
        style={{ backgroundImage: `url(${image})` }}
      >
        <code className={css.caption}>
          {name}
        </code>
        <code className={css.description}>
          {description}
        </code>
      </div>
      
    </div>
  )
}

export default Image