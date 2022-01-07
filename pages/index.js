import Head from "next/head";
import Image from "next/image";
import AppLayout from "../components/AppLayout";
import { colors } from "../styles/theme";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <h1>Devter</h1>
      </AppLayout>
      <style jsx>{`
        h1 {
        }
      `}</style>
    </>
  );
}
