import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Doctor.css';
const Doctor = ({doctor}) => {
    
    return (
        <div className="col-md-4">
            <img className="img-fluid doctors-image" src={`http://localhost:5000/${doctor.img}`}  alt="" />
            <h5 className="text-center">{doctor.name}</h5>
            <p className="text-center"> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> {doctor.phone}</p>
        </div>
    );
};

export default Doctor;