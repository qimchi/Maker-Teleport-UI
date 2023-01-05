import "../styles/globals.css";

import { Inter } from "@next/font/google";

const inter = Inter({ weight: "400", subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
