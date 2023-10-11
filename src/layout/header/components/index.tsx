import { useState } from 'react';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { LanguageData } from './constants';
import './selectLang.scss';
import { useTranslation } from 'react-i18next';

function SelectLang() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem('lang') ?? 'uz');

  const items: MenuProps['items'] = LanguageData.map((el) => ({
    label: (
      <div className="select-language-dropDown">
        <p>{el.name}</p>
      </div>
    ),
    key: el.short_name,
    onClick: () => {
      setLang(el.short_name);
      i18n.changeLanguage(el.short_name);
      localStorage.setItem('lang', el.short_name);
    },
  }));

  return (
    <div className="lang">
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
      >
        <div onClick={(e) => e.preventDefault()}>
          <div className="select-language">
            <p>
              {lang === 'uz' ? 'Uzbek' : lang === 'en' ? 'English' : 'Russian'}
            </p>
            <DownOutlined className="select-language-icon" />
          </div>
        </div>
      </Dropdown>
    </div>
  );
}

export default SelectLang;
