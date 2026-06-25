"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
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
    const { error } = await supabase.from("requests").insert([
      {
        customer_name: form.name,
        phone: form.phone,
        service_type: form.service,
        location: form.pickup,
        notes: `
Pickup: ${form.pickup}
Destination: ${form.destination}
Passengers/Cargo: ${form.details}
Preferred Time: ${form.time}
        `
      }
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Request submitted. Dispatch team notified.");

    setForm({
      name: "",
      phone: "",
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

        {/* HEADER */}
        <h1 style={styles.title}>LakeNow Transport</h1>

        <p style={styles.subtitle}>
          Fast Water & Land Transportation — On-Demand for Lake Communities
        </p>

        <div style={styles.card}>
          <p style={styles.cardText}>
            On-demand transport for people, cargo & waterfront communities.
            Rapid-response service by water and land across Lake environments.
          </p>
        </div>

        {/* SERVICES */}
        <div style={styles.card}>
          <h3>🚤 Water Transportation</h3>
          <ul>
            <li>Dock-to-dock passenger transport</li>
            <li>Marina shuttle services</li>
            <li>Lakefront transfers</li>
            <li>Event & charter transport</li>
          </ul>

          <h3>🚚 Land Transportation</h3>
          <ul>
            <li>Same-day deliveries</li>
            <li>Cargo & equipment transport</li>
            <li>Marina supply delivery</li>
            <li>Logistics support</li>
          </ul>

          <h3>⚡ Emergency & Priority</h3>
          <p>Rapid-response transport for urgent requests.</p>
        </div>

        {/* WHY */}
        <div style={styles.cardBlue}>
          <b>Why LakeNow Transport?</b>
          <ul>
            <li>Fast dispatch times</li>
            <li>Real-time coordination (manual MVP)</li>
            <li>Water + land coverage</li>
            <li>Professional operators</li>
            <li>24/7 availability (pilot phase)</li>
          </ul>
        </div>

        {/* HOW IT WORKS */}
        <div style={styles.card}>
          <h3>How It Works</h3>
          <p>1. Submit your request</p>
          <p>2. We review instantly</p>
          <p>3. Nearest operator assigned</p>
          <p>4. Transport is dispatched</p>
          <p>5. Completion confirmed</p>
        </div>

        {/* FORM HEADER */}
        <h2 style={{ marginTop: 20 }}>Book Transport</h2>

        {/* FORM */}
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={update}
          style={styles.input}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
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
          placeholder="Pickup Location (Dock / Address / Marina)"
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
          placeholder="Preferred Time (Now / ASAP / Scheduled)"
          value={form.time}
          onChange={update}
          style={styles.input}
        />

        <textarea
          name="details"
          placeholder="Passengers, cargo, or special instructions"
          value={form.details}
          onChange={update}
          style={{ ...styles.input, height: 100 }}
        />

        <button onClick={submit} style={styles.button}>
          Book Transport
        </button>

        {/* FOOTER */}
        <div style={styles.footer}>
          <p><b>LakeNow Transport</b></p>
          <p>Fast. Reliable. On Demand. By Water. By Land.</p>
        </div>

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
  card: {
    background: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
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
  },
  footer: {
    marginTop: 30,
    textAlign: "center",
    color: "#777",
    fontSize: 14
  }
};