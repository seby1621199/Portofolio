import { useEffect, useState } from "react";
import ProjectCard from "../Components/ProjectCard";



export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/seby1621199/repos").then((res) =>
      res.json().then((data) => {
        setProjects(data);
      })
    ).catch(error => {
      alert('eroare'+error.message);
    });
  }, []);

  return (
    <div style={{marginTop: "50px"}}>
      <h1 className="text-2xl font-bold mb-6" style={{padding:'30px'}}>Proiecte GitHub</h1>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            language={project.language}
            url={project.html_url}
          />
        ))}
      </div>
    </div>
  );
}
