import React from 'react';

const AddEvent = () => {
    return (
        <div className='p-2'>
            <h1 className='mb-5 mt-3 text-2xl font-black'>Add Event</h1>
            <div className='bg-[#E5E5E5] h-screen p-4 rounded'>
                
      <form className='grid grid-cols-2 place-items-center bg-white rounded p-3'>
      <div className="form-control w-full max-w-xs">
  <label className="label">Event Title
  </label>
  <input type="text" placeholder="Event Title" className="input input-bordered w-full max-w-xs" />
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">Date
  </label>
  <input type="date" placeholder="Event Title" className="input input-bordered w-full max-w-xs" />
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">Description
  </label>
  <textarea placeholder='Description' className='textarea textarea-bordered'></textarea>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">Photo Url
  </label>
  <input type="text" placeholder="Photo Url" className="input input-bordered w-full max-w-xs" />
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