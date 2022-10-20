import { info } from "data/information";
import Image from "next/image";
import social from "./../data/social";

const Footer = () => {
  return (
    <footer className="flex flex-col flex-nowrap items-center mt-[100px] p-8 border-t border-solid border-t-[var(--bg-sub)] w-[calc(100% - calc((100% - 700px)))] md:calc(100% - 40px)">
      <div className="flex flex-wrap items-center">
        <a
          className="mx-1.5"
          href={social.github}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            width="18.0"
            height="18.0"
            objectFit="contain"
            src="/social/github.svg"
            alt="github"
          />
        </a>
        <a
          className="mx-1.5"
          href={social.tistory}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            width="18.0"
            height="18.0"
            objectFit="contain"
            src="/social/tistory.svg"
            alt="github"
          />
        </a>
      </div>
      <span className="font-SCore_Regular text-sm text-[var(--tx-sub)] mt-3">
        {`Copyright © 2022 ${info.author}`}
      </span>
    </footer>
  );
};

export default Footer;
