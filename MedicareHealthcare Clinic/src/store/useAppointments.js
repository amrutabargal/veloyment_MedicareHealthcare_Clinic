import { useState, useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "medicare_appointments";

function getStoredAppointments() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveAppointments(appointments) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
}

// Simple external store for cross-component reactivity
let appointments = getStoredAppointments();
const listeners = new Set();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return appointments;
}

export function useAppointments() {
  const data = useSyncExternalStore(subscribe, getSnapshot);

  const addAppointment = useCallback((appt) => {
    const newAppt = {
      ...appt,
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };
    appointments = [newAppt, ...appointments];
    saveAppointments(appointments);
    emitChange();
    return newAppt;
  }, []);

  const cancelAppointment = useCallback((id) => {
    appointments = appointments.map((a) =>
      a.id === id ? { ...a, status: "cancelled" } : a
    );
    saveAppointments(appointments);
    emitChange();
  }, []);

  return {
    appointments: data,
    addAppointment,
    cancelAppointment,
    totalCount: data.length,
    confirmedCount: data.filter((a) => a.status === "confirmed").length,
    cancelledCount: data.filter((a) => a.status === "cancelled").length,
  };
}

// Newsletter store
const NEWSLETTER_KEY = "medicare_newsletter";

export function useNewsletter() {
  const [subscribers, setSubscribers] = useState(() => {
    try {
      const data = localStorage.getItem(NEWSLETTER_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  const addSubscriber = useCallback((email) => {
    setSubscribers((prev) => {
      if (prev.includes(email)) return prev;
      const next = [...prev, email];
      localStorage.setItem(NEWSLETTER_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return {
    subscribers,
    addSubscriber,
    isSubscribed: (email) => subscribers.includes(email),
  };
}
