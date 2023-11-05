import React, { useRef } from "react";

import { sortOption, statusOption, typeOption } from "../helpers/constants";
import { useDispatch } from "react-redux";
import {
  filterBySearch,
  filterByStatus,
  filterBytype,
  sortJobs,
  clearFilter,
} from "../Redux/Jobslice";

const Filter = () => {
  const dispatch = useDispatch();

  const inputRef = useRef();
  const typeRef = useRef();
  const statusRef = useRef();
  const sortRef = useRef();

  const handleReset = () => {
    inputRef.current.value = "";
    typeRef.current.value = "seçiniz";
    statusRef.current.value = "seçiniz";
    sortRef.current.value = "seçiniz";
    dispatch(clearFilter());
  };
  return (
    <div className="filter-sec">
      <h2>Filtre Formu</h2>
      <form>
        <div>
          <label htmlFor="">Arama</label>
          <input
            ref={inputRef}
            onChange={(e) => dispatch(filterBySearch(e.target.value))}
            type="text"
            placeholder="Amazon"
          />
        </div>
        <div>
          <label htmlFor="">Durum</label>
          <select
            ref={statusRef}
            name="status"
            id=""
            onChange={(e) => dispatch(filterByStatus(e.target.value))}
          >
            <option disabled> Seçiniz</option>
            {statusOption.map((statu, id) => (
              <option key={id}>{statu}</option>
            ))}
          </select>{" "}
        </div>
        <div>
          <label htmlFor="">Tür</label>
          <select
            ref={typeRef}
            name="status"
            id=""
            onChange={(e) => dispatch(filterBytype(e.target.value))}
          >
            <option disabled> Seçiniz</option>
            {typeOption.map((type, id) => (
              <option key={id}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Sırala</label>
          <select
            ref={sortRef}
            name="status"
            id=""
            onChange={(e) => dispatch(sortJobs(e.target.value))}
          >
            <option disabled> Seçiniz</option>
            {sortOption.map((sort, id) => (
              <option key={id}>{sort}</option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={handleReset} type="button">
            Fitreleri Temizle
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
