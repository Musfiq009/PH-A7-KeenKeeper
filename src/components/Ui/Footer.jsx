import footerImg from "../../assets/logo-xl.png";
import fbImg from "../../assets/facebook.png";
import instaImg from "../../assets/instagram.png";
import xImg from "../../assets/twitter.png";
const Footer = () => {
  return (
    <div className="bg-green-950">
      <div className="pt-20 pb-8 container mx-auto">
        <div className="space-y-8">
          <div className="place-items-center space-y-4">
            <img src={footerImg} alt="KeenKeeper footer image" />
            <p className="text-gray-300 text-center">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
          </div>
          <div className="place-items-center space-y-4">
            <p className="text-white">Social Links</p>
            <div className="flex gap-2">
              <div>
                <img src={instaImg} alt="Instagram Logo" />
              </div>
              <div>
                <img src={fbImg} alt="Facebook Logo" />
              </div>
              <div>
                <img src={xImg} alt="Twitter Logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="divider text-white my-5"></div>
        <div className="flex justify-between">
            <p className="text-gray-300">© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex gap-5">
                <p className="text-gray-300">Privacy Policy</p>
                <p className="text-gray-300">Terms of Service</p>
                <p className="text-gray-300">Cookies</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
