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
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>LakeNow</h1>
      <p>On-demand lake services at Lake of the Ozarks</p>

      <h2>Request Service</h2>

      <input name="name" placeholder="Name" value={form.name} onChange={update} />
      <br />

      <input name="phone" placeholder="Phone" value={form.phone} onChange={update} />
      <br />

      <select name="service" value={form.service} onChange={update}>
        <option>Delivery</option>
        <option>Captain</option>
        <option>Ride</option>
      </select>
      <br />

      <input name="location" placeholder="Dock / Location" value={form.location} onChange={update} />
      <br />

      <textarea name="notes" placeholder="Notes" value={form.notes} onChange={update} />
      <br />

      <button onClick={submit}>Submit Request</button>
    </main>
  );
}