import React from "react";
import { statusOption, typeOption } from "../helpers/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addJob } from "../Redux/Jobslice";

const AddJob = () => {
  const dispatch = useDispatch();
  const naviagete = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // form datasını oluşturma
    const form = new FormData(e.target);
    const newJob = Object.fromEntries(form.entries());

    if (!newJob.status || !newJob.type) {
      toast("tüm alanları doldurunuz", { autoClose: 1500 });
      return;
    }

    newJob.id = v4();
    newJob.date = new Date().toLocaleDateString();

    axios
      .post("http://localhost:3040/jobs", newJob)
      .then(() => {
        dispatch(addJob(newJob));
        // anasayfaya yönlendir
        naviagete("/");

        // ekleme başarılı
        toast("islem basarili");
      })
      .catch((err) => toast.error("bir hata olustu"));
  };
  return (
    <div className="add-sec">
      <h2>Add A New Job</h2>
      <form onSubmit={handleSubmit} action="">
        <div>
          <label htmlFor="">Position</label>
          <input type="text" required name="position" />
        </div>
        <div>
          <label htmlFor="">Company</label>
          <input type="text" required name="company" />
        </div>
        <div>
          <label htmlFor="">Location</label>
          <input type="text" required name="location" />
        </div>
        <div>
          <label htmlFor="">Durum</label>
          <select name="status" id="">
            <option disabled> Seçiniz</option>
            {statusOption.map((status, id) => (
              <option key={id}>{status}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Tür</label>
          <select name="type" id="">
            <option disabled> Seçiniz</option>
            {typeOption.map((type, id) => (
              <option key={id}>{type}</option>
            ))}
          </select>{" "}
        </div>
        <div>
          <button>Ekle</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
