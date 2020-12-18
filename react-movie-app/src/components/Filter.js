import React from "react";
import Rating from "./Rating";

const Filter = ({ setFilterTitle, setFilterRate }) => {
  // const [filterRate, setFilterRate] = useState("");

  return (
    <div className="heading d-flex justify-content-between px-5 mt-3 sticky-top">
      <h1>Movies</h1>
      <>
        <div className="filter d-flex justify-content-between">
          <input
            type="text"
            onChange={(e) => setFilterTitle(e.target.value)}
            placeholder="Filter by title..."
            className="form-control"
          />
          <Rating setFilterRate={setFilterRate} />
        </div>
      </>
    </div>
  );
};

export default Filter;
