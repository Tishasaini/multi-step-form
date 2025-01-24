import React from 'react'
import Form1 from './Component/Form1'
import Form2 from './Component/Form2'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form3 from './Component/Form3';

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Form1 />} />
      <Route path="/form2" element={<Form2 />} />
      <Route path="/form3" element={<Form3 />} />
    </Routes>
  </Router>
  )
}
