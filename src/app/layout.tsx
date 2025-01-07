// app/layout.tsx

"use client";

import "../styles/globals.scss";
import "../styles/partials/_navbar.scss";
import "../styles/partials/_showcase.scss";
import "../styles/partials/_about.scss";
import "../styles/partials/_joinUs.scss";
import "../styles/partials/_footer.scss";
import '../styles/partials/_docs.scss';

import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run animations only once
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>KikoSan | Home</title>
      </head>
      <body>
        {/* You can still keep the child content here */}
        {children}
      </body>
    </html>
  );
}
