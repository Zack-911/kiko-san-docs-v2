"use client";

import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run animations only once
    });
  }, []);

  return <>{children}</>;
}
