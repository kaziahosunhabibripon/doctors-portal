import React from 'react';
import './ServiceDetail.css';
const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img src={service.img} alt=""/>
            <h6>{service.name}</h6>
            <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, minus.</p>
        </div>
    );
};

export default ServiceDetail;