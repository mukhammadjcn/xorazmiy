import { BagIcon, GreenGradient, StickIcon } from 'src/assets/svg';
import './about.scss';

function AboutSecttion() {
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
            <p>Olimpiada haqida</p>
            <h3>
              <span>
                Matematika fani bo‘yicha Muhammad al-Xorazmiy nomidagi xalqaro
                olimpiada.
              </span>{' '}
              O‘zbekiston respublikasi Oliy ta’lim, fan va innovatsiyalar
              vazirligi tomonidan o‘tkaziladi.
            </h3>
          </div>
        </div>
        <div className="section-about-info">
          <div>
            <div className="section-about-info-menu">
              <div>
                <p>Biografiya</p>
              </div>
              <div>
                <p>Asarlar</p>
              </div>
              <div>
                <p>package.json</p>
              </div>
            </div>
            <div className="section-about-info-text">
              <p>
                Algebra fanining asoschisi boʻlgan Xorazmiy dunyo faniga gʻoyat
                katta hissa qoʻshdi. “Algebra” soʻzining oʻzi esa uning
                “Al-kitob al-muxtasar fi hisob al-jabr va al-muqobala” nomli
                risolasidan olingan. Uning arifmetika risolasi hind raqamlariga
                asoslangan boʻlib, hozirgi kunda biz foydalanadigan oʻnlik
                pozitsion hisoblash tizimi va shu tizimdagi amallarning
                Yevropada tarqalishiga sabab boʻldi. Olimning ismi —
                “al-Xorazmiy” esa “algoritm” shaklida fanda abadiy oʻrnashib
                qoldi. Uning geografiyaga doir asari arab tilida oʻnlab
                geografik asarlarning yaratilishiga asos boʻldi. Xorazmiyning
                “Zij”i Yevropada ham, Sharq mamlakatlarida ham astronomiyaning
                taraqqiyot yoʻlini koʻrsatib berdi{' '}
              </p>

              <p>
                Algebra fanining asoschisi boʻlgan Xorazmiy dunyo faniga gʻoyat
                katta hissa qoʻshdi. “Algebra” soʻzining oʻzi esa uning
                “Al-kitob al-muxtasar fi hisob al-jabr va al-muqobala” nomli
                risolasidan olingan. Uning arifmetika risolasi hind raqamlariga
                asoslangan boʻlib, hozirgi kunda biz foydalanadigan oʻnlik
                pozitsion hisoblash tizimi va shu tizimdagi amallarning
                Yevropada tarqalishiga sabab boʻldi. Olimning ismi —
                “al-Xorazmiy” esa “algoritm” shaklida fanda abadiy oʻrnashib
                qoldi. Uning geografiyaga doir asari arab tilida oʻnlab
                geografik asarlarning yaratilishiga asos boʻldi. Xorazmiyning
                “Zij”i Yevropada ham, Sharq mamlakatlarida ham astronomiyaning
                taraqqiyot yoʻlini koʻrsatib berdi
              </p>
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
