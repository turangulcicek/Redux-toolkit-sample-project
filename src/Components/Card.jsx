import React from "react";

const Card = ({ job }) => {
  const getClassName = () => {
    switch (job.status) {
      case "Devam Ediyor":
        return "pending";
      case "Reddedildi":
        return "rejected";
      case "Mülakat":
        return "interview";
      default:
        return "default";
    }
  };

  const { id, position, company, location, status, type, date } = job;
  return (
    <div className="card">
      {/* üst kısım */}
      <div className="head">
        <div className="letter " contentEditable>
          <p>{company[0]}</p>
        </div>
        <div className="info">
          <p>{position}</p>
          <p>{company}</p>
        </div>
      </div>

      {/* alt kısım */}
      <div className="body">
        <div className="field">
          <img src="/images/bag.png" alt="" />
          <p>{location}</p>
        </div>
        <div className="field">
          <img src="/images/bag.png" alt="" />
          <p>{type}</p>
        </div>
        <div className="field">
          <img src="/images/bag.png" alt="" />
          <p>{date}</p>
        </div>
        <div className="status">
          <span className={getClassName()}>{status}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
