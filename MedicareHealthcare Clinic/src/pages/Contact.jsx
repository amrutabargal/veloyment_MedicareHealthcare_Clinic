import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ExternalLink,
  MessageSquare,
  User,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errs.email = "Enter a valid email";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSending(false);
    setSent(true);
    toast.success("Message sent successfully!", {
      description: "We will get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const openDirections = () => {
    window.open(
      "https://www.google.com/maps/search/123+Healthcare+Ave+Medical+District+New+York",
      "_blank"
    );
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contact Us
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Have questions or need assistance? Our friendly team is here to
              help. Reach out to us anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Location",
                info: "123 Healthcare Ave, Medical District, NY 10001",
                action: openDirections,
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Phone",
                info: "+1 (555) 123-4567",
                action: () => window.open("tel:+15551234567"),
                color: "bg-teal-50 text-teal-600",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email",
                info: "contact@medicare.com",
                action: () => window.open("mailto:contact@medicare.com"),
                color: "bg-purple-50 text-purple-600",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Hours",
                info: "Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-5PM",
                color: "bg-orange-50 text-orange-600",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={card.action}
                className={`bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-all ${
                  card.action ? "cursor-pointer" : ""
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${card.color}`}
                >
                  {card.icon}
                </div>
                <h3 className="font-bold text-blue-900 mb-1">{card.title}</h3>
                <p className="text-sm text-gray-500">{card.info}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-blue-900">
                      Send us a Message
                    </h2>
                    <p className="text-sm text-gray-500">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-green-800 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-blue-900 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-blue-500" /> Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.name
                              ? "border-red-400"
                              : "border-gray-200 focus:border-blue-500"
                          } focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-blue-900 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-blue-500" /> Email
                          *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.email
                              ? "border-red-400"
                              : "border-gray-200 focus:border-blue-500"
                          } focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-blue-900">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.subject
                            ? "border-red-400"
                            : "border-gray-200 focus:border-blue-500"
                        } focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.subject}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-blue-900">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.message
                            ? "border-red-400"
                            : "border-gray-200 focus:border-blue-500"
                        } focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isSending}
                      whileHover={isSending ? {} : { scale: 1.02 }}
                      whileTap={isSending ? {} : { scale: 0.98 }}
                      className={`w-full py-3 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${
                        isSending
                          ? "bg-blue-400 text-white/80 cursor-not-allowed"
                          : "bg-blue-600 text-white shadow-blue-200 hover:bg-blue-700"
                      }`}
                    >
                      {isSending ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-full min-h-[500px] bg-blue-900 rounded-2xl overflow-hidden relative border border-blue-800">
                <div className="absolute inset-0 flex items-center justify-center flex-col p-12 text-center">
                  <div className="w-20 h-20 bg-blue-800/50 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <MapPin className="w-10 h-10 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Visit Our Clinic
                  </h3>
                  <p className="text-blue-300 mb-1">
                    123 Healthcare Ave, Medical District
                  </p>
                  <p className="text-blue-300 mb-8">New York, NY 10001</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={openDirections}
                      className="bg-teal-500 text-white px-8 py-3 rounded-full font-bold hover:bg-teal-600 transition-colors flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Get Directions
                    </motion.button>
                    <Link to="/book-appointment">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/10 text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-colors border border-white/20"
                      >
                        Book a Visit
                      </motion.button>
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
