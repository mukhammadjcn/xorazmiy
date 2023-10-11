import { BranchProductivityIcon, LocationIcon } from 'src/assets/svg';
import './location.scss';
import { useTranslation } from 'react-i18next';

function LocationSection() {
  const { t } = useTranslation();

  return (
    <div className="location-section">
      <div className="location-section-content container">
        <div className="location-section-icon">
          <BranchProductivityIcon />
        </div>
        <div className="location-section-info">
          <div>
            <div className="location-section-adress">
              <h4>{t('location')}</h4>
              <p>{t('location1')}</p>
            </div>
            <div className="location-section-date">
              <p>{t('apply')}</p>
              <span>{t('apply1')}</span>
              <h3>{t('register_info')}</h3>
            </div>
          </div>
          <div className="location-section-img">
            <img src="/img/map.png" alt="map image" />
            <LocationIcon />
          </div>
        </div>
      </div>
      <img
        className="location-section-stars-img"
        src="/img/stars.png"
        alt="stars image"
      />
    </div>
  );
}

export default LocationSection;
