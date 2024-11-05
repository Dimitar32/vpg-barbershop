import React from 'react';
import { InlineWidget } from 'react-calendly';

const Reservation = () => {
    return (
        <div className="App">
            <InlineWidget 
                url="https://calendly.com/dimitarivanov2525/meet-with-me"
            />
        </div>
    );
  };
  
  export default Reservation;
  