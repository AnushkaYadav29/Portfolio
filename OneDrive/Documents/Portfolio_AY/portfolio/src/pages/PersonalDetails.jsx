import React from "react";
import '../pages/PersonalD.css'

const PersonalDetails = () => {
  return (
    <div 
      style={{
        background: "linear-gradient(135deg, #77829c, #688ac2)",
        minHeight: "100vh",
        padding: "30px 50px",
        color: "black"
      }}
    >
       <h1 className="text-center mb-3" style={{ fontWeight: "bold" }}>
           About Me
        </h1>
      <section
        className="sec text-center p-5 mb-3" 
        style={{ backgroundColor: "#bcc7e9", borderRadius: "50px" }}
      >
       
        <h1>Anushka Sanjay Yadav</h1>
        <h3>MCA Student</h3>
        <p>
          I am a passionate MCA student and aspiring Java Developer with strong
          interest in web development and problem-solving.
        </p>
      </section>

      <section
        className="sec text-center p-5 mb-3"
        style={{ backgroundColor: "#bcc7e9", borderRadius: "50px" }}
      >
        <h1>Skills / technologies</h1>

        <p>
          <b>Programming:</b> Java, JavaScript
        </p>
        <p>
          <b>Web:</b> HTML, CSS, React
        </p>
        <p>
          <b>Web:</b>Web: PHP, MySQL
        </p>
        <p>
          <b>Tools:</b> Git, VS Code
        </p>
      </section>

      <section
        className="sec text-center p-5 mb-3 "
        style={{ backgroundColor: "#bcc7e9", borderRadius: "50px" }}
      >
        <h2>Education</h2>

        <h3>MCA</h3>
        <p>Rajarambapu Institute of Technology</p>
        <span>2024 – 2026</span>

        <h3>BCA</h3>
        <p>Bharati Vidyapeeth College</p>
        <span>2021 – 2024</span>
      </section>

      <section
        className="sec text-center p-5 "
        style={{ backgroundColor: "#bcc7e9", borderRadius: "50px" }}
      >
        <h2>Personal Info</h2>

        <p>
          <strong>Location:</strong> Pune, India
        </p>
        <p>
          <strong>Email:</strong> anushkayadavv@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> 9021250502
        </p>
        <p>
          <strong>LinkedIn:</strong> linkedin.com/in/Anushka Yadav
        </p>
        <p>
          <strong>GitHub:</strong> github.com/AnushkaYadav29
        </p>
      </section>
    </div>
  );
};

export default PersonalDetails;
