import React from 'react';
import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';
import Faq from '../FAQs/Faq';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <Review></Review>
            <Faq></Faq>
        
        </div>
    );
};

export default Home;