import Table, { ColumnsType } from 'antd/es/table';
import { useTranslation } from 'react-i18next';

function PlanPage() {
  const { t } = useTranslation();
  interface DataType {
    key: number;
    time: string;
    places: string;
    location: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: t('day'),
      key: 'day',
      onCell: (record) => ({
        rowSpan: record.key % 5 === 0 ? 5 : 0,
      }),
      render: (_, record) =>
        Math.floor(record.key / 5) === 0 ? 'First Day' : 'Second Day',
    },
    {
      title: t('time'),
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: t('tartib'),
      dataIndex: 'places',
      key: 'places',
    },
    {
      title: t('location_title'),
      dataIndex: 'location',
      key: 'location',
    },
  ];

  const data: DataType[] = [
    {
      key: 0,
      time: '09:00-20:00',
      places: 'Arrival and Registration (UrSU)',
      location: 'Location',
    },
    {
      key: 1,
      time: '09:00-20:00',
      places: 'Arrival and Registration (UrSU)',
      location: 'Location',
    },
    {
      key: 2,
      time: '09:00-20:00',
      places: 'Arrival and Registration (UrSU)',
      location: 'Location',
    },
    {
      key: 3,
      time: '09:00-20:00',
      places: 'Arrival and Registration (UrSU)',
      location: 'Location',
    },
    {
      key: 4,
      time: '09:00-20:00',
      places: 'Arrival and Registration (UrSU)',
      location: 'Location',
    },
    {
      key: 5,
      time: '09:00-20:00',
      places: 'Arrival and Registration (UrSU)',
      location: 'Location',
    },
    {
      key: 6,
      time: '09:00-20:00',
      places: 'Arrival and Registration (UrSU)',
      location: 'Location',
    },
    {
      key: 7,
      time: '09:00-20:00',
      places: 'Arrival and Registration (UrSU)',
      location: 'Location',
    },
    {
      key: 8,
      time: '09:00-20:00',
      places: 'Arrival and Registration (UrSU)',
      location: 'Location',
    },
    {
      key: 9,
      time: '09:00-20:00',
      places: 'Arrival and Registration (UrSU)',
      location: 'Location',
    },
  ];

  return (
    <div className="signUp">
      <div className="signUp-form">
        <h2>{t('title')}</h2>

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

export default PlanPage;
