import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next JS App with Tailwind</title>
        <meta
          name="description"
          content="Next JS project with tailwind template"
        />
      </Head>

      <body>
        <main>
          <div className="flex">
            <h1 className="text-4xl font-bold">Daniel</h1>
          </div>
        </main>
      </body>
    </div>
  );
};

export default Home;
