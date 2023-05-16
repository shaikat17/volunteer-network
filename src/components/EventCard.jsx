const EventCard = ({ event }) => {
    const handleEvent = (id) => {
        console.log(id)
    }
  return (
    <div className="card card-compact sm:h-fit md:h-24  shadow-xl" onClick={() => handleEvent(event._id)}>
      <img className="w-full object-cover" src={event.photoUrl} alt={event.eventTitle} />
      <div className="card-body border-b-2">
        <h2 className="text-lg font-normal">{event.eventTitle}</h2>
      </div>
    </div>
  );
};

export default EventCard;
