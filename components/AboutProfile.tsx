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
        className={`font-SCore_Regular min-w-[100px] max-w-[400px] px-5 break-words leading-6 mt-5 md:mt-0`}
      >
        <span>데이터 분석을 희망하는 취업 준비생입니다.</span>
        <br />
        <br />
        <span>DART 공시를 실시간으로 알려주는 프로젝트를 혼자 진행하다가 </span>
        <span>
          데이터 분석에 흥미를 붙이게 되었고 진로를 데이터 분야로 정하게
          되었습니다.
        </span>
      </div>
    </section>
  );
};

export default AboutProfile;
