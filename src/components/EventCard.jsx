const EventCard = ({ event }) => {
  const handleEvent = (event) => {
    const userID = localStorage.getItem("user");
    fetch(`http://127.0.0.1:3000/user/${userID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div
      className="card card-compact sm:h-fit md:h-24  shadow-xl"
      onClick={() => handleEvent(event)}
    >
      <img
        className="w-full object-cover"
        src={event.photoUrl}
        alt={event.eventTitle}
      />
      <div className="card-body border-b-2">
        <h2 className="text-lg font-normal">{event.eventTitle}</h2>
      </div>
    </div>
  );
};

export default EventCard;
