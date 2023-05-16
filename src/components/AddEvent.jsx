import Swal from 'sweetalert2'

const handleFormSubmit = (e) => {
  e.preventDefault()
  // console.log('I am from form')
  const form = e.target
  const eventTitle = form.eventTitle.value
  const date = form.date.value
  const description = form.description.value
  const photoUrl = form.photoUrl.value

  const data  = {eventTitle, date, description, photoUrl}

  form.reset()

  fetch('http://127.0.0.1:3000/add-event', {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(result => {
    if(result.acknowledged) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Event Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Opps!! Something went wrong.',
        showConfirmButton: false,
        timer: 1500
      })
    }
    
  })
}

const AddEvent = () => {
    return (
        <div className='p-2'>
            <h1 className='mb-5 mt-3 text-2xl font-black'>Add Event</h1>
            <div className='bg-[#E5E5E5] h-screen p-4 rounded'>
                
      <form className='grid grid-cols-2 place-items-center bg-white rounded p-3 gap-2' onSubmit={handleFormSubmit}>
      <div className="form-control w-full max-w-xs">
  <label className="label">Event Title
  </label>
  <input type="text" placeholder="Event Title" className="input input-bordered w-full max-w-xs" name="eventTitle" />
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">Date
  </label>
  <input type="date" name="date" className="input input-bordered w-full max-w-xs" />
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">Description
  </label>
  <textarea placeholder='Description' className='textarea textarea-bordered' name="description"></textarea>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">Photo Url
  </label>
  <input type="text" placeholder="Photo Url" className="input input-bordered w-full max-w-xs" name="photoUrl" />
</div>
<div></div>
<button className="btn btn-primary my-3">Submit</button>

      </form>
            </div>
        </div>
    );
};

export default AddEvent;

{/*  */}