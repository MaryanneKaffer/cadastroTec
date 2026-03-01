import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Cadastro cliente Tec Embalagens",
    template: "%s - Cadastro cliente Tec Embalagens",
  },
  description: "Formulário de cadastro para clientes Tec Embalagens",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Cadastro cliente Tec Embalagens",
    description: "Formulário de cadastro para clientes Tec Embalagens",
    url: "https://cadastro-cliente-tec.vercel.app",
    siteName: "Cadastro Tec",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
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
    <html suppressHydrationWarning lang="pt-BR">
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "white" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
