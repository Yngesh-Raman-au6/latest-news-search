import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import MainSearch from "../components/MainSearch";

import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter()

  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const handleKeypress = (e) => {
      if (e.key === 'Enter') {
        router.push(`/search?query=${searchQuery}`)
      }
    }
    document.addEventListener("keypress", handleKeypress)
    return () => {
      document.removeEventListener("keypress", handleKeypress)
    }
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Search latest news</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
