import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const useLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [objValidInput, setObjValidInput] = useState({
        isValidEmail: true,
        isValidPassword: true
    });

    const navigate = useNavigate();
    const handleLogin =  async() => {
        if (!email) {
            setObjValidInput({ ...objValidInput, isValidEmail: false });
            toast.error("Please enter your email address or phone number");
            return;
        }
        if (!password) {
            setObjValidInput({ ...objValidInput, isValidPassword: false });
            toast.error("Please enter your password");
            return;
        }
        try {
            const response = await axios.post("http://localhost:9000/api/auth/login", {
              email,
              password,
            });
      
            if (response.data.success) {
              toast.success("Login Successful!");
              navigate("/admin-dashboard"); // Chuyển trang sau đăng nhập
            }
          } catch (error) {
            toast.error(error.response?.data?.error || "Login failed");
          }
        // setTimeout(() => {
        //     if (user.role === 'admin') {
        //         navigate('/admin-dashboard');
        //     } else {
        //         navigate('/user-dashboard');
        //     }
        // }, 1000);
        // setTimeout(()=> {
        //     navigate('/admin-dashboard')
        // })

    };

    const handlePressEnter = (event) => {
        if (event.key === "Enter") {
            handleLogin();
        }
    };

    return {
        email,
        password,
        objValidInput,
        setEmail,
        setPassword,
        handleLogin,
        handlePressEnter
    };
};

export default useLogin;