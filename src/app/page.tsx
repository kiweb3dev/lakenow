"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LakeNow Transport",
  description:
    "On-demand rides & delivery across Lake of the Ozarks — by land and water.",
  openGraph: {
    title: "LakeNow Transport",
    description:
      "On-demand rides & delivery across Lake of the Ozarks — by land and water.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function Home() {
  const router = useRouter();

  return (
    <main style={styles.main}>
      
      {/* HERO */}
      <section style={styles.hero}>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.45)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          
          <Image
            src="/logo.png"
            alt="LakeNow Logo"
            width={90}
            height={90}
            style={{ marginBottom: "20px" }}
          />

          <h1 style={styles.h1}>LAKENOW TRANSPORT</h1>

          <h2 style={styles.h2}>
            On-Demand Rides & Delivery — By Land & Water
          </h2>

          <p style={styles.subtext}>
            LakeNow is the fastest way to move people, supplies, and essentials
            across the Lake of the Ozarks.
          </p>

          <p style={styles.subtext}>
            From dock to driveway, marina to home, island to town — we get you there.
          </p>

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

      {/* SERVICES */}
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>What We Do</h3>

        <div style={styles.cardGrid}>
          
          <div style={styles.card}>
            <h4>🚤 Water + Land Rideshare</h4>
            <ul>
              <li>Dock-to-dock transport</li>
              <li>Marina pickups & drop-offs</li>
              <li>Local land rides around the lake</li>
              <li>Group & event transportation</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h4>📦 Delivery Service</h4>
            <ul>
              <li>Groceries, drinks & essentials</li>
              <li>Dockside & marina delivery</li>
              <li>Parts, supplies & equipment</li>
              <li>Last-minute lake runs</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h4>⚡ Lake Logistics</h4>
            <ul>
              <li>Fast local response service</li>
              <li>Weekend & seasonal coverage</li>
              <li>Point-to-point transport</li>
              <li>Built for lake life mobility</li>
            </ul>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={styles.sectionAlt}>
        <h3 style={styles.sectionTitle}>How It Works</h3>

        <ol style={styles.steps}>
          <li>Request a ride or delivery</li>
          <li>Get matched with a nearby driver or captain</li>
          <li>Track your trip in real time</li>
          <li>Arrive or receive — fast and simple</li>
        </ol>
      </section>

      {/* FOOTER CTA */}
      <section style={styles.footerCTA}>
        <h3>Built for Lake of the Ozarks</h3>
        <p>
          A local-first transport network designed for both land and water mobility.
        </p>

        <button
          style={styles.primaryButton}
          onClick={() => router.push("/book")}
        >
          Get Started
        </button>
      </section>

    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    fontFamily: "Arial, sans-serif",
    color: "#0f172a",
    lineHeight: 1.5,
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

  h1: {
    fontSize: "42px",
    fontWeight: "800",
    marginBottom: "10px",
    letterSpacing: "1px",
  },

  h2: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "20px",
  },

  subtext: {
    maxWidth: "600px",
    margin: "0 auto 12px auto",
    fontSize: "16px",
    color: "white",
  },

  buttonRow: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
  },

  primaryButton: {
    backgroundColor: "#0284c7",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },

  secondaryButton: {
    backgroundColor: "white",
    color: "#0284c7",
    border: "2px solid #0284c7",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },

  section: {
    padding: "60px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  sectionAlt: {
    padding: "60px 20px",
    backgroundColor: "#f8fafc",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "28px",
    marginBottom: "30px",
    textAlign: "center",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    padding: "20px",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    backgroundColor: "white",
  },

  steps: {
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "left",
    fontSize: "16px",
  },

  footerCTA: {
    padding: "70px 20px",
    textAlign: "center",
    backgroundColor: "#0f172a",
    color: "white",
  },
};