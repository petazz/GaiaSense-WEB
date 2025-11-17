import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GaiaSense - Tu Asistente de IA para Plantas",
  description: "Monitorea tus plantas con inteligencia artificial y conecta con la naturaleza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
