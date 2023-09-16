import React from 'react';
import HornedBeast from './HornedBeast';
import { Container, Row } from "react-bootstrap";

// import { getByTitle } from '@testing-library/react';


class Gallery extends React.Component {
    render () {

        return (
        <main>
          <Container id='cards'>
            <Row class='p-3' xs={1} sm={2} md= {3} lg={5} xl={6} xxl={7} >
                {this.props.beastData.map((beast, index)=>
                  <HornedBeast
                    beast={beast}
                    key={beast._id}
                    title={beast.title}
                    image_url={beast.image_url}
                    keyword={beast.keyword}
                    description={beast.description}
                    setSelectBeast={this.props.setSelectBeast}
                    showBeastModal={this.props.showBeastModal}
                 />
                )}
            </Row>
          </Container>
        </main>
        )
      }
    };


export default Gallery;