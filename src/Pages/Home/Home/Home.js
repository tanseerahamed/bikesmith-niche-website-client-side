import React from 'react';
import Services from '../../Services/Services/Services';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Faq from '../FAQs/Faq';
import Review from '../Review/Review';
import Showroom from '../Showroom/Showroom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Review></Review>
            <Faq></Faq>
            <Showroom></Showroom>
            <Footer></Footer>
        </div>
    );
};

export default Home;