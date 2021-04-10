import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Doctor.css';
const Doctor = (props) => {
    const { name, phone, img } = props.doctor;
    return (
        <div className="col-md-4">
            <img className="img-fluid doctors-image" src={img} alt="" />
            <h5 className="text-center">{name}</h5>
            <p className="text-center"> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> {phone}</p>
        </div>
    );
};

export default Doctor;