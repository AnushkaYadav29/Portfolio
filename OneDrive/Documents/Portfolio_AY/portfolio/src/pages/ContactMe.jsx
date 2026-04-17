import React from 'react'

const ContactMe = () => {
  return (
    <div
      style={{
         background: "linear-gradient(135deg, #212226, #0a121f)",
        minHeight: "100vh",
        padding: "30px 50px",
        color: "black"
      }}
    >
      
       <h1 className="text-center mb-3 text-white" style={{ fontWeight: "bold" }}>
          Contact Us
        </h1>
      <div className="card p-5 text-white" style={{backgroundColor:"#3e4044"}}>
        
          <form>

    <div class="mb-3">
    <label for="exampleInputName" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder='Enter Your name'/>
    </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email'/>
    <div id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputSubject" class="form-label">Subject</label>
    <input type="text" class="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder='subject'/>
    </div>
  
  <div class="mb-3">
    <textarea name="message" id="message" rows={5}cols={100} placeholder='Your Message'></textarea>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
    </div>
  )
}

export default ContactMe