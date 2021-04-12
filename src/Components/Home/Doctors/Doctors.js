import React from 'react';
import Doctor from '../Doctor/Doctor';
const doctorsData = [
    {
        name:'Dr.Muni',
        phone:'+8801736252',
        img:'muni.png'
    },
    {
        name:'Dr.Luni',
        phone:'+8801752352',
        img:'doctor.png'
    },
    {
        name:'Dr.Suni',
        phone:'+8801752362',
        img:'suni.png'
    }
]

const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center text-color mb-5 text-uppercase">Our Doctors</h5>
                <div className="row">
                   {
                       doctorsData.map((doctor, index) =><Doctor key={index} doctor={doctor}></Doctor>)
                   }
                </div>
            </div>
        </section>
    );
};

export default Doctors;