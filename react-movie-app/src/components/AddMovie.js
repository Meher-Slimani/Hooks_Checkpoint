import React from "react";

const AddMovie = ({ addMovie }) => {
  //HERE ARE FUNCTIONS...
  const submitHandler = (e) => {
    let formData = {
      Title: document.getElementById("title").value,
      ImdbID: `${Math.floor(Math.random() * 1000)}`,
      Rating: document.getElementById("rating").value,
      Description: document.getElementById("description").value,
      Poster: document.getElementById("poster-path").value,
    };
    addMovie(formData);
    e.preventDefault();
    document.getElementById("addForm").reset();
  };

  return (
    <div className="form d-flex col-3 flex-column mr-5">
      <h3 className="text-center">Add a movie</h3>
      <form id="addForm" onSubmit={submitHandler}>
        <label className="mt-2">Movie Title</label>
        <input type="text" id="title" className="form-control" />
        <label className="mt-2">Rating</label>
        <input type="text" id="rating" className="form-control" />
        <label className="mt-2">Poster Path</label>
        <input type="text" id="poster-path" className="form-control" />
        <label className="mt-2">Description</label>
        <textarea type="text" id="description" className="form-control" />
        <button type="submit" className="add btn btn-success mt-4">
          + Add
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
