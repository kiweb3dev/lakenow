import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "LakeNow Transport",
    template: "%s | LakeNow Transport"
  },
  description:
    "On-demand rides & delivery for land and water at Lake of the Ozarks",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}