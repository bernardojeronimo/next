"use client";

import React from "react";
import Card from "./Card";
import tecnologias from "@/private/data/tecnologias.json";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tecnologias</h1>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Mapear o JSON com tipagem correta */}
        {tecnologias.map((tec,index) => (
          <Card
            id={index}
            title={tec.title}
            image={tec.image}
            description={tec.description}
            rating={tec.rating}
          />
        ))}
      </div>
    </div>
  );
}
