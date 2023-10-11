import { Button } from 'antd';
import './header.scss';
import SelectLang from './components';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function HeaderSection() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const menu = [
    {
      name: t('about_olimp'),
      link: '#about',
    },
    {
      name: t('plan'),
      link: '/plan',
    },
    {
      name: t('participants'),
      link: '/participants',
    },
  ];
  return (
    <div className="header">
      <Link to={'/'}>
        <div className="header-logo">
          <img src="/img/logo.png" alt="logo image" />
          <p>akhimo.uz</p>
        </div>
      </Link>
      <div className={`header-menu ${open ? 'header-menu-active' : ''}`}>
        {menu.map((el) => (
          <div className="home-header-items" key={el.link}>
            <a href={el.link}>{el.name}</a>
          </div>
        ))}
        <SelectLang />
        <Link to={'/register'}>
          <Button type="primary">{t('register')}</Button>
        </Link>
      </div>

      <Button
        icon={<MenuOutlined />}
        type="primary"
        className="burgermenu"
        onClick={() => setOpen(!open)}
      />
    </div>
  );
}

export default HeaderSection;
