import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setError, setJobs } from "../Redux/Jobslice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Filter from "../Components/Filter";

const JobList = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);

  useEffect(() => {
    axios
      .get("http://localhost:3040/jobs")
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => setError(err));
  }, []);
  return (
    <div className="p-4">
      <Filter />
      <h2 className="job-count">
        Bulunan {state.mainJobs.length} iş arasından {state.jobs.length}{" "}
        tanesini görüntülüyrsunuz
      </h2>
      <section className="job-list ">
        {!state.initialised && <p>Loading...</p>}
        {state.initialised && !state.isError ? (
          state.jobs.map((job) => {
            return <Card key={job.id} job={job} />;
          })
        ) : (
          <p>Sorry, we have a techical issue</p>
        )}
      </section>
    </div>
  );
};

export default JobList;
