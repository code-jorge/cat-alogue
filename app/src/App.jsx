import React, { useState } from "react";
import ReactDOM from "react-dom";
import Loader from "./components/Loader";

import "./index.css";

// These 2 come from module federation
const Gallery = React.lazy(() => import('components/Gallery'));
const Image = React.lazy(() => import('components/Image'));

import basketCat from './gallery/basket-cat.jpg';
import christmasCat from './gallery/christmas-cat.jpg';
import duckCat from './gallery/duck-cat.jpg';
import earthbendingCat from './gallery/earthbending-cat.jpg';
import leafCat from './gallery/leaf-cat.jpg';
import sleepyCat from './gallery/sleepy-cat.jpg';
import squatCat from './gallery/squat-cat.jpg';

const CATS = [
  {
    name: 'Lord Bascatto',
    image: basketCat,
    description: 'Does not usually leave the basket. Likes to be carried around.',
  },
  {
    name: 'Santa Claws',
    image: christmasCat,
    description: 'Likes to sit on the tree and watch the birds.',
  },
  {
    name: 'Duck Cat',
    image: duckCat,
    description: 'Has a loyal duck army, will attack on command.',
  },
  {
    name: 'Cat-aclism',
    image: earthbendingCat,
    description: 'Can bend earth and rocks to his will.',
  },
  {
    name: 'Cat-mouflage',
    image: leafCat,
    description: 'Can blend in with the leaves and trees.',
  },
  {
    name: 'Sleepy Cat',
    image: sleepyCat,
    description: 'If you wake him up, your life is over.',
  },
  {
    name: 'The Cat Squat',
    image: squatCat,
    description: 'One is a threat, two is a death sentence, more than three is a massacre.',
  }
]

const App = () => {
  
  const [cat, setCat] = useState(null);
  
  return (
    <>
      <header className='header'>
        <code className='title' />
      </header>
      <div className="container">
        <React.Suspense fallback={<Loader />}>
          <Gallery 
            className='gallery'
            images={CATS.map(cat => cat.image)}
            onClick={(index)=> setCat(CATS[index])}
          />
        </React.Suspense>
        <React.Suspense fallback={<Loader />}>
          {cat && (
            <Image
              className='image'
              name={cat.name}
              description={cat.description}
              image={cat.image}
            />
          )}
        </React.Suspense>
      </div>
    </>
  );
} 

ReactDOM.render(<App />, document.getElementById("app"));