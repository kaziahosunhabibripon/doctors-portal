import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt,faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const infoData = [
    {
        title: 'Opening Hours',
        descriptions: 'We are opening 7/24 in days',
        icon:faClock,
        background:'primary'
    },
    {
        title: 'Visit Our Location',
        descriptions: 'Brooklyn, ny 10003 USA',
        icon:faMapMarkerAlt,
        background:'dark'
    },
    {
        title: 'Call Us now',
        descriptions: '+15804833182',
        icon:faPhoneAlt,
        background:'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center m-0 p-0">
            <div className="w-75 row">
            {
                infoData.map((info, index)=> <InfoCard key={index} info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;