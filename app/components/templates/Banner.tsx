import React from "react";
import SpeechBubble from "../atoms/SpeechBubble/Speechbubble";
import { FadeInUpWrapper } from "../atoms/animation/FadeInUpComponent";
import { FadeInWrapper } from "../atoms/animation/FadeInComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../globals.css";
import CenterMode from "../molecules/CenterMode"

export default function Banners() {
    return(
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto px-4 py-4 justify-between items-center">
            <div>
            <div className="mb-4"><FadeInWrapper><SpeechBubble
  text={['', ' 풀타임, 파트타임']}
  colors={['#00C696', '#40E2E8']}
/>
</FadeInWrapper></div>
            <FadeInUpWrapper>
                <h1 className="text-white font-extrabold text-4xl leading-normal">
                    최고의 실력을 가진<br />
                    외국인 인재를 찾고 계신가요?
                </h1>
                </FadeInUpWrapper>
                <FadeInUpWrapper>
                <p className="subheading font-semibold text-2xl my-7 text-white">법률 및 인사관리 부담없이<br />
                1주일 이내에 원격으로 채용해보세요.</p>
                </FadeInUpWrapper>
                <FadeInUpWrapper><p className="text-white font-medium text-lg underline cursor-pointer hidden sm:block">개발자가 필요하신가요?</p>
                </FadeInUpWrapper>
                <div className="hidden sm:block">
                <div className="mt-9 grid gap-4 grid-cols-1 sm:grid-cols-[33%_33%_33%] ">
                    <FadeInUpWrapper>
                    <div className="usp">
                        <div className="line w-4/6 border-t border-white mb-3"></div>
                        <h4 className="text-white font-black text-lg">평균 월 120만원</h4>
                        <p className="text-white">임금을 해당 국가를 기준으로 계산합니다.</p>
                    </div>
                    </FadeInUpWrapper>

                    <FadeInUpWrapper>
                    <div className="usp">
                    <div className="line w-4/6 border-t border-white mb-3"></div>
                        <h4 className="text-white font-black text-lg">최대 3회 인력교체</h4>
                        <p className="text-white">막상 채용해보니 맞지 않아도 걱정하지 마세요. </p>
                    </div>
                    </FadeInUpWrapper>

                    <FadeInUpWrapper>
                    <div className="usp">
                        <div className="line w-4/6 border-t border-white mb-3"></div>
                        <h4 className="text-white font-black text-lg">평균 3일, 최대 10일</h4>
                        <p className="text-white">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
                    </div>
                    </FadeInUpWrapper>
                </div>
                </div>
            </div>

        <div className="md:px-0 px-5">
        <FadeInUpWrapper><CenterMode /></FadeInUpWrapper>
            {/* <ProfileCarousel /> */}
        </div>
        </div>
    )
}