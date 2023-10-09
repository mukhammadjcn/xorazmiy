import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  YoutubeIcon,
} from 'src/assets/svg';
import './footer.scss';

function FooterSection() {
  return (
    <div className="footer-section ">
      <div className="footer-section-content container">
        <p>© 2023 akhimo.uz</p>
        <div className="footer-section-social-medias">
          <div>
            <TelegramIcon />
          </div>
          <div>
            <InstagramIcon />
          </div>
          <div>
            <FacebookIcon />
          </div>
          <div>
            <YoutubeIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
