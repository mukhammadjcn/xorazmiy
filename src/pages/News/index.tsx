import { useEffect } from 'react';
import './news.scss';

function NewsPage() {
  const news = [
    {
      title: 'INTERNATIONAL MATHEMATICS OLYMPIAD TO BE HELD - 2023',
      news: `The Ministry of Higher Education, Science and Innovation of the
      Republic of Uzbekistan together with the Council of Ministers of the
      Republic of Karakalpakstan and the Ministry of Higher Education,
      Science and Innovation of the Republic of Karakalpakstan will hold the
      Muhammad Al-Khwarizmi International Mathematics Olympiad in Nukus city
      on October 23-29 this year. We remind that on August 26, 2018, the
      Cabinet of Ministers made a decision to hold this international
      Olympiad. According to it, the Muhammad Al-Khwarizmi International
      Mathematics Olympiad is organized every two years among students of
      higher education institutions.
      <br />
      <br />
      <iframe
        className="newspage__video"
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/8luxGCs7iTg?si=N2kbjpzCqKzzoLkB"
        allow="accelerometer; autoplay; clipboard-write;  gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder="0"
      ></iframe>
      <br />
      <br />
      The main purpose of organizing this international Olympiad is to
      promote at the international level the great contribution of the great
      scientist to the development of world science and civilization, as
      well as to support talented students, attract them to fundamental and
      exact sciences and expand international cooperation in the field of
      science.
      <br />
      <br />
      The jury consists of well-known international experts in the field of
      mathematics, professors and teachers of CIS countries, as well as
      experienced scientists professors and teachers-practitioners of our
      country.
      <br />
      <br />
      The winners of the Olympiads (citizens of Uzbekistan) are granted the
      right to enter the Master's program in mathematics, physics and
      information technologies on the basis of a state grant out of quota.
      <br />
      <br />
      This right is retained for 3 years after graduation from the
      bachelor's program.`,
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="newspage ">
      <div className="container">
        <h2 className="newspage__title">
          1st Al Khwarizmi International Mathematical Olympiad
        </h2>
        <h4 className="newspage__date">24-Oct-2023</h4>

        <p
          className="newspage__info"
          dangerouslySetInnerHTML={{ __html: news[0]?.news }}
        ></p>
      </div>
    </div>
  );
}

export default NewsPage;
