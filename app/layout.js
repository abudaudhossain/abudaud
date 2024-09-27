import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Abu Daud Hossain |Fullstack developer|React developer|Frontend Developer",
  description:
    "A freelance Full Stack Developer with 2 years commercial experience create successful website",
  keywords: [
    "Fullstack developer",
    "Backend developer",
    "Nodejs developer",
    "React developer",
    "Frontend Developer",
  ],
  openGraph: {
    images: "https://avatars.githubusercontent.com/u/73416372?v=4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="modal"></div>

        {children}
      </body>
    </html>
  );
}
