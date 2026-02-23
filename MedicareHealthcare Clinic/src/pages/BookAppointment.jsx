import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  Calendar,
  User,
  Phone,
  Mail,
  ClipboardList,
  Stethoscope,
  Clock,
  AlertCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import { useAppointments } from "../store/useAppointments.js";

const services = [
  "General Consultation",
  "Cardiology",
  "Neurology",
  "Dental Care",
  "Pediatrics",
  "Orthopedics",
  "Laboratory Tests",
  "General Surgery",
  "Ophthalmology",
];

const doctors = [
  { name: "Dr. Sarah Johnson", specialty: "Senior Cardiologist" },
  { name: "Dr. Michael Chen", specialty: "Neurology Specialist" },
  { name: "Dr. Emily Williams", specialty: "Pediatric Surgeon" },
  { name: "Dr. James Anderson", specialty: "Orthopedic Surgeon" },
  { name: "Dr. Priya Sharma", specialty: "General Physician" },
  { name: "Dr. David Kim", specialty: "Dental Specialist" },
];

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
];

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  service: "",
  doctor: "",
  message: "",
};

function BookAppointment() {
  const navigate = useNavigate();
  const { addAppointment } = useAppointments();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastBooking, setLastBooking] = useState(null);

  const today = new Date().toISOString().split("T")[0];

  const validate = () => {
    const newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    else if (form.fullName.trim().length < 2)
      newErrors.fullName = "Name must be at least 2 characters";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[\d\s\-\+\(\)]{7,15}$/.test(form.phone.trim()))
      newErrors.phone = "Enter a valid phone number";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      newErrors.email = "Enter a valid email address";

    if (!form.date) newErrors.date = "Please select a date";
    else if (form.date < today) newErrors.date = "Cannot select a past date";

    if (!form.time) newErrors.time = "Please select a time slot";
    if (!form.service) newErrors.service = "Please select a service";
    if (!form.doctor) newErrors.doctor = "Please select a doctor";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    addAppointment({
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      date: form.date,
      time: form.time,
      service: form.service,
      doctor: form.doctor,
      message: form.message.trim(),
    });

    setLastBooking({ ...form });
    setIsSubmitting(false);
    setShowSuccess(true);
    setForm(initialForm);

    toast.success("Appointment booked successfully!", {
      description: `${form.date} at ${form.time} with ${form.doctor}`,
      duration: 5000,
    });
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
              Book an Appointment
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Schedule your visit with our specialists in just a few minutes.
              Fill out the form below and we'll confirm your appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          {showSuccess && lastBooking && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-green-800 mb-2">
                    Appointment Confirmed!
                  </h3>
                  <p className="text-green-700 mb-4">
                    Your appointment has been booked successfully. Here are the
                    details:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/70 rounded-lg p-3">
                      <span className="text-green-600 font-semibold">
                        Patient:
                      </span>
                      <p className="text-green-800 font-medium">
                        {lastBooking.fullName}
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-3">
                      <span className="text-green-600 font-semibold">
                        Doctor:
                      </span>
                      <p className="text-green-800 font-medium">
                        {lastBooking.doctor}
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-3">
                      <span className="text-green-600 font-semibold">
                        Date & Time:
                      </span>
                      <p className="text-green-800 font-medium">
                        {formatDate(lastBooking.date)} at {lastBooking.time}
                      </p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-3">
                      <span className="text-green-600 font-semibold">
                        Service:
                      </span>
                      <p className="text-green-800 font-medium">
                        {lastBooking.service}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-5">
                    <button
                      onClick={() => setShowSuccess(false)}
                      className="text-sm bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Book Another Appointment
                    </button>
                    <button
                      onClick={() => navigate("/my-appointments")}
                      className="text-sm bg-white text-green-700 border border-green-300 px-5 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center gap-2"
                    >
                      View My Appointments <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Form */}
          {!showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 md:p-10 rounded-[2rem] shadow-xl border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-blue-900">
                    Appointment Details
                  </h2>
                  <p className="text-sm text-gray-500">
                    All fields marked with * are required
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-blue-900 flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-500" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.fullName
                          ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
                      } focus:ring-2 transition-all outline-none`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-blue-900 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-500" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone
                          ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
                      } focus:ring-2 transition-all outline-none`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-blue-900 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-500" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email
                          ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
                      } focus:ring-2 transition-all outline-none`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-blue-900 flex items-center gap-2">
                      <ClipboardList className="w-4 h-4 text-blue-500" />
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.service
                          ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
                      } focus:ring-2 transition-all outline-none appearance-none bg-white`}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Doctor */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-blue-900 flex items-center gap-2">
                      <Stethoscope className="w-4 h-4 text-blue-500" />
                      Select Doctor *
                    </label>
                    <select
                      name="doctor"
                      value={form.doctor}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.doctor
                          ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
                      } focus:ring-2 transition-all outline-none appearance-none bg-white`}
                    >
                      <option value="">Choose your doctor</option>
                      {doctors.map((d) => (
                        <option key={d.name} value={d.name}>
                          {d.name} — {d.specialty}
                        </option>
                      ))}
                    </select>
                    {errors.doctor && (
                      <p className="text-red-500 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.doctor}
                      </p>
                    )}
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-blue-900 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      min={today}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.date
                          ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
                      } focus:ring-2 transition-all outline-none`}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.date}
                      </p>
                    )}
                  </div>
                </div>

                {/* Time Slot */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-blue-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    Select Time Slot *
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => {
                          setForm((prev) => ({ ...prev, time: slot }));
                          if (errors.time)
                            setErrors((prev) => ({ ...prev, time: undefined }));
                        }}
                        className={`px-2 py-2.5 rounded-lg text-xs font-medium transition-all ${
                          form.time === slot
                            ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                            : "bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-100"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  {errors.time && (
                    <p className="text-red-500 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.time}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-blue-900">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your symptoms or any special requirements..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={isSubmitting ? {} : { scale: 1.02 }}
                  whileTap={isSubmitting ? {} : { scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? "bg-blue-400 text-white/80 cursor-not-allowed"
                      : "bg-blue-600 text-white shadow-blue-200 hover:bg-blue-700"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Booking your appointment...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Confirm Appointment
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

export default BookAppointment;
