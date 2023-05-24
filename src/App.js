import React, { useState, useRef } from "react";
import moment from "moment";
import "./styles.css";

const DatePage = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [duration, setDuration] = useState("");
  const fromDateRef = useRef(null);

  const handleFromDateChange = (event) => {
    const selectedDate = moment(event.target.value).format("YYYY-MM-DDTHH:mm");
    setFromDate(selectedDate);
    calculateToDate(selectedDate, duration);
    fromDateRef.current.blur(); // Blur the input to close the date picker
  };

  const handleDurationChange = (event) => {
    const newDuration = parseInt(event.target.value);
    setDuration(newDuration);
    calculateToDate(fromDate, newDuration);
  };

  const calculateToDate = (startDate, duration) => {
    if (startDate && duration) {
      const calculatedToDate = moment(startDate).add(duration, "hours");
      setToDate(calculatedToDate);
    }
  };

  return (
    <div className="container">
      <div className="form-group">
        <label className="label" htmlFor="from-date">
          From Date:
        </label>
        <input
          className="input"
          id="from-date"
          type="datetime-local"
          value={fromDate}
          onChange={handleFromDateChange}
          ref={fromDateRef}
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="duration">
          Duration (in hours):
        </label>
        <input
          className="input"
          id="duration"
          type="number"
          value={duration}
          onChange={handleDurationChange}
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="to-date">
          To Date:
        </label>
        <input
          className="input"
          id="to-date"
          type="text"
          value={toDate ? toDate.toString() : ""}
          disabled
        />
      </div>
    </div>
  );
};

export default DatePage;
