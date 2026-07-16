import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Filter.css";

const OPTIONS = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

function Filter({ filter, setFilter }) {
  return (
    <div className="filter">
      <select
        className="filter__select"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        aria-label="Filter tasks"
      >
        {OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <FaChevronDown className="filter__icon" aria-hidden="true" />
    </div>
  );
}

export default Filter;
