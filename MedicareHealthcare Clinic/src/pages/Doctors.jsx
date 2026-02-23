import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Star,
  Linkedin,
  Twitter,
  X,
  Calendar,
  Award,
  GraduationCap,
  Clock,
  ArrowRight,
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    role: "Senior Cardiologist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80",
    rating: 4.9,
    reviews: 120,
    experience: "12 Years",
    education: "Harvard Medical School",
    specialties: ["Heart Surgery", "Cardiac Imaging", "Preventive Cardiology"],
    availability: "Mon - Fri, 9AM - 5PM",
    bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 12 years of experience in treating complex heart conditions. She is known for her compassionate approach and innovative treatment methods.",
  },
  {
    name: "Dr. Michael Chen",
    role: "Neurology Specialist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80",
    rating: 4.8,
    reviews: 95,
    experience: "15 Years",
    education: "Johns Hopkins University",
    specialties: ["Brain Surgery", "Epilepsy Treatment", "Stroke Recovery"],
    availability: "Mon - Thu, 10AM - 6PM",
    bio: "Dr. Michael Chen specializes in neurological disorders with an emphasis on stroke recovery and epilepsy treatment. His research has been published in numerous medical journals worldwide.",
  },
  {
    name: "Dr. Emily Williams",
    role: "Pediatric Surgeon",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964f137?w=500&q=80",
    rating: 5.0,
    reviews: 150,
    experience: "10 Years",
    education: "Stanford University",
    specialties: ["Pediatric Surgery", "Neonatal Care", "Child Nutrition"],
    availability: "Mon - Sat, 8AM - 4PM",
    bio: "Dr. Emily Williams is a renowned pediatric surgeon known for her gentle approach with young patients. She has successfully performed thousands of pediatric procedures with exceptional outcomes.",
  },
  {
    name: "Dr. James Anderson",
    role: "Orthopedic Surgeon",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&q=80",
    rating: 4.7,
    reviews: 88,
    experience: "18 Years",
    education: "Yale School of Medicine",
    specialties: ["Joint Replacement", "Sports Medicine", "Spine Surgery"],
    availability: "Mon - Fri, 8AM - 5PM",
    bio: "Dr. James Anderson is an experienced orthopedic surgeon specializing in joint replacement and sports injuries. He has treated many professional athletes and helped them return to peak performance.",
  },
  {
    name: "Dr. Priya Sharma",
    role: "General Physician",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=500&q=80",
    rating: 4.9,
    reviews: 200,
    experience: "8 Years",
    education: "AIIMS Delhi",
    specialties: [
      "General Medicine",
      "Diabetes Management",
      "Preventive Health",
    ],
    availability: "Mon - Sat, 9AM - 7PM",
    bio: "Dr. Priya Sharma is a compassionate general physician dedicated to preventive medicine and holistic patient care. She believes in treating the whole person, not just the symptoms.",
  },
  {
    name: "Dr. David Kim",
    role: "Dental Specialist",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&q=80",
    rating: 4.8,
    reviews: 110,
    experience: "11 Years",
    education: "NYU College of Dentistry",
    specialties: [
      "Cosmetic Dentistry",
      "Dental Implants",
      "Orthodontics",
    ],
    availability: "Tue - Sat, 9AM - 6PM",
    bio: "Dr. David Kim is an expert in cosmetic and restorative dentistry. He uses the latest digital technology to provide painless dental treatments and create beautiful, lasting smiles.",
  },
];

function Doctors() {
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
              Our Expert Doctors
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Meet our team of highly qualified specialists dedicated to
              providing you with the best medical care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:shadow-blue-100 transition-all cursor-pointer"
                onClick={() => setSelected(doctor)}
              >
                <div className="relative overflow-hidden h-72">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold text-blue-900">
                      {doctor.rating}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors flex items-center justify-center">
                    <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600/80 px-6 py-2 rounded-full backdrop-blur-sm">
                      View Profile
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-blue-900 mb-1"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {doctor.name}
                  </h3>
                  <p className="text-teal-600 font-semibold text-sm mb-1">
                    {doctor.role}
                  </p>
                  <p className="text-sm text-gray-400 mb-4">
                    {doctor.experience} Experience
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {doctor.reviews} Reviews
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 bg-gray-50 rounded-full hover:bg-blue-100 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 bg-gray-50 rounded-full hover:bg-blue-100 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Detail Modal */}
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
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              {/* Header Image */}
              <div className="relative h-48 md:h-56">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <div className="absolute bottom-6 left-6">
                  <h3
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {selected.name}
                  </h3>
                  <p className="text-teal-300 font-semibold">{selected.role}</p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* Quick Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  <div className="bg-blue-50 rounded-xl p-3 text-center">
                    <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1 fill-yellow-500" />
                    <p className="font-bold text-blue-900">{selected.rating}</p>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3 text-center">
                    <Award className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                    <p className="font-bold text-blue-900">
                      {selected.experience}
                    </p>
                    <p className="text-xs text-gray-500">Experience</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3 text-center">
                    <GraduationCap className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                    <p className="font-bold text-blue-900 text-xs leading-tight">
                      {selected.education}
                    </p>
                    <p className="text-xs text-gray-500">Education</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3 text-center">
                    <Calendar className="w-5 h-5 text-teal-500 mx-auto mb-1" />
                    <p className="font-bold text-blue-900">
                      {selected.reviews}
                    </p>
                    <p className="text-xs text-gray-500">Reviews</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selected.bio}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.specialties.map((s, i) => (
                      <span
                        key={i}
                        className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-2 bg-green-50 rounded-xl p-4 mb-6">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm font-semibold text-green-800">
                      Available
                    </p>
                    <p className="text-sm text-green-600">
                      {selected.availability}
                    </p>
                  </div>
                </div>

                <Link
                  to="/book-appointment"
                  onClick={() => setSelected(null)}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Book Appointment with{" "}
                    {selected.name.split(" ").slice(0, 2).join(" ")}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Doctors;
