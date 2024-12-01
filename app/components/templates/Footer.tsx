export default function Footer(){
    return(
        <div className="footer container overflow-hidden py-20">
            <div className="container grid grid-cols-1 sm:grid-cols-[30%_70%] gap-10 px-4">
                <div className="info">
                    <img src="logo/footer_logo.svg" className="mb-5" alt="" />
                    <p className="text-base text-footerText font-extrabold">우리는 국가의 장벽을 <br />넘어 최고의 인재를 매칭해드립니다.</p>
                    <a href="tel:+010-0000-0000" className="flex mt-4 font-black text-sm text-footerCta">010-0000-0000</a>
                    <a href="mailto:aaaaa@naver.com" className=" flex mt-4 font-black ext-sm text-footerCta">aaaaa@naver.com</a>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-[25%_25%_25%_25%]">
                    <div className="foot pt-4">
                        <img src="icons/foot-1.svg" className="mb-3"/>
                        <p className="font-black text-sm text-footerText">해외 개발자 원격 채용</p>
                        <button className="footer-cta text-footerCta flex mt-3">
                        바로가기 <img src="icons/footer-cta.svg" />
                        </button>
                    </div>
                    <div className="foot pt-4">
                        <img src="icons/foot-2.svg" className="mb-3"/>
                        <p className="font-black text-sm footerText">외국인 원격 채용 (비개발)</p>
                        <button className="footer-cta footerCta flex mt-3">
                        바로가기 <img src="icons/footer-cta.svg" />
                        </button>
                    </div>
                    <div className="foot pt-4">
                        <img src="icons/foot-3.svg" className="mb-3"/>
                        <p className="font-black text-sm footerText">한국어 가능 외국인 채용</p>
                        <button className="footer-cta footerCta flex mt-3">
                        바로가기 <img src="icons/footer-cta.svg" />
                        </button>
                    </div>
                    <div className="foot pt-4">
                        <img src="icons/foot-4.svg" className="mb-3"/>
                        <p className="font-black text-sm footerText">해외 개발자 활용 서비스</p>
                        <button className="footer-cta footerCta flex mt-3">
                        바로가기 <img src="icons/footer-cta.svg" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="container px-4">
                <div className="grid grid-cols-1 sm:grid-cols-[30%_15%_55%] gap-10 mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-[70%_30%] gap-4 mt-4">
                    <div>
                        <p className="font-black text-sm text-footerText mb-2">상호명</p>
                        <p className="text-base text-footerCta">하이퍼하이어</p>
                        <a href="#" className="flex mt-2 font-black text-sm text-footerCta">Hyperhire India Private Limited</a>
                    </div>
                    <div>
                        <p className="font-black text-sm text-footerText mb-2">대표 CEO</p>
                        <p className="text-base text-footerCta">김주현</p>
                        <p className="mt-2 font-black text-sm text-footerCta">Juhyun Kim</p>
                    </div>
                </div>
                <div className="foot pt-4">
                        <p className="font-black text-sm text-footerText mb-2">사업자등록번호 CIN</p>
                        <a href="tel:427-86-01187" className="flex font-black text-sm text-footerCta">427-86-01187</a>
                        <p className="mt-2 font-black text-sm text-footerCta">U74110DL2016PTC290812 </p>
                    
                </div>
                <div className="foot pt-4">
                <p className="font-black text-sm text-footerText mb-2">주소 ADDRESS</p>
                <p className="text-base text-footerCta">서울특별시 강남대로 479, 지하 1층 238호 </p>
                        <p className="mt-2 font-black text-sm text-footerCta">D-138, Street number 11, Jagjeet Nagar, North East Delhi,<br />New Delhi, 
                        110053 India </p>
                </div>
                </div>
            </div>
            <div className="container font-black text-sm text-footerCta px-4 pt-9">
            ⓒ 2023 Hyperhire
            </div>
        </div>
    )
};