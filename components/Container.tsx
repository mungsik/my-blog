import Head from "next/head";
import metadata from "./../data/metadata";
import Header from "./Header";

const Container = (props) => {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    main: metadata.main,
    ...props.customMeta,
  };

  return (
    <div className={`w-full flex flex-col items-center p-3`}>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site-name" content={meta.author} />
      </Head>
      <section className="flex flex-col flex-nowrap pt-24 w-full min-h-screen items-center justify-between bg-white">
        <Header />
        <main className="flex flex-col flex-nowrap w-full max-w-screen-md items-center z-10 px-5">
          {props.children}
        </main>
      </section>
    </div>
  );
};

export default Container;
