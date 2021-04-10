import React from 'react';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import Blog from '../Blog/Blog';
import './Blogs.css';
const bolgsData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo voluptatum consequatur nisi.',
        author:'Dr.Luni',
        authorImg : aliza,
        date : '10 April 2021'
    },
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo voluptatum consequatur nisi.',
        author:'Dr.Suni',
        authorImg : wilson,
        date : '10 April 2021'
    },
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo voluptatum consequatur nisi.',
        author:'Dr.Muni',
        authorImg : ema,
        date : '10 April 2021'
    }
]
const Blogs = () => {
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-color text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        bolgsData.map((blog, index) => <Blog key={index} blog={blog}> </Blog>)
                    }
                </div>
            </div> 
        </section>
    );
};

export default Blogs;