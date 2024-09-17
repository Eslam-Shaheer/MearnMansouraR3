"use client";
import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { routes } from "./routes";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      {routes.map((item) => (
        <Link
          className={pathname == item.href ? styles.active : ""}
          key={item.title}
          href={item.href}
        >
          {item.title}
        </Link>
      ))}
    </header>
  );
};

export default Header;
