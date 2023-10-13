import Table, { ColumnsType } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import { data, DataType } from 'src/pages/Plan/data';

function PlanPage() {
  const { t } = useTranslation();

  const columns: ColumnsType<DataType> = [
    {
      title: t('day'),
      key: 'date',
      dataIndex: 'date',
      onCell: (record) => ({
        rowSpan: record.rowKey !== 0 ? record.rowKey : 0,
      }),
      align: 'center',
    },
    {
      title: t('time'),
      dataIndex: 'time',
      align: 'center',
      key: 'time',
    },
    {
      title: t('tartib'),
      dataIndex: 'place',
      align: 'center',
      key: 'place',
    },
    // {
    //   title: t('location_title'),
    //   dataIndex: 'location',
    //   key: 'location',
    // },
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
