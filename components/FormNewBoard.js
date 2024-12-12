"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import {  useState } from "react";
import toast from "react-hot-toast";

const FormNewBoard = () => {
  const router = useRouter()
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    // FETCH TECHNIQUE
  //   try {
  //     const response = await fetch("/api/board", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         name,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const data = await response.json();
  //     console.log("DATA", data)

  //     setName("")
  //   } catch (error) {
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  try {
    // api route and what we are passing in
const data = await axios.post("/api/board", {name})

    setName("")
// nextjs refreshes current route
toast.success("Board Created")
    router.refresh()
  } catch (error) {
    // const errorMessage = error.message || "Something Went Wrong"
    const errorMessage = error.response?.data?.error || error.message || "Something went wrong"
    toast.error(errorMessage)
  } finally {
    setIsLoading(false);
  }
};

  return (
    <form
      className="bg-base-100 p-8 rounded-3xl space-y-8"
      onSubmit={handleSubmit}
    >
      {/* TITLE */}
      <p className="font-bold text-lg">Create a new feedback board</p>
      {/* FORM */}
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text font-bold">Board Name</span>
        </div>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      {/* BUTTON */}
      <button type="submit" className="btn btn-primary btn-block">
        {isLoading && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        Create Board
      </button>
    </form>
  );
};

export default FormNewBoard;
