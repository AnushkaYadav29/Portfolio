// import React from 'react';
// import projects from '../ProjectList';
// import {Link} from 'react-router-dom'


// const Projects = () => {
//   return (
//     <div className="box" style={{ backgroundColor: "pink" }}>
      
//       <h1>Project List</h1>

//       <div className="container">
//         <div className="row">
//           {
//             projects.map((p, i) => (
//               <div className="col-md-3 mb-3" key={i}>
                
//                 <div className="card" style={{ width: "18rem" }}>
                  
//                   <div className="card-body">
//                     <h5 className="card-title">{p.title}</h5>

//                     <h6 className="card-subtitle mb-2 text-body-secondary">
//                       {p.year}
//                     </h6>

//                     <Link to={`/projects/${p.id}`} className="card-link">
//                       View Details
//                     </Link>

//                   </div>
//                 </div>

//               </div>
//             ))
//           }
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Projects;





import React from 'react';
import projects from '../ProjectList';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        minHeight: "100vh",
        padding: "50px 0",
        color: "white"
      }}
    >
      <div className="container">
        
        <h1 className="text-center mb-5" style={{ fontWeight: "bold" }}>
           My Projects
        </h1>

        <div className="row">
          {
            projects.map((p, i) => (
              <div className="col-md-4 mb-4" key={i}>
                
                <div
                  className="card h-100 text-center"
                  style={{
                    background: "#1e293b",
                    border: "none",
                    borderRadius: "20px",
                    color: "white",
                    padding: "20px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.4)"
                  }}
                  
                >
                  
                  
                  <h4 style={{ marginBottom: "10px" }}>
                    {p.title}
                  </h4>

                 
                  <p style={{ color: "#94a3b8", marginBottom: "20px" }}>
                    {p.year}
                  </p>

                  
                  <Link
                    to={`/projects/${p.id}`}
                    className="btn btn-outline-info rounded-pill px-4"
                  >
                    View Details →
                  </Link>

                </div>

              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;