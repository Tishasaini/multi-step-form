import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 

export default function Form3() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    const savedData = {
      name: localStorage.getItem("name") || "",
      email: localStorage.getItem("email") || "",
      phone: localStorage.getItem("phone") || "",
      address1: localStorage.getItem("address1") || "",
      address2: localStorage.getItem("address2") || "",
      city: localStorage.getItem("city") || "",
      state: localStorage.getItem("state") || "",
      zip: localStorage.getItem("zip") || "",
    };
    setFormData(savedData);
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form submitted successfully!");
    localStorage.clear();
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -100 }} 
      transition={{ duration: 0.5 }} 
    >
      <div
        style={{
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
        <h3>Step 3: Confirmation</h3>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "600px",
            padding: "30px",
            border: "1px solid black",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
          }}
        >
          {[
            { label: "Name", value: formData.name },
            { label: "Email", value: formData.email },
            { label: "Phone", value: formData.phone },
            { label: "Address Line 1", value: formData.address1 },
            { label: "Address Line 2", value: formData.address2 },
            { label: "City", value: formData.city },
            { label: "State", value: formData.state },
            { label: "Zip Code", value: formData.zip },
          ].map((field, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: index !== 7 ? "1px solid #ddd" : "none",
              }}
            >
              <strong style={{ minWidth: "150px", textAlign: "right" }}>
                {field.label}:
              </strong>
              <span style={{ flexGrow: 1, textAlign: "left", paddingLeft: "20px" }}>
                {field.value || "N/A"}
              </span>
            </Box>
          ))}
        </Box>

        {/* Buttons Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "300px",
            marginTop: "30px",
          }}
        >
          <Button
            variant="contained"
            disableElevation
            sx={{ width: "100px" }}
            onClick={() => navigate("/form2")}
          >
            Back
          </Button>
          <Button
            variant="contained"
            disableElevation
            sx={{ width: "100px" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </div>
    </motion.div>
  );
}
