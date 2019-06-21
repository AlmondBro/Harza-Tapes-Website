import React from 'react';

import Slideshow from "react-slidez";

const Home = (props) => {
    return (
        <section>
            <Slideshow
                showIndex
                showArrows
                autoplay
                enableKeyboard
                useDotIndex
                slideInterval={6000}
                defaultIndex={1}
                slides={['./assets/img/Banner1.jpg', './assets/img/Banner2.jpg']}
                effect={'fade'}
                height={'100%'}
                width={'100%'}
            />
        </section>
    );
};

export default Home;