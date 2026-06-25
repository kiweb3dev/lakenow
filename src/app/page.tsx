"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "On-Demand Transport",
    location: "",
    notes: ""
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
        location: form.location,
        notes: form.notes
      }
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Request received — nearest driver/captain will respond 🚤");

    setForm({
      name: "",
      phone: "",
      service: "On-Demand Transport",
      location: "",
      notes: ""
    });
  };

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        
        {/* HEADER */}
        <h1 style={styles.title}>LakeNow</h1>

        <p style={styles.subtitle}>
          Lake of the Ozarks On-demand rides & delivery services
        </p>

        {/* HOW IT WORKS */}
        <div style={styles.cardBlue}>
          <p style={styles.cardTitle}>How it works</p>
          <p style={styles.cardText}>
            Request a ride, delivery, or transport service. We dispatch the nearest available driver or captain.
            <br /><br />
            Works across <b>land vehicles</b> and <b>watercraft</b> at Lake of the Ozarks.
          </p>
        </div>

        {/* SERVICES */}
        <div style={styles.card}>
          <p style={styles.cardTitle}>Services</p>
          <p style={styles.cardText}>
            • On-demand rides (land transport)<br/>
            • Boat & water transport<br/>
            • Dock-to-dock pickup & drop-off<br/>
            • Food, ice & supply delivery<br/>
            • Emergency lake transport requests
          </p>
        </div>

        {/* STATUS */}
        <div style={styles.cardGrey}>
          <b>Fast dispatch system</b>
          <p style={{ margin: 0 }}>
            Typical response time: 15–45 minutes (depending on demand)
          </p>
        </div>

        {/* FORM */}
        <h2 style={{ marginTop: 20 }}>Request Transport</h2>

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={update}
          style={styles.input}
        />

        <input
          name="phone"
          placeholder="Phone"
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
          <option>On-Demand Transport</option>
          <option>Land Ride (Car)</option>
          <option>Water Transport (Boat)</option>
          <option>Dock-to-Dock Ride</option>
          <option>Delivery (Food / Supplies)</option>
        </select>

        <input
          name="location"
          placeholder="Pickup / Dock / Marina Location"
          value={form.location}
          onChange={update}
          style={styles.input}
        />

        <textarea
          name="notes"
          placeholder="What do you need transported?"
          value={form.notes}
          onChange={update}
          style={{ ...styles.input, height: 100 }}
        />

        <button onClick={submit} style={styles.button}>
          Request Transport
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
    maxWidth: 520,
    margin: "0 auto",
    padding: 20
  },
  title: {
    fontSize: 34,
    marginBottom: 5,
    color: "#111"
  },
  subtitle: {
    color: "#555",
    marginBottom: 20,
    fontSize: 15
  },
  card: {
    background: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  cardGrey: {
    background: "#eeeeee",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  cardBlue: {
    background: "#e3f2fd",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderLeft: "5px solid #1E88E5"
  },
  cardTitle: {
    fontWeight: "bold",
    marginBottom: 5
  },
  cardText: {
    margin: 0,
    color: "#444"
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    border: "1px solid #ddd",
    borderRadius: 6
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
  }
};