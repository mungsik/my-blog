import Image from "next/image";

const AboutProfile = () => {
  return (
    <section className={`flex flex-wrap w-full items-start justify-center`}>
      <Image
        src="/about/about.jpg"
        className="rounded-lg"
        alt="침착맨"
        width={300.0}
        height={300.0}
        objectFit="cover"
      />
      <div
        className={`min-w-[100px] max-w-[400px] px-5 break-words leading-6 mt-5 md:mt-0`}
      >
        <span>데이터 분석을 희망하는 취업 준비생입니다.</span>
      </div>
    </section>
  );
};

export default AboutProfile;
