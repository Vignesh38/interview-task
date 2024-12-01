import React from "react";
// import Nav from "../pages/Header";
// import Cardcarousel from "../../components/pages/Carousel";
import CardCarousels from "../pages/Carousel";
export default function Banners() {
    return(
        <div className="container grid grid-cols-1 sm:grid-cols-[50%_50%] gap-4 mx-auto px-4 py-4 justify-between items-center">
            <div>
                <h1 className="text-white font-extrabold text-4xl leading-normal">
                    최고의 실력을 가진<br />
                    외국인 인재를 찾고 계신가요?
                </h1>
                <p className="subheading font-semibold text-2xl my-7 text-white">법률 및 인사관리 부담없이<br />
                1주일 이내에 원격으로 채용해보세요.</p>
                <p className="text-white font-medium text-lg underline cursor-pointer">개발자가 필요하신가요?</p>
                <div className="grid gap-10 grid-cols-1 sm:grid-cols-[33%_33%_33%]">
                    <div className="usp">
                        <h4 className="text-white">Lorem</h4>
                        <p className="text-white">Testttttttt</p>
                    </div>
                    <div className="usp">
                        <h4 className="text-white">Lorem</h4>
                        <p className="text-white">Testttttttt</p>
                    </div>
                    <div className="usp">
                        <h4 className="text-white">Lorem</h4>
                        <p className="text-white">Testttttttt</p>
                    </div>
                </div>
            </div>

        <div>
            <CardCarousels />
        </div>
        </div>
    )
}