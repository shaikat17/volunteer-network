import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import UserEventCard from "./UserEventCard";

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const userID = localStorage.getItem('user')
        fetch(`http://127.0.0.1:3000/user/${userID}`)
        .then(res => res.json())
        .then(data => setEvents(data.events))
    },[])
  return <>
  <Navbar/>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
    {events.map(event => <UserEventCard key={event._id} event={event} />)}
  </div>
  </>;
};

export default Events;
