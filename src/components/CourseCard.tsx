import React from "react";
import { redirect, useNavigate } from "react-router-dom";

const CourseCard = ({
  image,
  subtitle,
  title,
  rating,
  reviews,
  price,
  oldPrice,
  id,
}) => {
  const navigate = useNavigate();
  const handleCourseClick = (id) => {
    console.log(id);
    navigate(`/courses/${id}`);
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-5 w-[320px]  ">
      <img
        src={image}
        alt="Course"
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h4 className="text-sm text-gray-500">{subtitle}</h4>
        <button onClick={() => handleCourseClick(id)}>
          <h2 className="text-xl text-start font-bold mb-2">{title}</h2>
        </button>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="gold"
              className="w-5 h-5"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.92c.969 0 1.371 1.24.588 1.81l-3.98 2.892a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.98-2.892a1 1 0 00-1.176 0l-3.98 2.892c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 10.1c-.783-.57-.38-1.81.588-1.81h4.92a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
          ))}
          <span className="ml-2 text-gray-500">({reviews} Reviews)</span>
        </div>
        <div className="flex items-center">
          <span className="text-xl font-bold text-blue-500">{price}</span>
          {oldPrice && (
            <span className="text-lg text-gray-500 line-through ml-4">
              {oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
