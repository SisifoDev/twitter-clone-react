import Head from "next/head";
import Image from "next/image";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import GitHub from "../components/Icons/GitHub";
import { colors } from "../styles/theme";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <Image src="/devter-logo.png" alt="logo" width={120} height={120} />
          <h1>Devter</h1>
          <h2>
            Talk about development
            <br /> with developers 🙍‍♂️🙍‍♀️
          </h2>
          <div>
            <Button>
              <GitHub width={24} height={24} fill={colors.white} />
              Login with Github
            </Button>
          </div>
        </section>
      </AppLayout>
      <style jsx>{`
        div {
          margin-top: 16px;
        }
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }
        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 16px;
        }
        h2 {
          color: ${colors.secondary};
          font-size: 20px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
