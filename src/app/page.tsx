"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Delivery",
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

    alert("Request sent! We’re on the way 🚤");

    setForm({
      name: "",
      phone: "",
      service: "Delivery",
      location: "",
      notes: ""
    });
  };

  return (
    <main
      style={{
        padding: 20,
        fontFamily: "Arial",
        maxWidth: 500,
        margin: "0 auto"
      }}
    >
      <h1 style={{ fontSize: 34, marginBottom: 5 }}>LakeNow</h1>

      <p style={{ marginBottom: 10 }}>
        On-demand lake services at Lake of the Ozarks
      </p>

      <p style={{ marginBottom: 20 }}>
        Ice • Food • Captain Service • Dock Delivery
      </p>

      <div style={{ marginBottom: 20 }}>
        <b>Fast lake service</b>
        <p style={{ margin: 0 }}>
          Typical response: 15–45 minutes (during operating hours)
        </p>
      </div>

      <h2>Request Service</h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={update}
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 10,
          fontSize: 16
        }}
      />

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={update}
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 10,
          fontSize: 16
        }}
      />

      <select
        name="service"
        value={form.service}
        onChange={update}
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 10,
          fontSize: 16
        }}
      >
        <option>Delivery</option>
        <option>Captain</option>
        <option>Ride</option>
      </select>

      <input
        name="location"
        placeholder="Dock / Location (MM, Cove, Marina)"
        value={form.location}
        onChange={update}
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 10,
          fontSize: 16
        }}
      />

      <textarea
        name="notes"
        placeholder="What do you need?"
        value={form.notes}
        onChange={update}
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 10,
          fontSize: 16,
          height: 100
        }}
      />

      <button
        onClick={submit}
        style={{
          width: "100%",
          padding: 14,
          background: "#0070f3",
          color: "white",
          border: "none",
          fontSize: 16,
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Submit Request
      </button>
    </main>
  );
}