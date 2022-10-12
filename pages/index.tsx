import type { NextPage } from "next";
import Head from "next/head";
import { HeroSection } from "../containers";

const Home: NextPage = () => {
  return (
    <div className="bg-dark">
      <Head>
        <title>ACM PDEU Chapter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;
