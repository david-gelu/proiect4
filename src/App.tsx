import { useEffect, useRef } from 'react'
import html2pdf from 'html2pdf.js'
import './App.css'
import Box from './Box'
import Contact from './Contact'
import Section from './Section'
import { certifications, contacts, education, languages, personalSkills, skills, workExperience } from './data'

const App = () => {
  const appRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleBeforePrint = () => {
      alert("To ensure proper formatting, please enable 'Background graphics' in the print settings.")
    }
    window.addEventListener('beforeprint', handleBeforePrint)
    return () => window.removeEventListener('beforeprint', handleBeforePrint)
  }, [])

  const handleSaveAsPDF = () => {
    const element = appRef.current
    if (element) {
      document.body.classList.add('pdf-mode')
      html2pdf()
        .from(element)
        .set({
          margin: [0, 0, 0, 0],
          filename: 'DavidGelu-CV.pdf',
          html2canvas: { scale: 2 },
          pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        })
        .save()
        // @ts-ignore: Unreachable code error
        .then(() => {
          document.body.classList.remove('pdf-mode')
          window.location.reload()
        })
    }

  }

  return (
    <div className="App" ref={appRef}>
      <header>
        <div className="info-img">
          {/* <img src="/assets/poza3.jpg" alt="Profile" /> */}
          <div className='image-profile'> </div>
          <span>&lt; Web developer &#47;&gt;</span>
        </div>
        <div className="details">
          <h1>David Gelu-Fanel</h1>
          <br />
          <strong>
            Dedicated and passionate with a strong commitment to continuous growth, leveraging extensive experience in
            full-stack technologies including React, Nextjs, NodeJs, MongoDB, JavaScript, TypeScript, HTML, CSS, Scss,
            Styled - Components and Bootstrap.
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
  )
}

export default App