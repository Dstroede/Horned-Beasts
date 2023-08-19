import React from 'react';
import HornedBeast from './HornedBeast';

class Gallery extends React.Component {
    render () {
        return (
        <main>
         <HornedBeast name='Narwhal'
          src='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
           alt='Narwhal' 
           title='UniWhal' 
           description='A unicorn and a narwhal nuzzling their horns'/>
         <HornedBeast name='Rhino' 
         src='https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80' 
         alt='Rhino Family' 
         title='UniWhal' 
         description='Parent rhino with two babies'/>
         <HornedBeast name='Unicorn' 
         src='https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg' 
         alt='Unicorn' 
         title='Unicorn Head' 
         description='Someone wearing a very silly unicorn head mask'/>
        </main>
        )
      }

}

export default Gallery;