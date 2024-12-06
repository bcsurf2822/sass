import React from "react";

export default function FormNewBoard() {
  return (
    <div className="bg-base-100 p-8 rounded-3xl space-y-8">
      {/* TITLE */}
      <p className="font-bold text-lg">Create a new feedback board</p>
      {/* FORM */}
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text font-bold">Board Name</span>

        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      {/* BUTTON */}
      <button className="btn btn-primary btn-block">Create Board</button>
    </div>
  );
}
