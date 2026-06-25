"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <div style={styles.overlay} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <Image src="/logo.png" alt="logo" width={90} height={90} />

          <h1 style={styles.h1}>LAKENOW TRANSPORT</h1>

          <div style={styles.buttonRow}>
            <button
              style={styles.primaryButton}
              onClick={() => router.push("/book")}
            >
              Book a Ride
            </button>

            <button
              style={styles.secondaryButton}
              onClick={() => router.push("/delivery")}
            >
              Request Delivery
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}