import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  HeartPulse,
  Brain,
  Stethoscope,
  Baby,
  ShieldCheck,
  Activity,
  Eye,
  Bone,
  X,
  Clock,
  DollarSign,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Cardiology",
    desc: "Expert heart care with advanced diagnostic and treatment options.",
    color: "bg-red-50 text-red-600",
    fullDesc:
      "Our Cardiology department offers comprehensive heart care services including ECG, Echocardiography, Angioplasty, Cardiac Catheterization, and preventive cardiac screenings. We use the latest technology to diagnose and treat all types of heart conditions.",
    duration: "30-60 min",
    price: "From $150",
    features: [
      "ECG & Stress Testing",
      "Echocardiography",
      "Cardiac Surgery",
      "Preventive Screening",
      "Heart Failure Management",
    ],
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Neurology",
    desc: "Specialized care for disorders of the nervous system and brain.",
    color: "bg-blue-50 text-blue-600",
    fullDesc:
      "Our neurology specialists provide expert diagnosis and treatment for conditions affecting the brain, spinal cord, and nervous system. From headaches to complex neurological disorders, we offer cutting-edge care.",
    duration: "45-90 min",
    price: "From $200",
    features: [
      "Brain MRI & CT Scans",
      "EEG Monitoring",
      "Stroke Treatment",
      "Epilepsy Care",
      "Nerve Conduction Studies",
    ],
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "General Surgery",
    desc: "Advanced surgical procedures with a focus on patient safety.",
    color: "bg-teal-50 text-teal-600",
    fullDesc:
      "Our General Surgery department performs a wide range of surgical procedures using minimally invasive techniques. Our experienced surgeons ensure the highest standards of safety and recovery.",
    duration: "Varies",
    price: "From $500",
    features: [
      "Laparoscopic Surgery",
      "Hernia Repair",
      "Appendectomy",
      "Gallbladder Surgery",
      "Post-Op Care",
    ],
  },
  {
    icon: <Baby className="w-8 h-8" />,
    title: "Pediatrics",
    desc: "Compassionate care for infants, children, and adolescents.",
    color: "bg-orange-50 text-orange-600",
    fullDesc:
      "Our pediatric team provides comprehensive healthcare for children from birth through adolescence. We create a warm, friendly environment to help young patients feel comfortable.",
    duration: "20-45 min",
    price: "From $100",
    features: [
      "Well-Child Visits",
      "Vaccinations",
      "Growth Monitoring",
      "Pediatric Emergency",
      "Nutritional Counseling",
    ],
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Orthopedics",
    desc: "Restoring mobility and function to the musculoskeletal system.",
    color: "bg-green-50 text-green-600",
    fullDesc:
      "Our Orthopedic specialists treat conditions of the bones, joints, muscles, and ligaments. We offer both surgical and non-surgical treatments to restore mobility and reduce pain.",
    duration: "30-60 min",
    price: "From $175",
    features: [
      "Joint Replacement",
      "Fracture Care",
      "Sports Medicine",
      "Physical Therapy",
      "Spine Surgery",
    ],
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Laboratory",
    desc: "Precise and timely diagnostic testing for accurate treatment.",
    color: "bg-purple-50 text-purple-600",
    fullDesc:
      "Our state-of-the-art laboratory provides a comprehensive range of diagnostic tests with quick turnaround times. Accurate results help doctors make the best treatment decisions.",
    duration: "15-30 min",
    price: "From $50",
    features: [
      "Blood Tests",
      "Urine Analysis",
      "Pathology Reports",
      "Genetic Testing",
      "COVID-19 Testing",
    ],
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Ophthalmology",
    desc: "Complete eye care from routine checkups to advanced surgery.",
    color: "bg-cyan-50 text-cyan-600",
    fullDesc:
      "Our Ophthalmology department provides comprehensive eye care services including vision testing, cataract surgery, LASIK, and treatment for glaucoma and other eye conditions.",
    duration: "30-60 min",
    price: "From $125",
    features: [
      "Vision Testing",
      "Cataract Surgery",
      "LASIK Procedure",
      "Glaucoma Treatment",
      "Retina Care",
    ],
  },
  {
    icon: <Bone className="w-8 h-8" />,
    title: "Dental Care",
    desc: "Modern dental treatments for a healthy, beautiful smile.",
    color: "bg-pink-50 text-pink-600",
    fullDesc:
      "Our Dental department offers everything from routine cleanings and fillings to advanced procedures like root canals, implants, and cosmetic dentistry for a perfect smile.",
    duration: "30-90 min",
    price: "From $75",
    features: [
      "Dental Cleaning",
      "Root Canal Treatment",
      "Dental Implants",
      "Teeth Whitening",
      "Orthodontics",
    ],
  },
];

function Services() {
  const [selected, setSelected] = useState(null);

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
              Our Services
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              We provide a wide range of medical services to meet your unique
              health needs with excellence and compassion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(service)}
                className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-blue-100 transition-all group cursor-pointer"
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
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {service.duration}
                  </span>
                  <span className="text-blue-600 font-semibold">
                    {service.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <p className="text-gray-500 mb-4">
              Can't find what you're looking for?
            </p>
            <Link to="/book-appointment">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
              >
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 md:p-10 max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${selected.color}`}
                >
                  {selected.icon}
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <h3
                className="text-2xl font-bold text-blue-900 mb-3"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {selected.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {selected.fullDesc}
              </p>

              <div className="flex gap-4 mb-6">
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">
                    {selected.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">
                    {selected.price}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-blue-900 mb-3">
                  What's Included:
                </h4>
                <div className="space-y-2">
                  {selected.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/book-appointment" onClick={() => setSelected(null)}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors"
                >
                  Book This Service
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Services;
