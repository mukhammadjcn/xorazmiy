import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GiveLang } from '../auth/signUp/constants';

function ParticipantsPage() {
  const { t } = useTranslation();
  const [users, setUsers] = useState([
    {
      key: '1',
      name: 'Anvar Reyimberganov',
      company: 'Urgench State University (Uzbekistan)',
      user: 'Team leader',
    },
  ]);

  interface DataType {
    key: string;
    name: string;
    company: string;
    user: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: '№',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: t('name'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('company'),
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: t('participants'),
      dataIndex: 'user',
      key: 'user',
    },
  ];

  const GetUsers = () => {
    axios.get(`https://akhimo.uz/applications/list/`).then((res) => {
      setUsers(
        res.data?.reduce(
          (acc: any, cur: any, index: number) => [
            ...acc,
            {
              key: index + 1,
              name: cur?.team_leader,
              company: `${cur?.university} (${GiveLang(cur?.country)})`,
              user: 'Team leader',
            },
          ],
          []
        )
      );
    });
  };

  useEffect(() => {
    GetUsers();
  }, []);

  return (
    <div className="signUp">
      <div className="signUp-form">
        <h2>{t('participants')}</h2>

        <Table
          bordered
          columns={columns}
          dataSource={users}
          pagination={false}
          scroll={{ x: 800 }}
        />
      </div>
    </div>
  );
}

export default ParticipantsPage;
