import AuthProvider from './components/AuthProvider';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Investify",
  description: "The best investment tracking application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <div className='m-2'>{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
