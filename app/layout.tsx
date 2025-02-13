import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../styles/style.css";
import "../styles/globals.css";

// app/layout.tsx
import React from 'react';

export const metadata = {
  title: 'Mon Application Next.js',
  description: 'Application utilisant Tailwind CSS via CDN',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default Layout;
