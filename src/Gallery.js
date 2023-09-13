import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import { Container, Row } from "react-bootstrap";

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
          <Container id='cards'>
            <Row class='p-3' xs={1} sm={2} md= {3} lg={5} xl={6} xxl={7} >
                {beasts}
            </Row>
          </Container>
        </main>
        )
      }

}

export default Gallery;