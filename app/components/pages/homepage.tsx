// import { FadeInUpWrapper } from "../atoms/animation/FadeInUpComponent";
import Nav from "../templates/Header";
import EmblaSlides from "../organisms/Slide";
import Banners from "../templates/Banner";
import Footer from "../templates/Footer"
import BannerUsp from "../organisms/BannerMobileUsp"
import { FadeInUpWrapper } from "../atoms/animation/FadeInUpComponent";


// import { fadeInUp, SlideUp } from "./atoms/animation/animation"

export default function HomePage() {
  return (
    <div>
        
        <div className="header bg-banner bg-no-repeat bg-cover overflow-hidden">
          <div className="container">
        <Nav />
            <Banners />
            
          </div>
          <div className="w-full overflow-hidden hidden sm:block">
            <FadeInUpWrapper>
                <EmblaSlides />
            </FadeInUpWrapper>
          </div>
          <div className="w-full overflow-hidden block sm:hidden">
            <FadeInUpWrapper>
                <BannerUsp />
            </FadeInUpWrapper>
          </div>
        </div>
        <Footer />

    </div>
  );
}
