"use client";

import { useEffect, useState } from "react";
import Tecnologias from "./Card";
import tecJSON from '@/private/data/tecnologias.json';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('home-body');
    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);

  const tec = useState([]);

  useEffect(() => {
    setTec(tecJSON);
  }, []);

  return (
    <main>
      <h2>Tecnologias</h2>

      <section id="produtos">
        <Tecnologias
          tecno={tec}
        />
      </section>
    </main>
  );
}
