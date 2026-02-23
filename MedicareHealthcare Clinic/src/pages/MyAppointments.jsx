import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Clock,
  User,
  Stethoscope,
  XCircle,
  CheckCircle,
  AlertTriangle,
  CalendarCheck,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  ClipboardList,
  ArrowRight,
  Search,
  Filter,
} from "lucide-react";
import { useAppointments } from "../store/useAppointments.js";
import { toast } from "sonner";

function StatusBadge({ status }) {
  const config = {
    confirmed: {
      color: "bg-green-100 text-green-700",
      icon: <CheckCircle className="w-3.5 h-3.5" />,
      label: "Confirmed",
    },
    pending: {
      color: "bg-yellow-100 text-yellow-700",
      icon: <Clock className="w-3.5 h-3.5" />,
      label: "Pending",
    },
    cancelled: {
      color: "bg-red-100 text-red-700",
      icon: <XCircle className="w-3.5 h-3.5" />,
      label: "Cancelled",
    },
  };
  const c = config[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${c.color}`}
    >
      {c.icon} {c.label}
    </span>
  );
}

function MyAppointments() {
  const { appointments, cancelAppointment, totalCount, confirmedCount, cancelledCount } =
    useAppointments();
  const [cancellingId, setCancellingId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const handleCancel = (id, name) => {
    setCancellingId(id);
    setTimeout(() => {
      cancelAppointment(id);
      setCancellingId(null);
      toast.info(`Appointment for ${name} has been cancelled`);
    }, 600);
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatCreatedAt = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Filtered appointments
  const filtered = appointments.filter((appt) => {
    const matchSearch =
      !searchQuery ||
      appt.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appt.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appt.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appt.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchFilter =
      filterStatus === "all" || appt.status === filterStatus;

    return matchSearch && matchFilter;
  });

  /* ─── EMPTY STATE ─── */
  if (appointments.length === 0) {
    return (
      <div>
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
                My Appointments
              </h1>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                View and manage all your booked appointments in one place.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-md mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CalendarCheck className="w-10 h-10 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                No Appointments Yet
              </h3>
              <p className="text-gray-500 mb-8">
                You haven't booked any appointments yet. Schedule your first
                visit with our specialists today!
              </p>
              <Link to="/book-appointment">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
                >
                  Book Your First Appointment{" "}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  /* ─── APPOINTMENTS LIST ─── */
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              My Appointments
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              View and manage all your booked appointments
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="bg-white/10 backdrop-blur px-5 py-2.5 rounded-full">
                <span className="text-sm font-semibold text-white">
                  Total: {totalCount}
                </span>
              </div>
              <div className="bg-green-500/20 backdrop-blur px-5 py-2.5 rounded-full">
                <span className="text-sm font-semibold text-green-200">
                  Confirmed: {confirmedCount}
                </span>
              </div>
              <div className="bg-red-500/20 backdrop-blur px-5 py-2.5 rounded-full">
                <span className="text-sm font-semibold text-red-200">
                  Cancelled: {cancelledCount}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter + List */}
      <section className="py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, doctor, service, or email..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-11 pr-8 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none bg-white font-medium"
              >
                <option value="all">All Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-500 mb-4">
            Showing {filtered.length} of {appointments.length} appointments
          </p>

          {/* Appointments Cards */}
          {filtered.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-2xl">
              <ClipboardList className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 font-medium">
                No appointments match your search
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((appt, index) => (
                  <motion.div
                    key={appt.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{
                      opacity: cancellingId === appt.id ? 0.5 : 1,
                      y: 0,
                    }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ delay: index * 0.03 }}
                    className={`bg-white rounded-2xl shadow-md border transition-all hover:shadow-lg ${
                      appt.status === "cancelled"
                        ? "border-red-100 opacity-75"
                        : "border-gray-100"
                    }`}
                  >
                    {/* Main Row */}
                    <div
                      className="p-5 cursor-pointer"
                      onClick={() =>
                        setExpandedId(
                          expandedId === appt.id ? null : appt.id
                        )
                      }
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                            <User className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-blue-900">
                              {appt.fullName}
                            </h4>
                            <p className="text-xs text-gray-400">
                              Booked: {formatCreatedAt(appt.createdAt)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <StatusBadge status={appt.status} />
                          {expandedId === appt.id ? (
                            <ChevronUp className="w-4 h-4 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-3 py-2">
                          <Calendar className="w-3.5 h-3.5 text-blue-500" />
                          <span className="text-xs text-gray-700 font-medium">
                            {formatDate(appt.date)}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-3 py-2">
                          <Clock className="w-3.5 h-3.5 text-teal-500" />
                          <span className="text-xs text-gray-700 font-medium">
                            {appt.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-3 py-2">
                          <Stethoscope className="w-3.5 h-3.5 text-purple-500" />
                          <span className="text-xs text-gray-700 font-medium truncate">
                            {appt.doctor}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-3 py-2">
                          <ClipboardList className="w-3.5 h-3.5 text-orange-500" />
                          <span className="text-xs text-gray-700 font-medium truncate">
                            {appt.service}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {expandedId === appt.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-0 border-t border-gray-100">
                            <div className="grid sm:grid-cols-2 gap-4 mt-4">
                              <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                  <Mail className="w-4 h-4 text-gray-400" />
                                  <span className="text-sm text-gray-600">
                                    {appt.email}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Phone className="w-4 h-4 text-gray-400" />
                                  <span className="text-sm text-gray-600">
                                    {appt.phone}
                                  </span>
                                </div>
                              </div>
                              <div>
                                {appt.message ? (
                                  <div className="bg-gray-50 rounded-lg p-3">
                                    <p className="text-xs text-gray-500 font-semibold mb-1">
                                      Patient Notes:
                                    </p>
                                    <p className="text-sm text-gray-600 italic">
                                      &ldquo;{appt.message}&rdquo;
                                    </p>
                                  </div>
                                ) : (
                                  <p className="text-sm text-gray-400 italic">
                                    No additional notes provided
                                  </p>
                                )}
                              </div>
                            </div>

                            {appt.status === "confirmed" && (
                              <div className="mt-4 flex gap-3">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleCancel(appt.id, appt.fullName);
                                  }}
                                  disabled={cancellingId === appt.id}
                                  className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700 font-medium transition-colors bg-red-50 px-4 py-2 rounded-lg hover:bg-red-100"
                                >
                                  <AlertTriangle className="w-4 h-4" />
                                  {cancellingId === appt.id
                                    ? "Cancelling..."
                                    : "Cancel Appointment"}
                                </button>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Book More CTA */}
          <div className="text-center mt-10">
            <Link to="/book-appointment">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
              >
                <CalendarCheck className="w-5 h-5" />
                Book New Appointment
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyAppointments;
