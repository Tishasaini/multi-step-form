import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { motion } from "framer-motion"; 

export default function Form1() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    phone: localStorage.getItem("phone") || "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    localStorage.setItem(name, value);
    setErrors({ ...errors, [name]: value.trim() === "" });
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      phone: formData.phone.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleNext = () => {
    if (validateForm()) {
      navigate("/form2");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} 
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }} 
      transition={{ duration: 0.5 }} 
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          padding: "50px",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <h2>Multi-step Form</h2>
          <h5>Step 1: Personal Information</h5>
        </Box>
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            width: "400px",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <TextField
            fullWidth
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            helperText={errors.name ? "Name is required" : ""}
            style={{ marginTop: "20px", width: "300px" }}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email ? "Email is required" : ""}
            style={{ marginTop: "20px", width: "300px" }}
          />
          <TextField
            fullWidth
            label="Phone Number"
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            helperText={errors.phone ? "Phone number is required" : ""}
            style={{ marginTop: "20px", width: "300px" }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <Button
              variant="contained"
              disableElevation
              style={{ marginTop: "30px", width: "100px", marginBottom: "20px" }}
              disabled
            >
              Back
            </Button>
            <Button
              variant="contained"
              disableElevation
              style={{ marginTop: "30px", width: "100px", marginBottom: "20px" }}
              onClick={handleNext}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}
