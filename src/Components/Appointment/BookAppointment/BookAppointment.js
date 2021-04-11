import React from 'react';
import BookingCart from '../BookingCart/BookingCart';
const bookingData = [
    { 
        id: 1,
        subject:'Teeth Orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    { 
        id: 2,
        subject:'Cosmetic Dentistry',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    { 
        id: 3,
        subject:'Teeth Cleaning',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    { 
        id: 4,
        subject:'Cavity Protection',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    { 
        id: 5,
        subject:'Teeth Scaling',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    { 
        id: 6,
        subject:'Teeth Filling',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    }
];

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className="text-center text-color">Available Appointment on {date.toDateString('dd/MM/YYYY')}</h2>
            <div className="row m-0 p-0">
                { 
                    bookingData.map(booking=><BookingCart key={booking.id} booking={booking} date={date}></BookingCart>)
                } 
            </div>
        </section>
    );
};

export default BookAppointment;