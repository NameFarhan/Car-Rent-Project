import { Box, Button, Input, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import loginicon from "../Images/login.svg";
import usericon from "../Images/user.svg";
import lockicon from "../Images/lock.svg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://9e85-103-101-232-126.ngrok-free.app/api/v1/users/login",
        {
          user: {
            email: email,
            password: password,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login successful:", response.data);
      setMessage(response.data.status.message);
      // Optionally, you can redirect or perform other actions upon successful login
    } catch (error) {
      console.error("Login error:", error);
      setMessage(error.message);
      // Handle error states, such as displaying an error message to the user
    }
  };    
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '',
      }}
    >
      <Box
        sx={{
          width: "300px",
          height: "398px",
          background: "transparent",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Image box */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            alt=""
            src={loginicon}
            sx={{ width: "119px", height: "100px" }}
          />
        </Box>
        {/* Input boxes */}
        <Box sx={{ marginTop: "71px", width: "300px", height: "45px" }}>
          <Box
            component="img"
            alt=""
            sx={{ position: "absolute", marginTop: "13px", marginLeft: "18px" }}
            src={usericon}
          />
          <Input
            value={email}
            onChange={handleEmailChange}
            sx={{
              width: "100%",
              position: "relative",
              fontWeight: '',
              height: "100%",
              border: "1px solid #fff",
              paddingLeft: "51px",
              paddingTop: "4px",
              borderRadius: "4px",
              color: '',
            }}
            placeholder="EMAIL"
            id="email-input"
          />
        </Box>
        {/* Password input */}
        <Box sx={{ marginTop: "20px", width: "300px", height: "45px" }}>
          <Box
            component="img"
            alt=""
            sx={{ position: "absolute", marginTop: "13px", marginLeft: "18px" }}
            src={lockicon}
          />
          <Input
            value={password}
            onChange={handlePasswordChange}
            sx={{
              width: "100%",
              position: "relative",
              fontWeight: '',
              height: "100%",
              border: "1px solid #fff",
              paddingLeft: "51px",
              paddingTop: "4px",
              borderRadius: "4px",
              color: ''
            }}
            placeholder="PASSWORD"
            id="password-input"
            type="password"
          />
        </Box>
        {/* Login Button */}
        <Button
          onClick={handleSubmit}
          sx={{
            marginTop: "43px",
            fontSize: '',
            fontWeight: '',
            color:'',
            backgroundColor: '',
            width: "100%",
            height: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "4px",
            "&:hover": { backgroundColor: '' },
          }}
        >
          LOGIN
        </Button>
        {/* Message display */}
        {message && (
          <Typography
            sx={{
              marginTop: "10px",
              color:
                message === "Login successful"
                  ? colors.green
                  : colors.red,
            }}
          >
            {message}
          </Typography>
        )}
        {/* Forgot password button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "11px",
          }}
        >
          <Typography
            sx={{
              fontSize: '',
              color: '-moz-initial',
              fontWeight: '',
            }}
          >
            Forgot password?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
