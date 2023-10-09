import { useState } from 'react';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { LanguageData } from './constants';
import './selectLang.scss';

function SelectLang() {
  const [lang, setLang] = useState('Uzb');

  const items: MenuProps['items'] = LanguageData.map((el) => ({
    label: (
      <div className="select-language-dropDown">
        <p>{el.name}</p>
      </div>
    ),
    key: el.short_name,
  }));

  return (
    <div>
      <Dropdown
        menu={{ items, onClick: (val) => setLang(val.key) }}
        trigger={['click']}
      >
        <div onClick={(e) => e.preventDefault()}>
          <div className="select-language">
            <p>{lang}</p>
            <DownOutlined className="select-language-icon" />
          </div>
        </div>
      </Dropdown>
    </div>
  );
}

export default SelectLang;
