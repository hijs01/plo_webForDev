// src/components/layout/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="border-t border-neutral-900/80 bg-neutral-950/90">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-neutral-500">
        <span>© {new Date().getFullYear()} CUCO. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <button className="hover:text-neutral-300 text-xs">GitHub</button>
          <button className="hover:text-neutral-300 text-xs">Discord</button>
          <button className="hover:text-neutral-300 text-xs">Notion</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;