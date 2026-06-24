// src/components/Navbar.tsx
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/ride', label: 'THE RIDE' },
    { to: '/culture', label: 'CULTURE' },
    { to: '/what-included', label: "WHAT'S INCLUDED" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Bike<span className="text-[#F5A623]">Bhutan</span>
            </span>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest hidden sm:inline-block">
              ⚡
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-colors hover:text-[#F5A623] ${
                    isActive ? 'text-[#F5A623]' : 'text-gray-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/book-now"
              className="bg-[#F5A623] hover:bg-[#e0991f] text-white font-bold py-2.5 px-7 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm tracking-wide"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-gray-100 pt-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-semibold tracking-wide py-2 px-4 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#F5A623]/10 text-[#F5A623]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/book-now"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#F5A623] hover:bg-[#e0991f] text-white font-bold py-3 px-7 rounded-full transition-all duration-300 text-sm tracking-wide"
            >
              BOOK NOW
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}