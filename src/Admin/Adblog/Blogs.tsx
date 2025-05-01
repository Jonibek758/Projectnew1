
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./Blog.css";
import axios from "axios";

interface Blog {
  text: string;
  url: string;
}

export default function Blogs() {
  const [formData, setFormData] = useState<Blog>({ text: "", url: "" });
  const [blogs, setBlogs] = useState<Blog[]>([]);
  

  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogs");
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
    
  }, []);


 

  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleBlog = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.text.trim() && formData.url.trim()) {
      const newblogs=[...blogs,formData];
      setBlogs(newblogs)
      try{
         const pank = await axios.post("http://localhost:3002/Projects",formData)
         console.log(pank,"qo'shildi");
         
      }catch(error){
          console.log(error);
          
      }
      localStorage.setItem("projects", JSON.stringify(newblogs));
      setFormData({ text: "", url: "" });
    }

  };

  return (
    <div className="Adblog">
      <div className="adhead">
        <h2>Projects</h2>
      </div>
      <div className="flexad">
        <form onSubmit={handleBlog} className="form">
          <input
            value={formData.text}
            onChange={handleInput}
            className="input"
            type="text"
            name="text"
            placeholder="Body text"
          />
          <br />
          <textarea
            value={formData.url}
            onChange={handleInput}
            className="textarea"
            name="url"
            placeholder="Title..."
          />
          <br />
          <button type="submit">Save</button>
        </form>
        <div className="next">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Text</th>
                <th scope="col">Img url</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((eve, index) => (
                <tr key={index}>
                  <td>{eve.text}</td>
                  <td>{eve.url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
