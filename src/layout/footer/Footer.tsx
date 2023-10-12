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

        <div className="footer__right">
          <div className="footer-section-social-medias">
            <div>
              <a
                href="http://t.me/deveduuz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramIcon />
              </a>
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

          <div className="footer__adress">
            <p>
              <span>Manzilimiz:</span> Toshkent shaxri, Olmazor tumani 2-chimboy
              ko'chasi, 96-uy
            </p>

            <p>
              <span>Telefon: </span> +998 71 207-03-47, +998 90 345-99-97
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
