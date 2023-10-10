import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

function ParticipantsPage() {
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
      title: 'Ismi',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Tashkilot',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Ishtirokchi',
      dataIndex: 'user',
      key: 'user',
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'Anvar Reyimberganov',
      company: 'Urgench State University (Uzbekistan)',
      user: 'Team leader',
    },
    {
      key: '2',
      name: 'Rasulbek Sharipov',
      company: 'Karshi State University (Uzbekistan)',
      user: 'Participant',
    },
    {
      key: '3',
      name: "Rasulbek Qo'shnazarov",
      company: 'UrSU (Uzbekistan)',
      user: 'Participant',
    },
    {
      key: '3',
      name: "Rasulbek Qo'shnazarov",
      company: 'UrSU (Uzbekistan)',
      user: 'Participant',
    },
  ];

  return (
    <div className="signUp">
      <div className="signUp-form">
        <h2>Ishtirokchilar</h2>

        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
          scroll={{ x: 800 }}
        />
      </div>
    </div>
  );
}

export default ParticipantsPage;
