import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./Adserviceslog.css";

interface Service {
  title: string;
  body: string;
}

export default function Adserviceslog() {
  const [formData, setFormData] = useState<Service>({ title: "", body: "" });
  const [services, setServices] = useState<Service[]>([]);


  useEffect(() => {
    const storedServices = localStorage.getItem("services");
    if (storedServices) {
      setServices(JSON.parse(storedServices));
    }
    
  }, []);

 
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleService = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.title.trim() && formData.body.trim()) {
      setServices((prev) => [...prev, formData]);
      setFormData({ title: "", body: "" });
    }
  };

  return (
    <div className="Services">
      <div className="adhead">
        <h2>Services</h2>
      </div>
      <div className="Servicesflex">
        <div className="Servicestext">
          <form onSubmit={handleService} className="serviceform">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInput}
              placeholder="Title..."
            />
            <input
              type="text"
              name="body"
              value={formData.body}
              onChange={handleInput}
              placeholder="Body..."
            />
            <button type="submit">Save</button>
          </form>
        </div>
        <div className="Servicestable">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index}>
                  <td>{service.title}</td>
                  <td>{service.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
