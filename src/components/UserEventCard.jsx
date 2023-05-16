import React from 'react';

const UserEventCard = ({event}) => {
    return (
        <div className="card card-side shadow-xl">
  <figure><img src={event.photoUrl} alt={event.eventTitle}/></figure>
  <div className="card-body">
    <h2 className="card-title">{event.eventTitle}</h2>
    <p>{event.date}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    );
};

export default UserEventCard;