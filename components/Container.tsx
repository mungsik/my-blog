import Head from "next/head";
import { info } from "../data/information";
import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";

const Container = (props) => {
  const meta = {
    title: info.title,
    description: info.description,
    author: info.author,
    main: info.main,
    ...props.customMeta,
  };

  return (
    <>
      <div className={`w-full flex flex-col items-center p-3`}>
        <Head>
          <title>{meta.title}</title>
          <meta content={meta.description} name="description" />
          <meta property="og:site-name" content={meta.author} />
        </Head>
        <section className="flex flex-col flex-nowrap pt-24 w-full min-h-screen items-center justify-between ">
          <Header />
          <main className="font-SCore_Regular flex flex-col flex-nowrap w-full max-w-screen-md items-center z-10 px-5">
            {props.children}
          </main>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Container;
