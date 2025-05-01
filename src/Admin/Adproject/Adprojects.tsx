import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./Adproject.css";
import axios from "axios";

interface Project {
  text: string;
  img: string;
}

export default function Adprojects() {
  const [formData, setFormData] = useState<Project>({ text: "", img: "" });
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    try {
      const parsed = storedProjects ? JSON.parse(storedProjects) : [];
      if (Array.isArray(parsed)) {
        setProjects(parsed);
      } else {
        setProjects([]);
      }
    } catch (error) {
      console.error("LocalStorage'dan o'qishda xatolik:", error);
      setProjects([]);
    }
  }, []);
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProject = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.text.trim() && formData.img.trim()) {
      const newProjects = [...projects, formData];
      setProjects(newProjects);
      localStorage.setItem("projects", JSON.stringify(newProjects)); 

      try {
        const response = await axios.post("http://localhost:3002/Blog", formData);
        console.log("Server javobi:", response.data);
      } catch (error) {
        console.error("Serverga yuborishda xatolik:", error);
      }

      setFormData({ text: "", img: "" });
    }
  };

  return (
    <div className="Adprojects">
      <div className="adhead">
        <h2>Blog</h2>
      </div>
      <div className="flexproject">
        <form onSubmit={handleProject} className="projectad">
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleInput}
            placeholder="Text..."
          />
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleInput}
            placeholder="Image URL..."
          />
          <button type="submit">Save</button>
        </form>
        <div className="projecttext">
          <table className="table">
            <thead>
              <tr>
                <th>Text</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index}>
                  <td>{project.text}</td>
                  <td>
                    <img src={project.img} alt="project" width="100" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
