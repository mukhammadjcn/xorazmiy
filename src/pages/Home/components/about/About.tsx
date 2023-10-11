import { BagIcon, GreenGradient, StickIcon } from 'src/assets/svg';
import './about.scss';
import { useTranslation } from 'react-i18next';

function AboutSecttion() {
  const { t } = useTranslation();
  return (
    <div className="section-about ">
      <div className="section-about-content container">
        <div className="section-about-title">
          <div>
            <BagIcon />
            <StickIcon />
            <GreenGradient />
          </div>
          <div>
            <p>{t('about_olimp')}</p>
            <h3>
              <span>{t('main__title')}</span> {t('about_more')}
            </h3>
          </div>
        </div>
        <div className="section-about-info">
          <div>
            <div className="section-about-info-menu">
              <div>
                <p>{t('biografy')}</p>
              </div>
              <div>
                <p>{t('asar')}</p>
              </div>
            </div>
            <div className="section-about-info-text">
              <p>{t('algebra')}</p>
            </div>
          </div>
          <div className="section-about-info-img">
            <img src="/img/image2.png" alt="Al-Xorazmiy's picture" />
          </div>
        </div>
      </div>
      <img
        className="section-about-stars"
        src="/img/stars.png"
        alt="stars picture"
      />
    </div>
  );
}

export default AboutSecttion;
