export interface DataType {
  rowKey: number;
  time: string;
  place: string;
  // location: string;
  date?: string;
}

export const data1: DataType[] = [
  {
    rowKey: 6,
    date: '23-oktyabr Dushanba',
    time: '00:00 - 18:00',
    place: 'Mehmonlarni kutib olish va mehmonxonalarga joylashtirish',
  },
  {
    rowKey: 0,
    time: '13:00 - 14:00',
    place: 'Tushlik',
  },
  {
    rowKey: 0,
    time: '14:00 - 18:00',
    place: 'Boʻsh vaqt',
  },
  {
    rowKey: 0,
    time: '18:00 - 19:00',
    place: 'Kechki ovqat',
  },
  {
    rowKey: 0,
    time: '19:00 - 20:00',
    place: 'Toshkent janubiy vokzaliga yetib borish',
  },
  {
    rowKey: 0,
    time: '21:00',
    place: 'Toshkent – Xiva yo‘nalishi bo‘yicha Xorazm viloyatiga joʻnash',
  },
  {
    rowKey: 4,
    date: '23-oktyabr Dushanba',
    time: '00:00 - 18:00',
    place: 'Mehmonlarni kutib olish va mehmonxonalarga joylashtirish',
  },
  {
    rowKey: 0,
    time: '13:00 - 14:00',
    place: 'Tushlik',
  },
  {
    rowKey: 0,
    time: '14:00 - 18:00',
    place: 'Boʻsh vaqt',
  },
  {
    rowKey: 0,
    time: '18:00 - 19:00',
    place: 'Kechki ovqat',
  },
];

export const data = data1.map((data, key) => ({ ...data, key }));
