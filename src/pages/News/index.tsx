import { useEffect } from 'react';
import './news.scss';
import { finals, news } from '../Home/components/news/constants';
import { useSearchParams } from 'react-router-dom';
import { Table } from 'antd';

function NewsPage() {
  const [searchParams] = useSearchParams();
  const lang = localStorage.getItem('lang') === 'en';
  const currentNews = news.find(
    (item) => item?.title === searchParams.get('title')
  );

  const columns = [
    {
      title: '№',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'University',
      dataIndex: 'university',
      key: 'university',
    },
    {
      title: 'Prize',
      dataIndex: 'prize',
      key: 'prize',
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="newspage ">
      <div className="container">
        <h2 className="newspage__title">
          {lang ? currentNews?.title_en : currentNews?.title}
        </h2>
        <h4 className="newspage__date">{currentNews?.date}</h4>
        <p
          className="newspage__info"
          dangerouslySetInnerHTML={{
            __html: lang
              ? `${currentNews?.news_en}`
              : `${currentNews?.news_uz}`,
          }}
        ></p>

        {searchParams.get('title') ===
          `Matematika fani bo‘yicha Muhammad al-Xorazmiy nomidagi II Xalqaro olimpiadasi ishtirokchilarini taqdirlash marosimi bo‘lib o‘tdi` && (
          <div className="newspage__final" style={{ marginTop: 32 }}>
            <h2 style={{ marginBottom: 16 }}>List of Winners AKHIMO-2023</h2>
            <Table
              bordered
              scroll={{ x: 600 }}
              dataSource={finals}
              columns={columns}
              pagination={{
                pageSize: 200,
                hideOnSinglePage: true,
                showSizeChanger: false,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsPage;
