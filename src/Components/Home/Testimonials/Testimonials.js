import React from 'react';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import './Testimonials.css';
import Testimonal from '../Testimonal/Testimonal';
const testimonialData = [
    {
        quote : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis labore veritatis quibusdam qui ducimus est magni nulla provident maxime libero eius quas, laudantium minus dolor.',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat corrupti expedita natus, minus dolor animi tempore nisi iusto? Soluta, quod facere vero pariatur illo maxime.',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eligendi totam sit esse provident inventore optio eos officiis id doloremque voluptas fugit facere, ad laudantium autem ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]
const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-color text-uppercase"> Testimonial</h5>
                    <h1>What Our Patients <br/> Says</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        testimonialData.map((textimonal, index)=>
                         <Testimonal key={index} textimonal={textimonal}>
                        </Testimonal>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;