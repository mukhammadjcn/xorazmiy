import {
  Button,
  Divider,
  Form,
  Input,
  InputRef,
  Select,
  Space,
  message,
} from 'antd';
import { GiveLang, IName, codeFormData, signUpFormData } from './constants';
import './signUp.scss';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { PlusOutlined } from '@ant-design/icons';

function SignUpPage() {
  const { t } = useTranslation();
  const [code, setCode] = useState('');
  const [codeSection, setCodeSection] = useState(false);
  const [countries, setCountries] = useState<IName[]>([
    {
      id: 195,
      name_uz: "O'zbekiston",
      name_ru: 'Узбекистан',
      name_en: 'Uzbekistan',
    },
    {
      id: 1,
      name_uz: 'Ukraina',
      name_ru: 'Ukraine',
      name_en: 'Ukraine',
    },
  ]);
  const [universities, setUniversities] = useState<any[]>([
    {
      id: 9946,
      name_uz:
        'Samarkand davlat veterinariya meditsinasi, chorvachilik va biotexnologiyalar universitet',
      name_ru:
        'Самаркандский государственный университет ветеринарной медицины, животноводства и биотехнологий',
      name_en:
        'Samarkand State Veterinary Medicine, Animal Husbandry and Biotechnology University',
    },
    {
      id: 9947,
      name_uz: 'Toshkent davlat agrar universiteti',
      name_ru: 'Ташкентский Давлат аграрный университет',
      name_en: 'Tashkent State Agrarian University',
    },
  ]);

  const getUniversity = (id: number) => {
    axios
      .get(`https://akhimo.uz/classifiers/universities/?country=${id}`)
      .then((res) => setUniversities(res.data));
  };

  const postUser = (data: any) => {
    const result = new FormData();
    for (let item in data) {
      result.append(item, data[item]);
    }
    console.log(result);

    codeSection
      ? axios
          .post(`https://akhimo.uz/applications/${code}/verify/`, result)
          .then(() => {
            message.success('Muvofaqiyatli yuborildi');
            window.location.href = '/';
          })
      : axios.post(`https://akhimo.uz/applications/`, result).then((res) => {
          setCode(res.data?.id);
          setCodeSection(true);
        });
  };

  const [name, setName] = useState('');
  const inputRef = useRef<InputRef>(null);
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setUniversities([
      ...universities,
      {
        id: name,
        name_uz: name,
        name_ru: name,
        name_en: name,
      },
    ]);
    console.log([
      ...universities,
      {
        id: name,
        name_uz: name,
        name_ru: name,
        name_en: name,
      },
    ]);

    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  useEffect(() => {
    axios
      .get(`https://akhimo.uz/classifiers/countries/`)
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <div className="signUp">
      {codeSection ? (
        <div className="signUp-form">
          <h2>{t('confirm')}</h2>
          <Form
            onFinish={postUser}
            layout="vertical"
            requiredMark={false}
            className="form-form auth-form"
          >
            {codeFormData.map((item) => {
              return (
                <Form.Item
                  name={item.name}
                  // label={item.label + '*'}
                  label={item.label}
                  key={item.label}
                  rules={[{ required: true, message: item.message }]}
                  className={item.className}
                >
                  {/* <Input placeholder={item.placeholder} /> */}
                  <Input placeholder={item.placeholder} />
                </Form.Item>
              );
            })}

            <Button
              htmlType="submit"
              className="auth-form-btn"
              type="primary"
              // onClick={() => navigate("/auth/password")}
            >
              {t('register')}
            </Button>
          </Form>
        </div>
      ) : (
        <div className="signUp-form">
          <h2>{t('register')}</h2>
          <Form
            onFinish={postUser}
            layout="vertical"
            requiredMark={false}
            className="form-form auth-form"
          >
            {signUpFormData.map((item) => {
              return (
                <Form.Item
                  name={item.name}
                  // label={item.label + '*'}
                  label={t(item.label)}
                  key={item.label}
                  rules={[{ required: true, message: item.message }]}
                  className={item.className}
                >
                  {/* <Input placeholder={item.placeholder} /> */}
                  {item.select ? (
                    <Select
                      showSearch
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        String(option?.label ?? '')
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      filterSort={(optionA, optionB) =>
                        String(optionA?.label ?? '')
                          .toLowerCase()
                          .localeCompare(
                            String(optionB?.label ?? '').toLowerCase()
                          )
                      }
                      placeholder={t(item.placeholder)}
                      onChange={(val) =>
                        item.name === 'country' ? getUniversity(val) : ''
                      }
                      options={
                        item.name === 'country'
                          ? countries.reduce(
                              (all: any, curren: any) => [
                                ...all,
                                {
                                  label: GiveLang(curren),
                                  value: curren?.id,
                                },
                              ],
                              []
                            )
                          : universities.reduce(
                              (all: any, curren: any) => [
                                ...all,
                                {
                                  label: GiveLang(curren),
                                  value: GiveLang(curren),
                                },
                              ],
                              []
                            )
                      }
                      dropdownRender={(menu) =>
                        item.label === 'university' ? (
                          <>
                            {menu}
                            <Divider style={{ margin: '8px 0' }} />
                            <Space style={{ padding: '0 8px 4px' }}>
                              <Input
                                placeholder="Please enter item"
                                ref={inputRef}
                                value={name}
                                onChange={onNameChange}
                              />
                              <Button
                                type="text"
                                icon={<PlusOutlined />}
                                onClick={addItem}
                              >
                                Add item
                              </Button>
                            </Space>
                          </>
                        ) : (
                          <>{menu}</>
                        )
                      }
                    />
                  ) : (
                    // <Input.Password placeholder={item.placeholder} />
                    <Input placeholder={t(item.placeholder) || ''} />
                  )}
                </Form.Item>
              );
            })}

            <Button
              htmlType="submit"
              className="auth-form-btn"
              type="primary"
              // onClick={() => navigate("/auth/password")}
            >
              {t('register')}
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
}

export default SignUpPage;
