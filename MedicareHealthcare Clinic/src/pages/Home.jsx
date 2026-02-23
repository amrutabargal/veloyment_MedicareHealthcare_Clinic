import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Clock,
  ArrowRight,
  HeartPulse,
  Brain,
  Stethoscope,
  Baby,
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  Award,
  Building2,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { useState, useEffect } from "react";

/* ─── HERO SECTION ─── */
function Hero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-teal-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Trusted by 20,000+ Patients</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Your Health is Our{" "}
              <span className="text-teal-500">First Priority</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Experience world-class healthcare with a personal touch. Our
              expert team of specialists and state-of-the-art facilities ensure
              you get the best care possible.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book-appointment">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  Book Appointment
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 border-2 border-blue-100 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                >
                  Our Services
                </motion.button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { value: "15+", label: "Years Exp." },
                { value: "50+", label: "Specialists" },
                { value: "99%", label: "Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="flex flex-col"
                >
                  <span className="text-3xl font-bold text-blue-900">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
                alt="Doctor"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-4 lg:-left-8 bottom-12 z-20 bg-white p-4 lg:p-6 rounded-2xl shadow-xl border border-blue-50 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  Available 24/7
                </p>
                <p className="text-lg font-bold text-blue-900">
                  Emergency Care
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -right-4 lg:-right-8 top-12 z-20 bg-white p-4 lg:p-6 rounded-2xl shadow-xl border border-blue-50 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[11, 12, 13].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-blue-100"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Top Rated</p>
                <p className="text-lg font-bold text-blue-900">
                  Patient Trusted
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURED SERVICES ─── */
const featuredServices = [
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Cardiology",
    desc: "Expert heart care with advanced diagnostic and treatment options.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Neurology",
    desc: "Specialized care for disorders of the nervous system and brain.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "General Surgery",
    desc: "Advanced surgical procedures with a focus on patient safety.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: <Baby className="w-8 h-8" />,
    title: "Pediatrics",
    desc: "Compassionate care for infants, children, and adolescents.",
    color: "bg-orange-50 text-orange-600",
  },
];

function FeaturedServices() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Specialized Services
            </h2>
            <div className="w-20 h-1.5 bg-teal-400 mx-auto rounded-full mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We provide a wide range of medical services to meet your unique
              health needs.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-blue-100 transition-all group"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${service.color} transition-transform group-hover:scale-110`}
              >
                {service.icon}
              </div>
              <h3
                className="text-lg font-bold text-blue-900 mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-600 font-bold flex items-center gap-2 mx-auto border-2 border-blue-200 px-8 py-3 rounded-xl hover:bg-blue-50 transition-all"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── STATS ─── */
const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "20,000+",
    label: "Happy Patients",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "15+",
    label: "Years of Excellence",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    value: "50+",
    label: "Expert Doctors",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    value: "10+",
    label: "Departments",
    color: "bg-orange-50 text-orange-600",
  },
];

function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${stat.color}`}
              >
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-blue-900 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHY CHOOSE US ─── */
const reasons = [
  "State-of-the-art diagnostic equipment",
  "Experienced team of 50+ specialists",
  "Patient-centered compassionate care",
  "24/7 Emergency services available",
  "Modern & hygienic facilities",
  "Affordable treatment packages",
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
                alt="Hospital"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Why Choose <span className="text-teal-500">MediCare?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We combine cutting-edge medical technology with compassionate care
              to deliver the best healthcare experience.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {reasons.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors"
              >
                Learn More About Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
const testimonials = [
  {
    name: "James Wilson",
    role: "Cardiac Patient",
    content:
      "The care I received at MediCare was exceptional. The doctors were incredibly professional and attentive throughout my recovery.",
    avatar: "https://i.pravatar.cc/150?u=james",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "General Checkup",
    content:
      "I've been visiting this clinic for years. The facilities are top-notch and the booking process is so smooth. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=emily",
    rating: 5,
  },
  {
    name: "Robert Brown",
    role: "Orthopedic Patient",
    content:
      "Excellent service from start to finish. The specialists here really take the time to explain everything clearly.",
    avatar: "https://i.pravatar.cc/150?u=robert",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    role: "Pediatric Visit",
    content:
      "Dr. Williams was wonderful with my kids. She made them feel at ease. Best pediatric care we have ever experienced!",
    avatar: "https://i.pravatar.cc/150?u=sophia",
    rating: 5,
  },
  {
    name: "David Kumar",
    role: "Neurology Patient",
    content:
      "After years of chronic headaches, Dr. Chen finally helped me find a solution. The diagnosis was thorough and the treatment was effective.",
    avatar: "https://i.pravatar.cc/150?u=david",
    rating: 4,
  },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setIdx((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[idx];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              What Our Patients{" "}
              <span className="text-teal-500">Say About Us</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We take pride in delivering the highest quality healthcare
              experience.
            </p>
            <div className="flex gap-4 items-center">
              <div className="flex -space-x-3">
                {[21, 22, 23, 24].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <span className="font-bold text-blue-900">4.9/5 Rating</span>
                <p className="text-sm text-gray-500">From 10,000+ Reviews</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-blue-50/50 rounded-[2.5rem] p-8 md:p-12 relative min-h-[320px]">
              <Quote className="absolute top-8 right-8 md:top-10 md:right-12 w-16 h-16 text-blue-100" />
              <div key={idx}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg">
                      {current.name}
                    </h4>
                    <p className="text-teal-600 font-medium">{current.role}</p>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < current.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic leading-relaxed">
                  &ldquo;{current.content}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={`h-3 rounded-full transition-all ${
                        i === idx
                          ? "bg-blue-600 w-8"
                          : "bg-blue-200 hover:bg-blue-300 w-3"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg text-blue-600"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg text-blue-600"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA SECTION ─── */
function CTASection() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience world-class healthcare at
            MediCare. Our team is ready to provide you with the best care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-appointment">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                Book Appointment <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white border-2 border-white/50 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── HOME PAGE ─── */
function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <StatsSection />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}

export default Home;
