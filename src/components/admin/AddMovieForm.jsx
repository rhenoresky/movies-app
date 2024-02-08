"use client";

import { useEffect, useState } from "react";
import { addMovie } from "@/lib/admin/addMovieForm";
import Image from "next/image";
import { useFormState } from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddMovieForm = () => {
  const [state, formAction] = useFormState(addMovie, undefined);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [image, setImage] = useState(undefined);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const successAddMovie = () => {
    setSelectedCategories([]);
    setImage(undefined);
    toast.success("Success add movie", {
      position: "bottom-right",
    });
  };

  useEffect(() => {
    state?.success && successAddMovie();

    state?.errorAddMovie &&
      toast.error("Failed add movie", {
        position: "bottom-right",
      });

    state?.errorAddCategory &&
      toast.error("Failed add movie category", {
        position: "bottom-right",
      });

    state?.errorAddImage &&
      toast.error("Failed add movie image", {
        position: "bottom-right",
      });

    state?.errorConnection &&
      toast.error("Error connection", {
        position: "bottom-right",
      });
  }, [state]);

  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold mb-2">Add New Movie</h2>
          <form action={formAction}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Enter description"
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="duration" className="block text-gray-700 text-sm font-bold mb-2">
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  placeholder="Enter duration"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">
                  Rating
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  step="0.1"
                  min="0"
                  max="10"
                  placeholder="Enter rating"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="release" className="block text-gray-700 text-sm font-bold mb-2">
                  Release Date
                </label>
                <input
                  type="date"
                  id="release"
                  name="release"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="categories" className="block text-gray-700 text-sm font-bold mb-2">
                  Category
                </label>
                <input type="hidden" name="categories" id="categories" value={selectedCategories} />
                <div className="flex flex-wrap gap-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Horror"
                      checked={selectedCategories.includes("Horror")}
                      onChange={handleCategoryChange}
                      className="mr-2 leading-tight"
                    />
                    <span className="text-sm">Horror</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Action"
                      checked={selectedCategories.includes("Action")}
                      onChange={handleCategoryChange}
                      className="mr-2 leading-tight"
                    />
                    <span className="text-sm">Action</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Comedy"
                      checked={selectedCategories.includes("Comedy")}
                      onChange={handleCategoryChange}
                      className="mr-2 leading-tight"
                    />
                    <span className="text-sm">Comedy</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                Image
              </label>
              <input
                onChange={handleImageChange}
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="hidden"
              />
              <label
                htmlFor="image"
                className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block"
              >
                Choose Image
              </label>
              {image && (
                <div className="mt-2 w-full">
                  <Image
                    src={URL.createObjectURL(image)}
                    width={400}
                    height={400}
                    alt="Movie Poster"
                    className="max-w-full h-auto"
                  />
                </div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddMovieForm;
