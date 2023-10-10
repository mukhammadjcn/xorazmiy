import Table, { ColumnsType } from 'antd/es/table';

function PlanPage() {
  interface DataType {
    key: number;
    time: string;
    places: string;
    location: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Kun',
      key: 'day',
      onCell: (record) => ({
        rowSpan: record.key % 5 === 0 ? 5 : 0,
      }),
      render: (_, record) =>
        Math.floor(record.key / 5) === 0 ? 'First Day' : 'Second Day',
    },
    {
      title: 'Vaqt',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Kun tartibi',
      dataIndex: 'places',
      key: 'places',
    },
    {
      title: 'Manzil',
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
        <h2>AKHIMO DASTURI 2023</h2>

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
