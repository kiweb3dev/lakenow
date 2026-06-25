"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DeliveryPage() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [item, setItem] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function submit() {
    setLoading(true);
    setSuccess(false);

    const { error } = await supabase.from("requests").insert([
      {
        type: "delivery",
        pickup_location: pickup,
        dropoff_location: dropoff,
        details: item,
      },
    ]);

    setLoading(false);

    if (!error) {
      setSuccess(true);
      setPickup("");
      setDropoff("");
      setItem("");
    } else {
      alert(error.message);
    }
  }

  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <h1 style={styles.h1}>REQUEST DELIVERY</h1>

        <p style={styles.subtext}>
          Fast dockside and lakeside delivery for groceries, supplies, and essentials.
        </p>

        <div style={styles.form}>
          <input
            style={styles.input}
            placeholder="Pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />

          <input
            style={styles.input}
            placeholder="Delivery location"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />

          <input
            style={styles.input}
            placeholder="What do you need delivered?"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />

          <button style={styles.button} onClick={submit} disabled={loading}>
            {loading ? "Submitting..." : "Request Delivery"}
          </button>

          {success && (
            <p style={{ marginTop: "10px", color: "lightgreen" }}>
              Request sent successfully.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    fontFamily: "Arial, sans-serif",
    color: "#0f172a",
  },
  hero: {
    padding: "80px 20px",
    textAlign: "center",
    backgroundImage: "url('/lake-hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color: "white",
  },
  h1: { fontSize: "40px", fontWeight: "800", marginBottom: "10px" },
  subtext: { maxWidth: "600px", margin: "0 auto 30px auto", fontSize: "16px" },
  form: {
    maxWidth: "400px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#0284c7",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
  },
};