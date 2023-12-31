import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'uz',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    uz: {
      translation: {
        biografy: 'Biografiya',
        asar: 'Asarlar',
        main__title: 'Muhammad al-Xorazmiy nomidagi 2-xalqaro olimpiada',
        about_olimp: 'Olimpiada haqida',
        plan: 'Dastur',
        participants: 'Ishtirokchilar',
        company: 'Tashkilot',
        register: "Ro'yhatdan o'tish",
        about_more:
          'O‘zbekiston respublikasi Oliy ta’lim, fan va innovatsiyalar vazirligi tomonidan o‘tkaziladi.',
        algebra:
          'Algebra fanining asoschisi boʻlgan Xorazmiy dunyo faniga gʻoyat katta hissa qoʻshdi. “Algebra” soʻzining oʻzi esa uning “Al-kitob al-muxtasar fi hisob al-jabr va al-muqobala” nomli risolasidan olingan. Uning arifmetika risolasi hind raqamlariga asoslangan boʻlib, hozirgi kunda biz foydalanadigan oʻnlik pozitsion hisoblash tizimi va shu tizimdagi amallarning Yevropada tarqalishiga sabab boʻldi. Olimning ismi — “al-Xorazmiy” esa “algoritm” shaklida fanda abadiy oʻrnashib qoldi. Uning geografiyaga doir asari arab tilida oʻnlab geografik asarlarning yaratilishiga asos boʻldi. Xorazmiyning “Zij”i Yevropada ham, Sharq mamlakatlarida ham astronomiyaning taraqqiyot yoʻlini koʻrsatib berdi. Algebra fanining asoschisi boʻlgan Xorazmiy dunyo faniga gʻoyat katta hissa qoʻshdi. “Algebra” soʻzining oʻzi esa uning “Al-kitob al-muxtasar fi hisob al-jabr va al-muqobala” nomli risolasidan olingan. Uning arifmetika risolasi hind raqamlariga asoslangan boʻlib, hozirgi kunda biz foydalanadigan oʻnlik pozitsion hisoblash tizimi va shu tizimdagi amallarning Yevropada tarqalishiga sabab boʻldi. Olimning ismi — “al-Xorazmiy” esa “algoritm” shaklida fanda abadiy oʻrnashib qoldi. Uning geografiyaga doir asari arab tilida oʻnlab geografik asarlarning yaratilishiga asos boʻldi. Xorazmiyning “Zij”i Yevropada ham, Sharq mamlakatlarida ham astronomiyaning taraqqiyot yoʻlini koʻrsatib berdi',
        location: 'Olimpiada o‘tkaziladigan manzil: ',
        location1: 'Nukus shahri, Qoraqalpog‘iston, O‘zbekiston',
        apply: 'Ariza topshirish muddati 2023-yil',
        apply1: '10-15 oktyabr',
        register_info:
          'Olimpiadada ishtirok etish uchun shu yerda ro’yxatdan o’tishingiz mumkin.',
        requirments: 'Talablar',
        person: 'Bitta universitetdan bir jamoa terma jamoalari',
        person1:
          '(4 nafar ishtirokchi talaba, 1 nafar rahbar va 1 nafar ilmiy maslahatchi)',
        plan1: 'Birinchi bosqich',
        plan_saralash: 'Birinchi (saralash) bosqich',
        plan_saralash_t:
          ' - 2023-yil 26-oktyabr kuni Qoraqalpog‘iston Respublikasi Nukus shahridagi Berdaq nomidagi Qoraqalpoq davlat akademik musiqali teatri zalida test va yozma ish ko‘rinishida o‘tkaziladi.',
        plan2: 'Ikkinchi bosqich',
        plan2_info: 'Final bosqichi',
        plan2_info_t:
          ' – 2023 yilning 27-oktyabr sanasida kunning birinchi yarmida o‘tkazilib, kunning ikkinchi yarmida yakuniy natijalar e’lon qilinadi.',
        news: 'Yangiliklar',
        area: 'Mintaqa',
        select_area: 'Mintaqani tanlang',
        university: 'Universitet',
        select_university: 'Universitetni tanlang',
        boss: 'Jamoa rahbari',
        select_boss: 'Jamoa rahbarini tanlang',
        name: 'Ism',
        enter_name: 'Ismni kiriting',
        doctor: 'Ilmiy maslahatchi',
        enter_doctor: 'Ilmiy maslahatchini kiriting',
        student1: 'Talaba 1',
        student2: 'Talaba 2',
        student3: 'Talaba 3',
        student4: 'Talaba 4',
        email: 'Email',
        enter_email: 'Emailni kiriting',
        phone: 'Telefon raqam',
        enter_phone: 'Telefon raqamni kiriting',
        title: 'AKHIMO DASTURI 2023',
        day: 'Kun',
        time: 'Vaqt',
        tartib: 'Kun tartibi',
        location_title: 'Manzil',
        confirm: 'Tasdiqlash',
      },
    },
    ru: {
      translation: {
        biografy: 'Биография',
        asar: 'Работы',
        main__title: 'Международная 2-олимпиада имени Мухаммада аль-Хорезми.',
        about_olimp: 'Об олимпиаде',
        plan: 'Программа',
        participants: 'Участники',
        register: 'Зарегистрироваться',
        company: 'Компания',
        about_more:
          'Международная олимпиада имени Мухаммада аль-Хорезми. Его проводит Министерство высшего образования, науки и инноваций Республики Узбекистан.',
        algebra:
          'Основоположник науки алгебры аль-Хорезми внес большой вклад в мировую науку. Слово «алгебра» взято из его трактата «Аль-китаб аль-мухтасар фи лисб аль-джабр ва аль-мукабала». Его трактат по арифметике был основан на индийских цифрах и стал основой десятичной позиционной системы счета, которую мы используем сегодня. Кроме того, это послужило причиной распространения практики данной системы в Европе. Имя учёного – «аль-Хорезми» навсегда осталось в науке в виде «алгоритма». Его труды по географии стали основой для создания десятков географических сочинений на арабском языке. «Зидж» Хорезми показал путь развития астрономии как в Европе, так и в странах Востока.',
        location: 'Место проведения Олимпиады: ',
        location1: 'Нукус, Каркалпакстан, Узбекистан.',
        apply: 'Срок подачи заявок: 2023 г.',
        apply1: '10-15 oktyabr',
        register_info:
          'Зарегистрироваться для участия в олимпиаде можно здесь.',
        requirments: 'Требования',
        person: 'Одна команда от одного университета ',
        person1: '(4 студента, 1 руководитель и 1 научный руководитель)',
        plan1: 'Начальная степень',
        plan_saralash: 'Первый (отборочный) ',
        plan_saralash_t:
          'этап пройдет 26 октября 2023 года в зале Каракалпакского государственного академического музыкального театра имени Бердака города Нукус Республики Каракалпакстан в форме тест и письменной работы.',
        plan2: 'Финальный этап',
        plan2_info: 'Финальный этап ',
        plan2_info_t:
          'пройдет в первой половине дня 27 октября 2023 года, а окончательные результаты будут объявлены во второй половине дня.',
        news: 'Новости',
        area: 'Регион',
        select_area: 'Выберите регион',
        university: 'Университет',
        select_university: 'Напишите университет',
        boss: 'Руководитель команды',
        select_boss: 'Напишите имя руководителя',
        name: 'Ism',
        enter_name: 'Ismni kiriting',
        doctor: 'Научный руководитель',
        enter_doctor: 'Имя научного руководителя',
        student1: 'Студент 1',
        student2: 'Студент 2',
        student3: 'Студент 3',
        student4: 'Студент 4',
        email: 'Электронная почта',
        enter_email: 'Введите адрес электронной почты',
        phone: 'Номер телефона',
        enter_phone: 'Введите номер телефона',
        title: 'ПРОГРАММА АХИМО 2023',
        day: 'День',
        time: 'Время',
        tartib: 'Повестка дня',
        location_title: 'Адрес',
        confirm: 'Подтверждение',
      },
    },
    en: {
      translation: {
        biografy: 'Biografy',
        asar: 'Works',
        main__title:
          'The 2-International Olympiad named after Muhammad al-Khorezmi.',
        about_olimp: 'About the Olympiad',
        plan: 'Program',
        participants: 'Participants',
        company: 'Company',
        register: 'Sign up',
        about_more:
          'It is held by the Ministry of Higher Education, Science and Innovation of the Republic of Uzbekistan.',
        algebra: `The founder of the science of algebra al-Khorezmi made a great contribution to the science of the world. The word "algebra"  is taken from his treatise "Al-kitab al-mukhtasar fi lisb al-jabr wa al-muqabala". His treatise on arithmetic was based on Indian numerals, and became the basis for the decimal positional counting system we use today. In addition, it was the reason for the spread of practices in this system in Europe. The name of the scientist - "al-Khorazmi" has been forever stayed in science in the form of "algorithm". His work on geography became the basis for the creation of dozens of geographical works in Arabic.Khorezmi's "Zij" showed the way of development of astronomy both in Europe and in Eastern countries.`,
        location: 'Location of the Olympiad:',
        location1: ' Nukus, Qarqalpakistan, Uzbekistan',
        apply: 'The application deadline is ',
        apply1: 'October 10-15, 2023',
        register_info: 'You can register to participate in the Olympiad here.',
        requirments: 'Requirements',
        person: 'One team from one university ',
        person1: '(4 students, 1 supervisor and 1 academic advisor)',
        plan1: 'First stage',
        plan_saralash: 'The first (qualifying) stage will be held on ',
        plan_saralash_t:
          'October 26, 2023 in the hall of the Karakalpak State Academic Musical Theater named after Berdak in the city of Nukus, Republic of Karakalpakstan in the form of a test and a written work.',
        plan2: 'Second stage',
        plan2_info: 'The final stage',
        plan2_info_t:
          '  will be held in the first half of the day on October 27, 2023, and the final results will be announced in the second half of the day.',
        news: 'News',
        area: 'Region',
        select_area: 'Choose region',
        university: 'University',
        select_university: 'Enter the university',
        boss: 'Team supervisor',
        select_boss: "Enter supervisor's name",
        name: 'Name',
        enter_name: 'Enter name',
        doctor: 'Academic advisor',
        enter_doctor: "Academic advisor's name",
        student1: 'Student 1',
        student2: 'Student 2',
        student3: 'Student 3',
        student4: 'Student 4',
        email: 'Email',
        enter_email: 'Enter email',
        phone: 'Phone',
        enter_phone: 'Enter phone',
        title: 'AKHIMO PROGRAM 2023',
        day: 'Day',
        time: 'Time',
        tartib: 'Agenda',
        location_title: 'Address',
        confirm: 'Confirm',
      },
    },
  },
});

export default i18n;
