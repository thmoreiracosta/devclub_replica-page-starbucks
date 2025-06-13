import { useState } from "react";
//import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  //const navigate = useNavigate();

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="flex items-center space-x-8">
          <a href="/">
            <img
              src="../public/assets/starbucks-nav-logo.svg"
              alt="Starbucks"
              className="h-14 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-sm font-bold text-gray-800 hover:text-green-700"
            >
              MENU
            </a>
            <a
              href="#"
              className="text-sm font-bold text-gray-800 hover:text-green-700"
            >
              NOSSO CAFÉ
            </a>
            <a
              href="#"
              className="text-sm font-bold text-gray-800 hover:text-green-700"
            >
              IMPACTO SOCIAL
            </a>
            <a
              href="/devclub"
              className="text-sm font-bold text-gray-800 hover:text-green-700"
            >
              DEVCLUB
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="text-center leading-tight">
            <a
              href="https://historias.starbucks.com/br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="tracking-mega text-[8px] font-bold text-gray-600">
                STARBUCKS®
              </div>
              <div className="text-[20px] font-bold text-gray-900">
                HISTÓRIAS
              </div>
              <div className="tracking-mega text-[8px] font-bold text-gray-600">
                LATIN AMERICA
              </div>
            </a>
          </div>
          <div className="gap-2 flex items-center space-x-1">
            <svg
              className="h-4 w-4 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0C6.14 0 3 3.14 3 7c0 4.25 6.7 12.45 6.99 12.79a.5.5 0 00.77 0C10.3 19.45 17 11.25 17 7c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            <a
              href="#"
              className="gap-2 text-[16px] font-bold text-gray-800 hover:text-green-700"
            >
              Encontre uma loja
            </a>
          </div>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <a
            href="#"
            className="block text-sm font-bold text-gray-800 hover:text-green-700"
          >
            MENU
          </a>
          <a
            href="#"
            className="block text-sm font-bold text-gray-800 hover:text-green-700"
          >
            NOSSO CAFÉ
          </a>
          <a
            href="#"
            className="block text-sm font-bold text-gray-800 hover:text-green-700"
          >
            IMPACTO SOCIAL
          </a>
          <a
            href="#"
            className="block text-sm font-bold text-gray-800 hover:text-green-700"
          >
            HISTÓRIAS
          </a>
          <a
            href="#"
            className="block text-sm font-bold text-gray-800 hover:text-green-700"
          >
            Encontre uma loja
          </a>
        </div>
      )}
    </header>
  );
}
