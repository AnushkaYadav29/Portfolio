import React from 'react'
import hero from '../assets/hero.png'

const Home = () => {
  return (
    <div className='container mb-3'>
      <div 
        className="row align-items-center p-5 mt-5"
        style={{
          background: "linear-gradient(135deg, #04050d, #1a1c2c)",
          color: "white",
          borderRadius: "30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}
      >

       
        <div className="col-md-6">
          <h4 style={{ color: "#00d4ff" }}>Hello, it's me </h4>

          <h1 style={{ fontWeight: "bold" }}>
            Anushka Sanjay Yadav
          </h1>

          <h3>
            I'm a <span style={{ color: "#00d4ff" }}>Full Stack Developer</span>
          </h3>

          <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
            I am an MCA student passionate about building modern web applications.
            I love working with React, Java, and databases to create real-world
            solutions like booking systems and e-learning platforms.
          </p>

         
          <div style={{ margin: "15px 0" }}>
            <span className="badge bg-info me-2">React</span>
            <span className="badge bg-success me-2">Java</span>
            <span className="badge bg-warning text-dark me-2">MySQL</span>
            <span className="badge bg-danger">PHP</span>
          </div>

          
          <div className="mt-4">
            <a 
              href="/resume.pdf" 
              className='btn btn-primary rounded-pill me-3 px-4'
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>

            <a 
              href="https://github.com/" 
              className='btn btn-outline-light rounded-pill px-4'
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        
        <div className="col-md-6 text-center">
          <img 
            src={hero} 
            alt="profile" 
            style={{
              width: "80%",
              borderRadius: "20px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.6)"
            }} 
          />
        </div>

      </div>
    </div>
  )
}

export default Home