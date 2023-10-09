import { ConfigProvider } from 'antd';
import { ProviderProps } from '../type';

function AntConfigProvider({ children }: ProviderProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#635bff',
          fontSize: 16,
          fontFamily: 'Inter',
          colorText: '#fff',
          // colorBgTextActive: colors.color_white,
        },
        components: {
          Button: {
            controlHeight: 48,
            borderRadius: 62,
          },
          // Input: {
          //   fontSize: 16,
          //   controlHeight: 40,
          //   colorText: colors.white,
          //   colorTextPlaceholder: colors.white,
          //   colorPrimaryHover: '#312474',
          //   colorBorder: '#2A2F34',
          //   colorBgContainer: '#484A4D',
          //   colorBgContainerDisabled: '#2A2F34',
          //   borderRadius: 8,
          // },
          Dropdown: {
            colorBgElevated: '#37393C',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntConfigProvider;
