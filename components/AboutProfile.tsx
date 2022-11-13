import Image from "next/image";

const AboutProfile = () => {
  return (
    <section className={`flex flex-wrap w-full items-start justify-center`}>
      <Image
        src="/about/myself.jpg"
        className="rounded-lg"
        alt="내 사진"
        width={300.0}
        height={300.0}
        objectFit="cover"
      />
      <div
        className={`min-w-[100px] max-w-[400px] px-5 break-words leading-6 mt-5 md:mt-0`}
      >
        <span>프론트엔드 취업을 준비하고 있습니다.</span>
        <br />
        <br />
        <span>
          처음 프로그래밍에 대해 배우기 시작했을 땐, 막연하게 FE를
          희망했었습니다.{" "}
        </span>
        <span>
          '다른 프로그래밍 분야는 컴퓨터 공학과를 졸업해야 잘 할 수
          있을거야..'라는 생각을 갖고 있었기 때문입니다.{" "}
        </span>
        <span>
          그러나 프로그래밍에 대해 점점 더 깊이 알아가게 되고, 스스로 풀스텍
          프로젝트를 진행해 보니 점점 더 프론트엔드에 대한 관심이 깊어졌고,
          사용자 친화적인 UI를 만들고 싶다는 욕심이 생겼습니다. UI는 유저가
          느끼는 회사에 대한 <span className="font-bold">첫인상</span>
          이라고 생각하기 때문입니다.
        </span>
        <br />
        <br />
        <span>
          시간이 흘러 프로그래밍 세계에 자리를 잡았을 때 데이터베이스 구축부터
          UI/UX 디자인 및 배포까지 스스로 할 줄 아는 개발자게 되는게 목표입니다.
        </span>
        {/* <span>데이터 분야 취업을 준비하고 있습니다.</span>
        <br />
        <br />
        <span>
          처음 프로그래밍에 대해 배우기 시작했을 땐, 막연히 FE를 희망했었습니다.{" "}
        </span>
        <span>
          '다른 프로그래밍 분야는 컴퓨터 공학과를 졸업해야 잘 할 수
          있을거야..'라는 생각을 갖고 있었기 때문입니다.{" "}
        </span>
        <span>
          그러나 프로그래밍에 대해 점점 더 깊이 알아가게 되고, 스스로 풀스텍
          프로젝트를 진행해 보니 데이터 분야가 너무 재밌게 다가왔고 제대로
          공부해 보고 싶어졌습니다.
        </span>
        <br />
        <br />
        <span>
          제가 분석하는 데이터를 바탕으로, 그 데이터가 갖는 의미가 무엇인지
          그리고 이를 토대로 가치를 창출해 내는 개발자가 되고 싶습니다.
        </span> */}
      </div>
    </section>
  );
};

export default AboutProfile;
