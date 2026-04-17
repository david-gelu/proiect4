import { useEffect, useRef } from 'react';
import { pdf } from '@react-pdf/renderer';
import './App.css';
import { certifications, contacts, education, languages, personalSkills, skills, workExperience } from './data';
import PDFDocument from './PDFDocument';

const App = () => {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleBeforePrint = () => {
      alert("To ensure proper formatting, please enable 'Background graphics' in the print settings.");
    };
    window.addEventListener('beforeprint', handleBeforePrint);
    return () => window.removeEventListener('beforeprint', handleBeforePrint);
  }, []);

  const handleSaveAsPDF = async () => {
    document.body.classList.add('pdf-mode');
    try {
      const blob = await pdf(<PDFDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'DavidGelu-CV.pdf';
      link.click();
      URL.revokeObjectURL(url);
    } finally {
      document.body.classList.remove('pdf-mode');
    }
  };

  return (
    <div className="cv-page" ref={appRef}>

      {/* ── HEADER ── */}
      <div className="cv-header">
        <div className="cv-header__name">David Gelu-Fanel</div>
        <div className="cv-header__title">FULL-STACK DEVELOPER</div>
        <div className="cv-header__summary">
          Full-Stack Developer with 4+ years of experience building real-time analytics dashboards
          and scalable web applications using React, TypeScript, and Node.js. Focused on performance
          optimization, reusable component systems, and clean architecture. Experienced in Agile
          teams of 3–6 developers.
        </div>
        <div className="cv-header__contacts">
          {contacts.map((c, i) => (
            <div className="cv-contact-item" key={i}>
              <span className="cv-contact-dot" />
              {c.url
                ? <a href={c.url} target="_blank" rel="noreferrer">{c.text}</a>
                : <span>{c.text}</span>
              }
            </div>
          ))}
          <button className="cv-save-btn print-btn" onClick={handleSaveAsPDF}>
            Save PDF <i className="fas fa-file-pdf" />
          </button>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="cv-body">

        {/* SIDEBAR */}
        <aside className="cv-sidebar">
          <div className="cv-section-title">Technical Skills</div>
          {skills.map((skill, i) => (
            <div className="cv-skill-item" key={i}>
              <span className="cv-skill-dot" />
              {skill}
            </div>
          ))}

          <div className="cv-section-title" style={{ marginTop: '0.5rem' }}>Education</div>
          <div className="cv-edu-item">
            <div className="cv-edu-degree">Bachelor's Degree — Marketing</div>
            <div className="cv-edu-school">Faculty of Economic Sciences</div>
            <div className="cv-edu-year">2022 – 2025</div>
          </div>
          <div className="cv-edu-item">
            <div className="cv-edu-degree">Front-End Web Design</div>
            <div className="cv-edu-school">ANC Accredited — IT School</div>
            <div className="cv-edu-year">2019</div>
          </div>

          <div className="cv-section-title">Certifications</div>
          {certifications.map((cert, i) => (
            <div className="cv-cert-group" key={i}>
              <div className="cv-cert-title">{cert.title}</div>
              {cert.items.map((item, j) => (
                <div className="cv-cert-item" key={j}>{item}</div>
              ))}
            </div>
          ))}

          <div className="cv-section-title">Languages</div>
          {languages.map((lang, i) => (
            <div className="cv-lang-item" key={i}>{lang}</div>
          ))}

          <div className="cv-section-title">Personal Skills</div>
          {personalSkills.map((ps, i) => (
            <div className="cv-pskill-item" key={i}>{ps.skill}</div>
          ))}
        </aside>

        {/* MAIN */}
        <main className="cv-main">
          <div className="cv-section-title">Work Experience</div>
          {workExperience.map((job, i) => (
            <div className="cv-job" key={i}>
              {/* Split "Role — Company (dates)" into parts */}
              <div className="cv-job__title">{job.title.split('—')[0].trim()}</div>
              <div className="cv-job__company">{job.title.split('—').slice(1).join('—').trim()}</div>
              <ul className="cv-job__bullets">
                {job.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;