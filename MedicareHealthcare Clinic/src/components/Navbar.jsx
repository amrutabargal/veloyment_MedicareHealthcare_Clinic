import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Stethoscope,
  Menu,
  X,
  CalendarCheck,
  ClipboardList,
} from "lucide-react";
import { useAppointments } from "../store/useAppointments.js";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Doctors", path: "/doctors" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { confirmedCount } = useAppointments();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-100/20"
          : "bg-white/80 backdrop-blur-md"
      } border-b border-blue-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span
              className="text-2xl font-bold text-blue-900"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Medi<span className="text-teal-500">Care</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-colors relative group ${
                    isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                  }`
                }
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full rounded-full" />
              </NavLink>
            ))}

            {/* My Appointments link with badge */}
            <NavLink
              to="/my-appointments"
              className={({ isActive }) =>
                `font-medium transition-colors flex items-center gap-1.5 ${
                  isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              <ClipboardList className="w-4 h-4" />
              Appointments
              {confirmedCount > 0 && (
                <span className="bg-teal-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {confirmedCount}
                </span>
              )}
            </NavLink>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/book-appointment")}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              Book Now
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            {confirmedCount > 0 && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/my-appointments");
                }}
                className="relative p-2 text-gray-600"
              >
                <ClipboardList className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 bg-teal-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {confirmedCount}
                </span>
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-lg font-medium transition-colors ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink
                to="/my-appointments"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`
                }
              >
                <ClipboardList className="w-4 h-4" />
                My Appointments
                {confirmedCount > 0 && (
                  <span className="bg-teal-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {confirmedCount}
                  </span>
                )}
              </NavLink>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/book-appointment");
                }}
                className="w-full text-left px-3 py-2.5 text-white font-bold bg-blue-600 rounded-lg flex items-center gap-2 mt-2"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
