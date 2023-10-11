export const signUpFormData = [
  {
    name: 'country',
    label: 'area',
    placeholder: 'select_area',
    message: 'Please input your country!',
    className: 'half',
    select: true,
  },
  {
    name: 'university',
    label: 'university',
    placeholder: 'select_university',
    message: 'Please input your university!',
    className: 'half',
    select: true,
  },
  {
    name: 'team_leader',
    label: 'boss',
    placeholder: 'select_boss',
    message: 'Please input your Team lead!',
    className: 'half',
  },
  {
    name: 'advisor',
    label: 'doctor',
    placeholder: 'enter_doctor',
    message: 'Please input your advisor !',
    className: 'half',
  },
  {
    name: 'first_student',
    label: 'student1',
    placeholder: 'enter_name',
    message: 'Please input your Student!',
    className: 'half',
  },
  {
    name: 'second_student',
    label: 'student2',
    placeholder: 'enter_name',
    message: 'Please input your Student!',
    className: 'half',
  },
  {
    name: 'third_student',
    label: 'student3',
    placeholder: 'enter_name',
    message: 'Please input your Student!',
    className: 'half',
  },
  {
    name: 'fourth_student',
    label: 'student4',
    placeholder: 'enter_name',
    message: 'Please input your Student!',
    className: 'half',
  },
  {
    name: 'email',
    label: 'email',
    placeholder: 'enter_email',
    message: 'Please input your email!',
    className: 'half',
  },
  {
    name: 'phone_number',
    label: 'phone',
    placeholder: 'enter_phone',
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
