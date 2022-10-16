import type { NextPage } from "next";
import Head from "next/head";
import { ContactUs, HeroSection, TeamSection } from "../containers";

const Home: NextPage = () => {
  return (
    <div className="bg-dark h-screen w-screen overflow-x-hidden">
      <Head>
        <title>ACM PDEU Chapter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <TeamSection />
        <ContactUs />
      </main>
    </div>
  );
};

export default Home;
