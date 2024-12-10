import React from "react";
import { Tecnologia } from "../models/interfaces";

export default function Card({
  title,
  image,
  description,
  rating,
}: Tecnologia) {
  return (
    <section className="bg-white border rounded-xl shadow-xl hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col">
      <article className="overflow-hidden rounded-t-lx pt-10">
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-contain"
        />
      </article>
      <article className="p-4 flex-grow">
        <h2 className="text-lg font-bold text-gray-800">
          {title}
        </h2>
        <p className="text-sm text-gray-600">
          {description}
        </p>
      </article>
      <article className="p-4 border-t flex justify-between items-center">
      <article className="text-sm text-yellow-500 flex items-center">
          {rating}⭐{" "}
        </article>
      </article>
    </section>
  );
}
