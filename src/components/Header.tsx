import CTAbutton from "./CTAbutton";
import { MoveRight } from "lucide-react";
import "../styles/header.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className='header'>
      <div className='header_title'>TEJAS</div>
      <div className='header-nav-bar'>
        <NavBar />
      </div>
      <div className='header-cta'>
        <CTAbutton
          title="Let's Talk"
          type='primary'
          on_click={() => {
            console.log("a");
          }}
          icon={<MoveRight />}
        />
      </div>
    </div>
  );
};

export default Header;

