import React from 'react';
import './styles/carousel.css'
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

class Carousel extends React.Component {

  render () {
    const { data } = this.props
    return (
      <StyleRoot className='firulais'>
        <Coverflow
          className='carousel'
          infiniteScroll={true}
          navigation={false} 
          enableScroll={false}
          displayQuantityOfSide={2}
          enableHeading
          media={{
            '@media (max-width: 900px)': {
              width: '600px',
              height: '300px'
            },
            '@media (min-width: 900px)': {
              width: '960px',
              height: '600px'
            }
          }}
        >
          {data.map((item, i) =>
            <img key={item.key} src={item.image} alt='Album one' data-action={item.link}/>
          )}
        </Coverflow>
      </StyleRoot>
    )
  }
}
export default Carousel