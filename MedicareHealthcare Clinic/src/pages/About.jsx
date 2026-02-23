import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Award,
  Users,
  HeartHandshake,
  Building2,
  CheckCircle2,
  Target,
  Eye,
  Heart,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "20,000+",
    label: "Patients Treated",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "15+",
    label: "Years of Excellence",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
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

const highlights = [
  "State-of-the-art diagnostic equipment",
  "Experienced team of 50+ specialists",
  "Patient-centered compassionate care",
  "24/7 Emergency services available",
  "Modern & hygienic facilities",
  "Affordable treatment packages",
  "International quality standards",
  "Digital health records system",
];

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Our Mission",
    desc: "To provide accessible, affordable, and high-quality healthcare services to every individual, using advanced technology and a compassionate approach.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Our Vision",
    desc: "To be the leading healthcare provider recognized for clinical excellence, innovative care solutions, and an unwavering commitment to patient welfare.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Our Values",
    desc: "Integrity, compassion, excellence, and innovation guide everything we do. We treat every patient like family and strive for the best possible outcomes.",
    color: "bg-red-50 text-red-600",
  },
];

function About() {
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
              About MediCare
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Learn about our journey, our mission, and why thousands of
              patients trust us with their healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
                  alt="MediCare Hospital"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-4 lg:-right-8 bg-white p-6 rounded-2xl shadow-xl border border-blue-50"
              >
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">99%</p>
                  <p className="text-sm text-gray-500 font-medium mt-1">
                    Patient Satisfaction
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4" />
                About Us
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Providing Quality{" "}
                <span className="text-teal-500">Healthcare</span> Since 2010
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                MediCare Hospital is a multi-specialty healthcare provider
                dedicated to delivering exceptional medical services. We combine
                advanced technology with compassionate care to ensure every
                patient receives personalized treatment from our experienced team
                of specialists.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors"
                >
                  Contact Us Today
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${stat.color}`}
                >
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-blue-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              What Drives Us
            </h2>
            <div className="w-20 h-1.5 bg-teal-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${val.color}`}
                >
                  {val.icon}
                </div>
                <h3
                  className="text-xl font-bold text-blue-900 mb-3"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {val.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Ready to Experience MediCare?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Book your appointment today and join thousands of satisfied
              patients who trust MediCare for their healthcare needs.
            </p>
            <Link to="/book-appointment">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-blue-50 transition-colors flex items-center gap-2 mx-auto"
              >
                Book Appointment <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
