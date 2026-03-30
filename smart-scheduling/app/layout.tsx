import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Scheduling",
  description: "Sistema de agendamento online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}