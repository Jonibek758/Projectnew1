import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Sign.css";
import { ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";


type FormData = {
  name: string;
  email: string;
  password: string;
};

export default function Sign() {
  const {register,handleSubmit,formState: { errors }} = useForm<FormData>();
  const navigate=useNavigate()
 const onSubmit = (data: FormData) => {
    axios.get(`http://localhost:3002/Users?email=${data.email}`).then((res) => {
      const user = res.data[0];
  
      if (user) {
        if (user.email === "admin@example.com" && user.password === "Admin123") {
          navigate("/Admin/Adminpanel");
          toast.success("Admin sifatida kirdingiz!");
        } else {
          toast.error("Bu foydalanuvchi allaqachon ro'yxatdan o'tgan!");
        }
        return;
      }
  
      axios
        .post("http://localhost:3002/Users", data)
        .then(() => {
          toast.success("Ro'yxatdan o'tdingiz!");
          navigate("/");
          <li><Link to="">nnkmkm</Link></li>
          
          
        })
        .catch((err) => {
          toast.error("Xatolik: " + err.message);
        });
    });
  };

  return (
    <div className="sign-wrapper">
      <form className="sign-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Ro'yxatdan o'tish</h2>
        <ToastContainer
        position="top-right"     
        autoClose={3000}          
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
        <div className="form-group">
          <input
            type="text"
            placeholder="Ismingiz"
            {...register("name", { required: "Ism kiritilishi shart!" })}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Email kiritilishi shart!",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email formati noto‘g‘ri!"
              }
            })}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Parol"
            {...register("password", {
              required: "Parol kiritilishi shart!",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
                message:
                  "Kamida 6 belgi, 1 katta harf, 1 kichik harf va 1 raqam bo'lishi kerak"
              }
            })}
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Sign
        </button>
      </form>
    </div>
  );
}
