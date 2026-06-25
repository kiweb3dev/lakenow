"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    destination: "",
    service: "Water Transportation",
    details: "",
    time: ""
  });

  const update = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    // ✅ VALIDATION (required fields)
    if (!form.name || !form.phone || !form.pickup) {
      alert("Name, Phone, and Pickup Location are required.");
      return;
    }

    const { error } = await supabase.from("requests").insert([
      {
        customer_name: form.name,
        phone: form.phone,
        email: form.email || null, // optional
        service_type: form.service,
        location: form.pickup,
        notes: `
Pickup: ${form.pickup}
Destination: ${form.destination}
Email: ${form.email}
Details: ${form.details}
Preferred Time: ${form.time}
        `
      }
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Request sent! LakeNow dispatch notified 🚤");

    setForm({
      name: "",
      phone: "",
      email: "",
      pickup: "",
      destination: "",
      service: "Water Transportation",
      details: "",
      time: ""
    });
  };

  return (
    <main style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.title}>LakeNow Transport</h1>

        <p style={styles.subtitle}>
          On-demand rides & delivery for land and water at Lake of the Ozarks
        </p>

        {/* INFO */}
        <div style={styles.cardBlue}>
          <b>How it works</b>
          <p>
            Request a ride, delivery, or transport. We dispatch the nearest available operator.
          </p>
        </div>

        {/* FORM */}
        <h2>Book Transport</h2>

        <input
          name="name"
          placeholder="Full Name *"
          value={form.name}
          onChange={update}
          style={styles.input}
        />

        <input
          name="phone"
          placeholder="Phone Number *"
          value={form.phone}
          onChange={update}
          style={styles.input}
        />

        <input
          name="email"
          placeholder="Email (optional)"
          value={form.email}
          onChange={update}
          style={styles.input}
        />

        <select
          name="service"
          value={form.service}
          onChange={update}
          style={styles.input}
        >
          <option>Water Transportation</option>
          <option>Land Transportation</option>
          <option>Dock-to-Dock Service</option>
          <option>Emergency Transport</option>
        </select>

        <input
          name="pickup"
          placeholder="Pickup Location *"
          value={form.pickup}
          onChange={update}
          style={styles.input}
        />

        <input
          name="destination"
          placeholder="Destination"
          value={form.destination}
          onChange={update}
          style={styles.input}
        />

        <input
          name="time"
          placeholder="Preferred Time (ASAP / Scheduled)"
          value={form.time}
          onChange={update}
          style={styles.input}
        />

        <textarea
          name="details"
          placeholder="Passengers / cargo / instructions"
          value={form.details}
          onChange={update}
          style={{ ...styles.input, height: 100 }}
        />

        <button onClick={submit} style={styles.button}>
          Book Transport
        </button>

      </div>
    </main>
  );
}

/* ===== STYLES ===== */

const styles: any = {
  page: {
    background: "#ffffff",
    minHeight: "100vh",
    fontFamily: "Arial",
    color: "#111"
  },
  container: {
    maxWidth: 600,
    margin: "0 auto",
    padding: 20
  },
  title: {
    fontSize: 34,
    fontWeight: "bold"
  },
  subtitle: {
    color: "#555",
    marginBottom: 20
  },
  cardBlue: {
    background: "#e3f2fd",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderLeft: "5px solid #1E88E5"
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 10,
    border: "1px solid #ddd",
    borderRadius: 6,
    fontSize: 16
  },
  button: {
    width: "100%",
    padding: 14,
    background: "#1E88E5",
    color: "white",
    border: "none",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 6
  }
};