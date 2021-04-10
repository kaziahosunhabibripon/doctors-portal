import React from 'react';
import wilson from '../../../images/doctor.png';
import muni from '../../../images/muni.png';
import suni from '../../../images/suni.png';
import Doctor from '../Doctor/Doctor';
const doctorsData = [
    {
        name:'Dr.Muni',
        phone:'+8801736252',
        img:muni
    },
    {
        name:'Dr.Luni',
        phone:'+8801752352',
        img:wilson
    },
    {
        name:'Dr.Suni',
        phone:'+8801752362',
        img:suni
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