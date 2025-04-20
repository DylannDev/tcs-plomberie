import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";

export const metadata: Metadata = {
  title:
    "TCS Plomberie | Dépannage plomberie, chauffage et climatisation à Montpellier",
  description:
    "Plombier-chauffagiste à Montpellier. Intervention rapide 7j/7 pour dépannage plomberie, chauffage et climatisation. Devis gratuit et immédiat.",
  keywords:
    "plombier montpellier, dépannage plomberie, chauffagiste, climatisation, urgence plomberie",
  openGraph: {
    title: "TCS Plomberie | Dépannage plomberie et chauffage à Montpellier",
    description:
      "Plombier-chauffagiste à Montpellier. Intervention rapide 7j/7 pour dépannage plomberie, chauffage et climatisation. Devis gratuit et immédiat.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased relative">
        <Navbar />
        <div className="flex flex-col mx-auto max-w-[1440px] min-h-screen px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
