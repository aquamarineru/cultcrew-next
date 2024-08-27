import { Murecho } from "next/font/google";
import "../styles/globals.scss";
import Header from "../app/components/header/Header";
import Footer from "../app/components/footer/Footer";

const murecho = Murecho({ 
  subsets: ["latin"],
  weights: [400, 700],
  display: "swap",
 });

export const metadata = {
  title: "CULTcrew Sicherheitsdienst",
  description: "CULTcrew Sicherheitsdienst, Separatdienst, Türsteher, Doormen, Garderobe, Garderobendienst,  Garderobenverleih, Garderobenausstattung, Security, Sicherheitsdienst, Wachschutz, Veranstaltungsschutz, Zutrittskontrolle, Werkschutz, Objektschutz, Mobile Einsatzzentrale, Absperrgitter Verleih, Mietbüro",
  image: "/public/logo.png",
  url: "https://cultcrew.vercel.app",
  type: "website",
  siteName: "CULTcrew Sicherheitsdienst",
  locale: "de_DE",
  twitterUsername: "@cultcrew",
  facebookAppId: "123456789",
  twitterCard: "summary_large_image",
  twitterImage: "/public/logo.png",
  twitterSite: "@cultcrew",
  twitterCreator: "@cultcrew",
  twitterTitle: "CULTcrew Sicherheitsdienst",
  twitterDescription: "CULTcrew Sicherheitsdienst, Separatdienst, Türsteher, Doormen, Garderobe, Garderobendienst,  Garderobenverleih, Garderobenausstattung, Security, Sicherheitsdienst, Wachschutz, Veranstaltungsschutz, Zutrittskontrolle, Werkschutz, Objektschutz, Mobile Einsatzzentrale, Absperrgitter Verleih, Mietbüro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      
      <body className={murecho.className}>
        <Header />
          {children}
        <Footer />
        </body>
      
    </html>
  );
}
