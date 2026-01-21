import "./globals.css";
import Web3Provider from "../components/Web3Provider";

export const metadata = {
  title: "Arcade2",
  description: "Monad Arcade2 MVP"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
