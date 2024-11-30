// import { FadeInUpWrapper } from "../atoms/animation/FadeInUpComponent";
import Nav from "../pages/Header";
// import Menu from "../organisms/Navbar";
import Banners from "../organisms/Banner";


// import { fadeInUp, SlideUp } from "./atoms/animation/animation"

export default function HomePage() {
  return (
    <div>
        
        <div className="header bg-banner">
          <div className="container">
        <Nav />
            <Banners />
          </div>
        </div>
    </div>
  );
}
