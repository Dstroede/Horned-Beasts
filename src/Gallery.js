import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
// import { getByTitle } from '@testing-library/react';


class Gallery extends React.Component {
    render () {
      let beasts = [];
      data.forEach((animal) => {
        beasts.push(<HornedBeast
        name={animal.title}
        image_url={animal.image_url}
        alt={animal.alt}
        title={animal.keyword}
        description={animal.description}
        />)
      });

        return (
        <main>
          {beasts}
        </main>
        )
      }

}

export default Gallery;