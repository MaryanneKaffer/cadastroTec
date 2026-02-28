import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import App from "./page";

export const metadata: Metadata = {
  title: {
    default: "Cadastro cliente Tec Embalagens",
    template: "%s - Cadastro cliente Tec Embalagens",
  },
  description: "Formulário de cadastro para clientes Tec Embalagens",
  icons: {
    icon: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "white" },],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "white" }}>
          <App />
        </Providers>
      </body>
    </html>
  );
}
