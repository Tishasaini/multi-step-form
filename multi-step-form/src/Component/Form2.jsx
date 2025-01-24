import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Form2() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    address1: localStorage.getItem("address1") || "",
    address2: localStorage.getItem("address2") || "",
    city: localStorage.getItem("city") || "",
    state: localStorage.getItem("state") || "",
    zip: localStorage.getItem("zip") || "",
  });

  const [errors, setErrors] = useState({
    address1: false,
    city: false,
    state: false,
    zip: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: value.trim() === "" });

    localStorage.setItem(name, value);
  };

  const isFormValid = Object.keys(errors).every(
    (key) => formData[key].trim() !== ""
  );

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
          <h5>Step 2: Address Information</h5>
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
            label="Address Line 1 *"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            error={errors.address1}
            helperText={errors.address1 ? "Address Line 1 is required" : ""}
            style={{ marginTop: "20px", width: "300px" }}
          />
          <TextField
            fullWidth
            label="Address Line 2"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            style={{ marginTop: "20px", width: "300px" }}
          />
          <TextField
            fullWidth
            label="City *"
            name="city"
            value={formData.city}
            onChange={handleChange}
            error={errors.city}
            helperText={errors.city ? "City is required" : ""}
            style={{ marginTop: "20px", width: "300px" }}
          />
          <TextField
            fullWidth
            label="State *"
            name="state"
            value={formData.state}
            onChange={handleChange}
            error={errors.state}
            helperText={errors.state ? "State is required" : ""}
            style={{ marginTop: "20px", width: "300px" }}
          />
          <TextField
            fullWidth
            label="Zip Code *"
            type="number"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            error={errors.zip}
            helperText={errors.zip ? "Zip Code is required" : ""}
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
              style={{
                marginTop: "30px",
                width: "100px",
                marginBottom: "20px",
              }}
              onClick={() => navigate("/")}
            >
              Back
            </Button>
            <Button
              variant="contained"
              disableElevation
              style={{
                marginTop: "30px",
                width: "100px",
                marginBottom: "20px",
              }}
              onClick={() => navigate("/form3")}
              disabled={!isFormValid}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}
