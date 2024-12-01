export default function BannerUsp() {
    return(
        <div>
            <div className="container grid grid-cols-[35%_65%] gap-4 px-4 justify-start items-start">
                <div className="busp flex flex-row justify-start items-center gap-3">
                    <img src="icons/tick.svg" />
                    <p className="text-base text-white font-black">한국어 능력</p>
                </div>
                <div className="busp flex flex-row justify-start items-center gap-3">
                    <img src="icons/tick.svg" />
                    <p className="text-base text-white font-black">업무 수행 능력</p>
                </div>
                <div className="busp flex flex-row justify-start items-center gap-3">
                    <img src="icons/tick.svg" />
                    <p className="text-base text-white font-black">겸업 여부</p>
                </div>
                <div className="busp flex flex-row justify-start items-center gap-3">
                    <img src="icons/tick.svg" />
                    <p className="text-base text-white font-black">평판 조회</p>
                </div>
            </div>
            <div className="container px-4 mt-3 flex pt-6 pb-20">
                <a href="/" className="text-yellow-400 underline font-black text-base">개발자가 필요하신가요?</a>
            </div>
        </div>
    );
};