import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import EventCard from "./components/EventCard"

function App() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:3000/events")
    .then(res => res.json())
    .then(data => setEvents(data))
  },[])

  return (
    <>
    <Navbar />
    <h1 className="uppercase font-black text-2xl text-center my-10">i grow by helping people in need.</h1>
    <div className="text-center">
      <input className="border-2 px-3 py-2 rounded" type="text" placeholder="Search..." name="" id="" /> <button className="btn btn-primary">Submit</button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-3 sm:gap-3 place-items-center p-4 space-y-4 md:space-y-0 sm:space-y-0">
      {events.map(event => <EventCard key={event._id} event={event} />)}
    </div>
    </>
  )
}

export default App
