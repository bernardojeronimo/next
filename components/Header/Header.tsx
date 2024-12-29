"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  const getTitle = () => {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/produtos':
        return 'Zarvii';
      case '/tecnologias':
        return 'Tecnologias';
      default:
        return 'React & Next';
    }
  };

  return (
    <header className={styles.header}>
      <h1>{getTitle()}</h1>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/">- Home</Link></li>
          <li><Link href="/produtos">- Produtos</Link></li>
          <li><Link href="/tecnologias">- Tecnologias</Link></li>
        </ul>
      </nav>
    </header>
  );
}