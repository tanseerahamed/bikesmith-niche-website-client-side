import React from 'react';
import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';
import Faq from '../FAQs/Faq';
import Review from '../Review/Review';
import Showroom from '../Showroom/Showroom';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <Review></Review>
            <Faq></Faq>
            <Showroom></Showroom>
        
        </div>
    );
};

export default Home;