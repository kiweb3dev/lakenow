"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [requests, setRequests] = useState<any[]>([]);

  const load = async () => {
    const { data } = await supabase
      .from("requests")
      .select("*")
      .order("created_at", { ascending: false });

    setRequests(data || []);
  };

useEffect(() => {
  load();

  const interval = setInterval(() => {
    load();
  }, 5000); // refresh every 5 seconds

  return () => clearInterval(interval);
}, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>LakeNow Admin</h1>

      <div style={{ marginTop: 20 }}>
        {requests.map((r) => (
          <div key={r.id} style={{ border: "1px solid #ccc", marginBottom: 10, padding: 10 }}>
            <p><b>{r.customer_name}</b></p>
            <p>{r.phone}</p>
            <p>{r.service_type}</p>
            <p>{r.location}</p>
            <p>{r.notes}</p>
            <p>Status: {r.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}