import { Button } from 'antd';
import './header.scss';
import SelectLang from './components';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';

const menu = [
  {
    name: 'Olimpiada haqida',
    link: '#about',
  },
  {
    name: 'Dastur',
    link: '/plan',
  },
  {
    name: 'Ishtirokchilar',
    link: '/participants',
  },
];

function HeaderSection() {
  const [open, setOpen] = useState(false);
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
          <Button type="primary">Ro‘yxatdan o‘tish</Button>
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
