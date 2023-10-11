export const signUpFormData = [
  {
    name: 'country',
    label: 'Mintaqa',
    placeholder: 'Mintaqani tanlang',
    message: 'Please input your country!',
    className: 'half',
    select: true,
  },
  {
    name: 'university',
    label: 'Universitet',
    placeholder: 'Universitetni kiriting',
    message: 'Please input your university!',
    className: 'half',
    select: true,
  },
  {
    name: 'team_leader',
    label: 'Jamoa rahbari',
    placeholder: 'Ismni kiriting',
    message: 'Please input your Team lead!',
    className: 'half',
  },
  {
    name: 'advisor',
    label: 'Ilmiy maslahatchi',
    placeholder: 'Ismni kiriting',
    message: 'Please input your advisor !',
    className: 'half',
  },
  {
    name: 'first_student',
    label: 'Talaba 1',
    placeholder: 'Ismni kiriting',
    message: 'Please input your Student!',
    className: 'half',
  },
  {
    name: 'second_student',
    label: 'Talaba 2',
    placeholder: 'Ismni kiriting',
    message: 'Please input your Student!',
    className: 'half',
  },
  {
    name: 'third_student',
    label: 'Talaba 3',
    placeholder: 'Ismni kiriting',
    message: 'Please input your Student!',
    className: 'half',
  },
  {
    name: 'fourth_student',
    label: 'Talaba 4',
    placeholder: 'Ismni kiriting',
    message: 'Please input your Student!',
    className: 'half',
  },
  {
    name: 'email',
    label: 'E-pochta',
    placeholder: 'Email pochtangiz',
    message: 'Please input your email!',
    className: 'half',
  },
  {
    name: 'phone_number',
    label: 'Telefon raqam',
    placeholder: 'Telefon raqamini kiriting',
    message: 'Please input your phone!',
    className: 'half',
  },
];

export const codeFormData = [
  {
    name: 'code',
    label: 'Tasdiqlash kodi',
    placeholder: 'Kodni kiriting',
    message: 'Please input your code!',
    className: 'full mb-36',
  },
];

export const FormOptions = [
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'Yiminghe', label: 'yiminghe' },
];

export interface IName {
  id: number;
  name_uz: string;
  name_ru: string;
  name_en: string;
}

export const GiveLang = (data: IName) => {
  return localStorage.getItem('lang') === 'en' ? data?.name_en : data?.name_uz;
};
