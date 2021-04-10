import React from 'react';
import Feature from '../../../images/Feature.png';
const FeatureServices = () => {
    return (
        <section className="feature-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={Feature} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, on Your Terms</h1>
                        <p className="text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odit doloremque adipisci nesciunt neque repellat perferendis expedita, laboriosam ipsa deleniti, facere quaerat molestiae vitae eius. Dolores vero at voluptatibus suscipit corrupti praesentium deserunt veritatis vitae quasi expedita necessitatibus quam provident, hic accusantium nobis libero dignissimos est et officiis harum amet.
                        </p>
                        <button className="btn btn-primary">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureServices;