import { useTranslation } from 'react-i18next';
import './explain.scss';

function ExplainSection() {
  const { t } = useTranslation();

  return (
    <div className="section-explain container">
      <div className="section-explain-requirements">
        <div>
          <h4>{t('requirments')}</h4>
          <p>
            <span>{t('person')}</span>
            {t('person1')}
          </p>
        </div>
        <img src="/img/explain-1.png" alt="explain image" />
      </div>
      <div className="section-explain-steps">
        <div>
          <h4>{t('plan1')}</h4>
          <p>
            {t('plan_saralash')} <span>{t('plan_saralash_t')}</span>
          </p>
          <img src="/img/explain-2.png" alt="explain image" />
        </div>
        <div>
          <h4>{t('plan2')}</h4>
          <p>
            {t('plan2_info')} <span>{t('plan2_info_t')}</span>
          </p>
          <img src="/img/explain-3.png" alt="explain image" />
        </div>
      </div>
    </div>
  );
}

export default ExplainSection;
