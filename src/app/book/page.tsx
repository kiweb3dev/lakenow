"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function BookPage() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function submit() {
    setLoading(true);
    setSuccess(false);

    const { error } = await supabase.from("requests").insert([
      {
        customer_name: customerName,
        phone: phone,
        service_type: "ride",
        location: location,
        notes: notes,
        status: "pending",
      },
    ]);

    setLoading(false);

    if (!error) {
      setSuccess(true);
      setCustomerName("");
      setPhone("");
      setLocation("");
      setNotes("");
    } else {
      alert(error.message);
    }
  }

  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <h1 style={styles.h1}>BOOK A RIDE</h1>

        <div style={styles.form}>
          <input
            placeholder="Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <input
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <button onClick={submit} disabled={loading}>
            {loading ? "Submitting..." : "Request Ride"}
          </button>

          {success && <p>Request sent successfully.</p>}
        </div>
      </section>
    </main>
  );
}