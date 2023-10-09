import { BranchProductivityIcon, LocationIcon } from 'src/assets/svg';
import './location.scss';

function LocationSection() {
  return (
    <div className="location-section">
      <div className="location-section-content container">
        <div className="location-section-icon">
          <BranchProductivityIcon />
        </div>
        <div className="location-section-info">
          <div>
            <div className="location-section-adress">
              <h4>Olimpiada o‘tkaziladigan manzil:</h4>
              <p>Nukus shahri, Qorqqalpog‘iston O‘zbekiston</p>
            </div>
            <div className="location-section-date">
              <p>Ariza topshirish muhlati 2023-yil</p>
              <span>10-15 oktyabr</span>
              <h3>
                Olimpiadada ishtirok etish uchun shu yerda ro’yxatdan
                o’tishingiz mumkin.
              </h3>
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
