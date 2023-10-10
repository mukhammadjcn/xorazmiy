import { Button, Form, Input, Select } from 'antd';
import { FormOptions, codeFormData, signUpFormData } from './constants';
import './signUp.scss';
import { useState } from 'react';

function SignUpPage() {
  const [codeSection, setCodeSection] = useState(false);

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
            // onFinish={onFinish}
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
                      options={FormOptions}
                      placeholder={item.placeholder}
                    />
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
