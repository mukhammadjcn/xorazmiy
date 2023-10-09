import { Button } from 'antd';
import './header.scss';
import SelectLang from './components';

const menu = [
  {
    name: 'Olimpiada haqida',
    link: '#about',
  },
  {
    name: 'Dastur',
    link: '#explain',
  },
  {
    name: 'Ishtirokchilar',
    link: '#participants',
  },
];

function HeaderSection() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="/img/logo.png" alt="logo image" />
        <p>akhimo.uz</p>
      </div>
      <div className="header-menu">
        {menu.map((el) => (
          <div className="home-header-items" key={el.link}>
            <a href={el.link}>{el.name}</a>
          </div>
        ))}
      </div>
      <SelectLang />
      <Button type="primary">Ro‘yxatdan o‘tish</Button>
    </div>
  );
}

export default HeaderSection;
