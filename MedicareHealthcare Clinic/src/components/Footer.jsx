import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Stethoscope,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { toast } from "sonner";
import { useNewsletter } from "../store/useAppointments.js";

function Footer() {
  const [email, setEmail] = useState("");
  const { addSubscriber, isSubscribed } = useNewsletter();

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      toast.error("Please enter a valid email");
      return;
    }
    if (isSubscribed(email.trim())) {
      toast.info("You are already subscribed!");
      return;
    }
    addSubscriber(email.trim());
    toast.success("Subscribed to newsletter!", {
      description: "You will receive health tips at " + email.trim(),
    });
    setEmail("");
  };

  return (
    <footer className="bg-blue-900 text-white rounded-t-[3rem] mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-teal-500 rounded-lg">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Medi<span className="text-teal-400">Care</span>
              </span>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Leading the way in medical excellence with a focus on patient care
              and innovative healthcare solutions since 2010.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-blue-200 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Our Services", path: "/services" },
                { name: "Our Doctors", path: "/doctors" },
                { name: "About Us", path: "/about" },
                { name: "Book Appointment", path: "/book-appointment" },
                { name: "My Appointments", path: "/my-appointments" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-blue-200">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>123 Healthcare Ave, Medical District, New York, NY 10001</span>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex gap-3 text-blue-200 hover:text-teal-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@medicare.com"
                  className="flex gap-3 text-blue-200 hover:text-teal-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span>contact@medicare.com</span>
                </a>
              </li>
              <li className="flex gap-3 text-blue-200">
                <Clock className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <div>
                  <p>Mon-Fri: 8AM - 8PM</p>
                  <p>Sat-Sun: 9AM - 5PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-blue-200 text-sm mb-4">
              Subscribe for health tips, updates, and exclusive offers from
              MediCare.
            </p>
            <form onSubmit={handleNewsletter} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-teal-400 text-sm transition-colors placeholder:text-blue-300"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-teal-500 text-white py-3 rounded-xl font-semibold hover:bg-teal-600 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" />
                Subscribe Now
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-blue-300 text-sm">
          <p>&copy; 2026 MediCare Private Hospital. All rights reserved.</p>
          <div className="flex gap-6">
            <button
              onClick={() => toast.info("Privacy Policy page coming soon")}
              className="hover:text-teal-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => toast.info("Terms page coming soon")}
              className="hover:text-teal-400 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
