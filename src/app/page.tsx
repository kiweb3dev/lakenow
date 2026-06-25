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
    if (!form.name || !form.phone || !form.pickup) {
      alert("Name, Phone, and Pickup Location are required.");
      return;
    }

    const { error } = await supabase.from("requests").insert([
      {
        customer_name: form.name,
        phone: form.phone,
        email: form.email || null,
        service_type: form.service,
        location: form.pickup,
        notes: `
Pickup: ${form.pickup}
Destination: ${form.destination}
Time: ${form.time}
Details: ${form.details}
Email: ${form.email}
        `
      }
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Request sent 🚤 LakeNow dispatch notified.");

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

        {/* HEADER */}
        <h1 style={styles.title}>LakeNow Transport</h1>

        <p style={styles.subtitle}>
          On-demand rides & delivery for land and water at Lake of the Ozarks
        </p>

        {/* HOW IT WORKS */}
        <div style={styles.cardBlue}>
          <b>How it works</b>
          <p style={{ margin: 0 }}>
            Submit a request → We dispatch the nearest operator → Ride or delivery completed in real time.
          </p>
        </div>

        {/* PRICING */}
        <div style={styles.card}>
          <b>Estimated Pricing (before dispatch)</b>
          <p style={{ margin: 0 }}>
            Dock Ride: $25–$75<br />
            Lake Delivery (Food / Supplies): $20–$60<br />
            Shore Ride: $15–$50<br />
            Captain Service: $75–$200+<br />
            Emergency Runs: varies by distance
          </p>
        </div>

        {/* TRUST */}
        <div style={styles.cardBlue}>
          <b>Important</b>
          <p style={{ margin: 0 }}>
            All pricing is confirmed before dispatch. Services are fulfilled manually by LakeNow operators in real time.
          </p>
        </div>

        {/* FORM TITLE */}
        <h2 style={{ marginTop: 20 }}>Send Lake Request 🚤</h2>

        {/* FORM */}
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
          placeholder="Passengers / cargo / special instructions"
          value={form.details}
          onChange={update}
          style={{ ...styles.input, height: 100 }}
        />

        {/* CTA */}
        <button onClick={submit} style={styles.button}>
          Send Lake Request 🚤
        </button>

        {/* FOOTER */}
        <div style={styles.footer}>
          LakeNow Transport — Fast. Reliable. On Demand.
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
    borderRadius: 6,
    cursor: "pointer"
  },
  footer: {
    marginTop: 30,
    textAlign: "center",
    color: "#777",
    fontSize: 14
  }
};