import React from "react";
import { Tecnologia } from "../models/interfaces";

export default function Card({
  title,
  image,
  description,
  rating,
}: Tecnologia) {
  return (
    <div className="bg-white border rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-contain"
        />
      </div>
      <div className="p-4 flex-grow">
        <h2 className="text-lg font-bold text-gray-800 truncate">
          {title}
        </h2>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {description}
        </p>
      </div>
      <div className="p-4 border-t flex justify-between items-center">
        <div className="text-sm text-yellow-500">
          {rating}⭐{" "}
        </div>
      </div>
    </div>
  );
}
