import { useEffect, useRef } from 'react';
import { pdf } from '@react-pdf/renderer';
import './App.css';
import Box from './Box';
import Contact from './Contact';
import Section from './Section';
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
    <div className="App" ref={appRef}>
      <header>
        <div className="info-img">
          {/* <img src="/assets/poza3.jpg" alt="Profile" /> */}
          <div className='image-profile'> </div>
          <span>&lt; Software developer &#47;&gt;</span>
        </div>
        <div className="details">
          <h1>David Gelu-Fanel</h1>
          <br />
          <strong>
            Full-Stack Developer with 4+ years of experience building scalable web applications using React, Node.js, and TypeScript.
            Focused on performance optimization, reusable components, and clean architecture.
          </strong>
        </div>
      </header>
      <div className="main">
        <section className="right">
          <button className="print-btn" onClick={handleSaveAsPDF}>Save <i className="fas fa-file-pdf"></i></button>
          <Contact contacts={contacts} />
          <hr />
          <Section className="skills" title="PROFESSIONAL SKILLS" items={skills} />
          <hr />
          <Section className="education" title="EDUCATION" items={education} />
          <hr />
          <Section className="skill" title="PERSONAL SKILLS" items={personalSkills} />
          <hr />
          <Section className="lang" title="LANGUAGES" items={languages} />
        </section>
        <section className="left">
          <div className="job">
            <h2>WORK EXPERIENCE <i className="fa fa-briefcase" aria-hidden="true"></i></h2>
            {workExperience.map((job, index) => (
              <Box key={index} title={job.title} items={job.items} />
            ))}
          </div>
          <hr />
          <div className="cert">
            <h2>CERTIFICATIONS <i className="fa fa-certificate" aria-hidden="true"></i></h2>
            {certifications.map((cert, index) => (
              <Box key={index} title={cert.title} items={cert.items} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;