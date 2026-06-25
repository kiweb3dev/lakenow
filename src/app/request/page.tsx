"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RequestPage() {
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
  const { data, error } = await supabase
    .from("requests")
    .insert([
      {
        customer_name: form.name,
        phone: form.phone,
        service_type: form.service,
        location: form.location,
        notes: form.notes,
      },
    ]);

  console.log(data);
  console.log(error);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Request submitted!");
};

  return (
    <main style={{ padding: 40 }}>
      <h1>Request Service</h1>

      <input name="name" placeholder="Name" onChange={update} />
      <br />

      <input name="phone" placeholder="Phone" onChange={update} />
      <br />

      <select name="service" onChange={update}>
        <option>Delivery</option>
        <option>Captain</option>
        <option>Ride</option>
      </select>
      <br />

      <input name="location" placeholder="Dock / Location" onChange={update} />
      <br />

      <textarea name="notes" placeholder="Notes" onChange={update} />
      <br />

      <button onClick={submit}>
        Submit Request
      </button>
    </main>
  );
}