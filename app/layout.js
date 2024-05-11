import "./globals.css";
import toast, { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "Guess-userDetails 🔥",
  description: "App to guess user details",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#1F1F1F]">
        <div className="h-[100vh]">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
