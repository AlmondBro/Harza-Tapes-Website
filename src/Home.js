import React from 'react';

// import Slideshow from "react-slidez";

// import { Slide } from 'react-slideshow-image';

// import PictureShow from 'react-picture-show';

const Home = (props) => {
    // const slideImages = [
    //     '/assets/img/Banner1.jpg',
    //     '/assets/img/Banner2.jpg',
    //   ];
      
    //   const properties = {
    //     duration: 5000,
    //     transitionDuration: 500,
    //     infinite: true,
    //     indicators: false,
    //     arrows: false
    //   };

    return (
        <section className="home-slideshow">
            {/* <Slideshow
                showIndex={false}
                showArrows={false}
                autoplay
                enableKeyboard
                useDotIndex
                slideInterval={4000}
                defaultIndex={1}
                slides={['./assets/img/Banner1.jpg', './assets/img/Banner2.jpg']}
                effect={'right'}
                height={'25%'}
                width={'25%'}
            /> */}
             {/* <Slide {...properties}>
                <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                    <span>Slide 1</span>
                </div>
                </div>
                <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                    <span>Slide 2</span>
                </div>
                </div>
            </Slide> */}
            
        </section>
    );
};

export default Home;