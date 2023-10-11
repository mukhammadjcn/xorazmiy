import { Button, Form, Input, Select } from 'antd';
import { GiveLang, IName, codeFormData, signUpFormData } from './constants';
import './signUp.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SignUpPage() {
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
  const [universities, setUniversities] = useState<IName[]>([
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
    codeSection
      ? axios.post(`https://akhimo.uz/applications/${code}/verify/`)
      : axios
          .post(`https://akhimo.uz/applications/`, data)
          .then((res) => setCode(res.data));
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
          <h2>Tasdiqlash</h2>
          <Form
            onFinish={() => setCodeSection(true)}
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
              Ro'yxatdan o'tish
            </Button>
          </Form>
        </div>
      ) : (
        <div className="signUp-form">
          <h2>Ro‘yxatdan o‘tish</h2>
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
                  label={item.label}
                  key={item.label}
                  rules={[{ required: true, message: item.message }]}
                  className={item.className}
                >
                  {/* <Input placeholder={item.placeholder} /> */}
                  {item.select ? (
                    <Select
                      placeholder={item.placeholder}
                      onChange={(val) =>
                        item.name === 'country' ? getUniversity(val) : ''
                      }
                    >
                      {item.name === 'country'
                        ? countries?.map((item) => (
                            <Select.Option value={item.id}>
                              {GiveLang(item)}
                            </Select.Option>
                          ))
                        : universities?.map((item) => (
                            <Select.Option value={item.id}>
                              {GiveLang(item)}
                            </Select.Option>
                          ))}
                    </Select>
                  ) : (
                    // <Input.Password placeholder={item.placeholder} />
                    <Input placeholder={item.placeholder} />
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
              Ro'yxatdan o'tish
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
}

export default SignUpPage;
