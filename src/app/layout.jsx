import "./globals.scss";

export const metadata = {
  title: "Dipak Majumdar",
  description: "Software Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}