import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobList from "./pages/JobList";
import AddJob from "./pages/AddJob";
import Header from "./Components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobList />}></Route>
        <Route path="/add-job" element={<AddJob />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
