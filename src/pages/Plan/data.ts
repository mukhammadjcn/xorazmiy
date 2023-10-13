export interface DataType {
  rowKey?: number;
  time: string;
  place: string;
  // location: string;
  date?: string;
}

const arr: DataType[] = [
  {
    rowKey: 6,
    date: '23-oktyabr Dushanba',
    time: '00:00 - 18:00',
    place: 'Mehmonlarni kutib olish va mehmonxonalarga joylashtirish',
  },
  {
    date: '23-oktyabr Dushanba',
    time: '13:00 - 14:00',
    place: 'Tushlik ',
  },
  {
    date: '23-oktyabr Dushanba',
    time: '14:00 - 18:00',
    place: 'Boʻsh vaqt',
  },
  {
    date: '23-oktyabr Dushanba',
    time: '18:00 - 19:00',
    place: 'Kechki ovqat ',
  },
  {
    date: '23-oktyabr Dushanba',
    time: '19:00 - 20:00',
    place: 'Toshkent janubiy vokzaliga yetib borish',
  },
  {
    date: '23-oktyabr Dushanba',
    time: '21:00',
    place: 'Toshkent – Xiva yo‘nalishi bo‘yicha Xorazm viloyatiga joʻnash',
  },
  {
    rowKey: 5,
    date: '24-oktyabr Seshanba',
    time: '11:00 - 12:00',
    place: 'Xorazmdagi mehmonxonalarga joylashish ',
  },
  {
    date: '24-oktyabr Seshanba',
    time: '12:00 - 13:00',
    place: 'Tushlik ',
  },
  {
    date: '24-oktyabr Seshanba',
    time: '13:00 - 18:30',
    place: 'Xorazm boʻylab sayohat',
  },
  {
    date: '24-oktyabr Seshanba',
    time: '18:30 - 20:00',
    place: 'Kechki ovqat',
  },
  {
    date: '24-oktyabr Seshanba',
    time: '20:00 - 21:00',
    place: 'Mehmonxonaga qaytish ',
  },
  {
    rowKey: 8,
    date: '25-oktyabr Chorshanba',
    time: '07:00 - 08:00',
    place: 'Nonushta (yoʻlda)',
  },
  {
    date: '24-oktyabr Seshanba',
    time: '08:00 - 11:00',
    place: 'Qoraqalpog‘iston Respublikasiga joʻnash',
  },
  {
    date: '24-oktyabr Seshanba',
    time: '11:00 - 12:00',
    place: 'Nukus shahridagi mehmonxonalarga joylashish',
  },
  {
    date: '24-oktyabr Seshanba',
    time: '12:00 - 13:30',
    place: 'Tushlik ',
  },
  {
    date: '24-oktyabr Seshanba',
    time: '13:30 - 16:30',
    place: 'Nukus shahrining diqqatga sazovor joylariga sayohat ',
  },
  {
    date: '24-oktyabr Seshanba',
    time: '16:30 - 17:30',
    place: 'Xalqaro olimpiada o‘tadigan joyga borish, yengil ovqatlanish',
  },
  {
    date: '24-oktyabr Seshanba',
    time: '18:00 - 20:00',
    place: 'Xalqaro olimpiadaning tantanali ochilish marosimi',
  },
  {
    date: 'asd',
    time: '20:00 - 21:00',
    place: 'Mehmonxonaga qaytish va kechki ovqat',
  },
  {
    rowKey: 6,
    date: '26-oktyabr Payshanba',
    time: '07:00 - 08:00',
    place: 'Nonushta (Mehmonxonada)',
  },
  {
    date: 'sdf',
    time: '08:00 - 09:00',
    place: 'Xalqaro olimpiada o‘tkaziladigan joyga borish ',
  },
  {
    date: 'sdf',
    time: '09:00 - 12:00',
    place: 'Xalqaro olimpiada bellashuvi jarayoni (1-tur)',
  },
  {
    date: 'sdf',
    time: '12:00 - 13:30',
    place: 'Tushlik ',
  },
  {
    date: 'fsd',
    time: '13:30 - 17:00',
    place:
      'Qoraqalpog‘iston Respublikasining diqqatga sazovor joylariga sayohat',
  },
  {
    date: 'fsd',
    time: '17:00 - 18:00',
    place: 'Kechki ovqat (Mehmonxonada)',
  },
  {
    rowKey: 7,
    date: '27-oktyabr Juma',
    time: '07:00 - 08:00',
    place: 'Nonushta (Mehmonxonada)',
  },
  {
    date: 'Juma',
    time: '08:00 - 09.00',
    place: 'Xalqaro olimpiada o‘tkaziladigan joyga borish ',
  },
  {
    date: 'asd',
    time: '09:00 - 12:00',
    place: 'Xalqaro olimpiada  bellashuvi jarayoni (2-tur)',
  },
  {
    date: 'dsf',
    time: '12:00 - 13:30',
    place: 'Tushlik ',
  },
  {
    date: 'asd',
    time: '13:30 - 17:00',
    place:
      'Qoraqalpog‘iston Respublikasining diqqatga sazovor joylariga sayohat',
  },
  {
    date: 'asd',
    time: '17:00 - 18:00',
    place:
      'Hay’at a’zolari tomonidan Koordinatsiya. Yakuniy natijalarni e’lon qilish',
  },
  {
    date: 'asd',
    time: '18:00 - 19:00',
    place: 'Xalqaro olimpiadaning yopilish marosimi va banket',
  },
  {
    rowKey: 6,
    date: '28-oktyabr Shanba',
    time: '07:00 - 09:00',
    place: 'Nonushta (Mehmonxonada)',
  },
  {
    date: 'Shanba',
    time: '09:00 - 13:00',
    place: 'Boʻsh vaqt',
  },
  {
    date: 'asd',
    time: '13:00 - 14:00',
    place: 'Tushlik ',
  },
  {
    date: 's',
    time: '14:00 - 15:00',
    place: 'Qaytishga tayyorgarlik',
  },
  {
    date: 'ad',
    time: '15:00 - 16:30',
    place: 'Nukus shahridagi temir yo‘l vokzaliga yetib borish',
  },
  {
    date: 'asd',
    time: '17:00 - 07:40',
    place:
      'Nukus temir yo‘l vokzalidan Toshkent (Urganch, Samarqand) shahriga joʻnash',
  },
  {
    rowKey: 3,
    date: '29-oktyabr Yakshanba',
    time: '07:00 - 08:00',
    place: 'Toshkent (Urganch, Samarqand) shahridagi mehmonxonaga borish',
  },
  {
    date: 'Yakshanba',
    time: '08:00 - 09:00',
    place: 'Nonushta (Mehmonxonada)',
  },
  {
    date: 'asd',
    time: '09:00 - 18:00',
    place:
      'Toshkent (Urganch, Samarqand) shahridagi aeroportlardan oʻz yurtiga qaytish',
  },
];

export const data = arr.map((data, key) => ({
  ...data,
  key,
  rowKey: data.rowKey ? data.rowKey : 0,
}));
