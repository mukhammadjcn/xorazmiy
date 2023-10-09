import './explain.scss';

function ExplainSection() {
  return (
    <div className="section-explain container">
      <div className="section-explain-requirements">
        <div>
          <h4>Talablar</h4>
          <p>
            <span>Bitta universitetdan bir jamoa terma jamoalari</span> (4 nafar
            ishtirokchi talaba, 1 nafar rahbar va 1 nafar ilmiy maslahatchi)
          </p>
        </div>
        <img src="/img/explain-1.png" alt="explain image" />
      </div>
      <div className="section-explain-steps">
        <div>
          <h4>Birinchi bosqich</h4>
          <p>
            Birinchi (saralash) bosqich{' '}
            <span>
              -2023-yil 26-oktyabr kuni Qoraqalpog‘iston Respublikasi Nukus
              shahridagi Berdaq nomidagi Qoraqalpoq davlat akademik musiqali
              teatri zalida test va yozma ish ko‘rinishida o‘tkaziladi.
            </span>
          </p>
          <img src="/img/explain-2.png" alt="explain image" />
        </div>
        <div>
          <h4>Ikkinchi bosqich</h4>
          <p>
            Final bosqichi{' '}
            <span>
              – 2023 yilning 27-oktyabr sanasida kunning birinchi yarmida
              o‘tkazilib, kunning ikkinchi yarmida yakuniy natijalar e’lon
              qilinadi.
            </span>
          </p>
          <img src="/img/explain-3.png" alt="explain image" />
        </div>
      </div>
    </div>
  );
}

export default ExplainSection;
