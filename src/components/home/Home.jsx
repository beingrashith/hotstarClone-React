import React from 'react';
import "../home/Home.css";
import Slider from './slider/Slider';
import { cards, movies, pictures, hollywood } from '../../datas/Datas';
import Cards from './cards/Cards';
import Movies from './cards/Movies';
import Picture from './cards/Picture';
import Hollywood from './cards/Hollywood';


function Home() {
  return (
    <>

      <Slider />
      <h3 className='header'>StarPlus Shows</h3>
      <Cards cards={cards} />
      <h3 className='header'>Latest And Trending</h3>
      <Movies movies={movies} />
      <h3 className='header'>Popular Shows</h3>
      <Picture pictures={pictures} />
      <h3 className='header'>Action Shows</h3>
      <Hollywood hollywood={hollywood} />
      <h3 className='header'>Popular Movies</h3>
      <Cards cards={cards} />
      <h3 className='header'>Free Family Movies</h3>
      <Picture pictures={pictures} />

    </>
  )
}

export default Home