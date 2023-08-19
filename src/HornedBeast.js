import React from 'react';
class HornedBeast extends React.Component {


    render () {
        return(
          <article>
            <h2>{this.props.name}</h2>
            <img src= {this.props.src} alt= {this.props.alt}/>{this.props.title}
            <p>{this.props.description}</p>
          </article>
        )
    }
}
export default HornedBeast;