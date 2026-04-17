import React from 'react'
import { useParams, Link, Outlet } from 'react-router-dom'
import ProjectList from "../ProjectList"

const ProjectDetails = () => {

  const { ProjectID } = useParams()
  const project = ProjectList.find((p) => p.id === Number(ProjectID))

  

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        padding: "50px 0",
        color: "white"
      }}
    >
      <div className="container">

       
        <Link to="/projects" className="btn btn-outline-light mb-4">
          ← Back to Projects
        </Link>

        
        <div
          className="mx-auto p-5"
          style={{
            maxWidth: "700px",
            background: "#1e293b",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
          }}
        >

          
          <h1 className="text-center mb-3">
            {project.title}
          </h1>

         
          <p className="text-center" style={{ color: "#94a3b8" }}>
            {project.year}
          </p>

          
          <p className="text-center mt-4" style={{ lineHeight: "1.6" }}>
            {project.description}
          </p>

          
          <div className="mt-4 text-center">
            <h5 className="mb-3">Tools & Technologies</h5>

            {
              project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="badge me-2 mb-2"
                  style={{
                    background: "#0ea5e9",
                    padding: "8px 12px",
                    fontSize: "14px"
                  }}
                >
                  {tool}
                </span>
              ))
            }
          </div>

          
          <div className="text-center mt-4 mb-3">
            <a
              href="#"
              className="btn btn-info rounded-pill me-3 px-4"
            >
              Live Demo
            </a>

            <a
              href="#"
              className="btn btn-outline-light rounded-pill px-4"
            >
              GitHub
            </a>
          </div>

          <div className="d-flex gap-3 mb-4">
                    <Link to="like" className="btn btn-outline-success">
                        👍 Like
                    </Link>

                    <Link to="comments" className="btn btn-outline-primary">
                        💬 Comments
                    </Link>
                </div>

                {/* Nested Route Output */}
                <div className="border-top pt-3">
                    <Outlet />
                </div>

            </div>
        </div>

        </div>
     
  )
}

export default ProjectDetails