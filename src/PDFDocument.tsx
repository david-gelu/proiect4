import { Document, Page, Text, View, StyleSheet, Font, Link } from '@react-pdf/renderer';
import { certifications, contacts, languages, personalSkills, skills, workExperience } from './data';
import {
  faMapMarker, faMobile, faEnvelope, faLink, faCheck
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import FontAwesomeIcon from './components/FontAwesomeIcon';
import { Buffer as BufferType } from 'buffer';

declare global { interface Window { Buffer: typeof BufferType; } }
if (typeof window !== 'undefined') window.Buffer = BufferType;

const C = {
  green: '#0d4f47',
  greenMid: '#1D9E75',
  greenLight: '#5DCAA5',
  greenPale: '#9FE1CB',
  greenSummary: '#d4f0e8',
  greenAtsBg: '#E1F5EE',
  greenAtsBdr: '#9FE1CB',
  sidebarBg: '#f7f9f8',
  white: '#ffffff',
  text: '#1a1a1a',
  textMid: '#2c2c2c',
  textMuted: '#666666',
  divider: '#ebebeb',
  border: '#e0e0e0',
  certItem: '#444444',
};

// Înălțimea mini-header-ului — folosită în paddingTop pe Page
// ca tot conținutul să înceapă sub el pe pagina 2
const MINI_HEADER_HEIGHT = 26;

Font.register({
  family: 'Helvetica',
  fonts: [{ src: 'Helvetica' }, { src: 'Helvetica-Bold', fontWeight: 'bold' }],
});
Font.registerHyphenationCallback(w => [w]);

const s = StyleSheet.create({
  // paddingTop = înălțimea mini-header-ului, aplicat pe TOATE paginile.
  // Pe pagina 1 header-ul real acoperă vizual acel spațiu cu marginTop negativ.
  page: {
    fontFamily: 'Helvetica',
    backgroundColor: C.white,
    // paddingTop: MINI_HEADER_HEIGHT,
  },

  // ── Mini-header fixed ─────────────────────────────────────────────────
  // `fixed` = apare pe fiecare pagină în același loc.
  // Pe p.1 e acoperit de header-ul real care are marginTop negativ.
  // Pe p.2+ e vizibil și ocupă exact MINI_HEADER_HEIGHT px sus.
  miniHeader: {
    height: MINI_HEADER_HEIGHT,
    backgroundColor: C.green,
    paddingHorizontal: 28,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  miniName: { fontSize: 10, fontWeight: 'bold', color: C.white },
  miniSep: { fontSize: 10, color: C.greenLight },
  miniTitle: { fontSize: 9, color: C.greenPale, letterSpacing: 0.8 },

  // ── Header complet p.1 ────────────────────────────────────────────────
  // marginTop negativ = urcă header-ul peste spațiul paddingTop de pe Page,
  // acoperind mini-header-ul de pe prima pagină
  header: {
    backgroundColor: C.green,
    padding: '16 28 14',
    marginTop: -MINI_HEADER_HEIGHT,
  },
  hName: { fontSize: 20, fontWeight: 'bold', color: C.white, marginBottom: 3 },
  hTitle: { fontSize: 11, color: C.greenPale, letterSpacing: 1.5, marginBottom: 8 },
  hSummary: { fontSize: 10.5, color: C.greenSummary, lineHeight: 1.6, marginBottom: 10, maxWidth: 420 },
  hContacts: { flexDirection: 'row', flexWrap: 'wrap' },
  hContactItem: { flexDirection: 'row', alignItems: 'center', marginRight: 14, marginBottom: 2 },
  hContactDot: { width: 4, height: 4, borderRadius: 2, backgroundColor: C.greenLight, marginRight: 4 },
  hContactText: { fontSize: 10.5, color: C.greenPale, textDecoration: 'none' },

  // ── Body ─────────────────────────────────────────────────────────────
  body: { flexDirection: 'row' },

  // ── Sidebar ───────────────────────────────────────────────────────────
  sidebar: {
    width: 150,
    backgroundColor: C.sidebarBg,
    padding: '14 12',
    borderRight: `0.5px solid ${C.border}`,
  },
  sectionTitle: {
    fontSize: 10.5, fontWeight: 'bold', color: C.green, letterSpacing: 1,
    textTransform: 'uppercase', borderBottom: `1.5px solid ${C.green}`,
    paddingBottom: 3, marginBottom: 8, marginTop: 14,
  },
  firstSection: { marginTop: 0 },

  skillItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 2 },
  skillDot: { width: 4, height: 4, borderRadius: 2, backgroundColor: C.green, marginRight: 5 },
  skillText: { fontSize: 10.5, color: C.textMid },

  eduDegree: { fontSize: 10.5, fontWeight: 'bold', color: C.green, lineHeight: 1.4 },
  eduSchool: { fontSize: 10.5, color: C.textMid, lineHeight: 1.4 },
  eduYear: { fontSize: 10.5, color: '#888', lineHeight: 1.4, marginBottom: 6 },

  certGroup: { marginBottom: 6 },
  certTitle: { fontSize: 10.5, fontWeight: 'bold', color: C.green },
  certItem: { fontSize: 10, color: C.certItem, paddingLeft: 6, lineHeight: 1.4 },

  langItem: { fontSize: 10.5, color: C.textMid, marginBottom: 2 },

  pskillItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 2 },
  pskillDot: { width: 4, height: 4, borderRadius: 2, backgroundColor: C.greenLight, marginRight: 5 },
  pskillText: { fontSize: 10.5, color: C.textMid },

  // ── Main ──────────────────────────────────────────────────────────────
  main: { flex: 1, padding: '14 20' },

  job: { marginBottom: 12, paddingBottom: 12, borderBottom: `0.5px solid ${C.divider}` },
  jobLast: { marginBottom: 0, paddingBottom: 0, borderBottom: 'none' },
  jobTitle: { fontSize: 11.5, fontWeight: 'bold', color: C.green, marginBottom: 2 },
  jobCompany: { fontSize: 10.5, color: C.textMuted, marginBottom: 5 },
  bulletRow: { flexDirection: 'row', marginBottom: 2 },
  bulletDot: {
    width: 3, height: 3, borderRadius: 2,
    backgroundColor: C.green, marginTop: 4, marginRight: 5, flexShrink: 0,
  },
  bulletText: { fontSize: 10.5, color: C.textMid, lineHeight: 1.5, flex: 1 },
});

const JobItem = ({ job, last }: { job: typeof workExperience[0]; last: boolean }) => {
  const parts = job.title.split('—');
  return (
    <View style={last ? s.jobLast : s.job} wrap={false}>
      <Text style={[
        s.jobTitle,
        job.title.split('—')[0].trim().includes('Head of Fresh Department')
          ? { paddingTop: 14 }
          : { paddingTop: 0 }
      ]}>{parts[0].trim()}</Text>
      <Text style={s.jobCompany}>{parts.slice(1).join('—').trim()}</Text>
      {job.items.map((item, j) => (
        <View key={j} style={s.bulletRow}>
          <View style={s.bulletDot} />
          <Text style={s.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

const PDFDocument = () => (
  <Document>
    <Page size="A4" style={s.page}>

      {/* Mini-header fixed — pe p.1 e acoperit de header-ul real,
          pe p.2+ e vizibil în spațiul paddingTop al paginii */}
      <View style={s.miniHeader} fixed>
        <Text style={s.miniName}>David Gelu-Fanel</Text>
        <Text style={s.miniSep}>·</Text>
        <Text style={s.miniTitle}>FULL-STACK DEVELOPER</Text>
      </View>

      {/* Header complet — marginTop negativ îl urcă peste paddingTop,
          acoperind mini-header-ul pe prima pagină */}
      <View style={s.header}>
        <Text style={s.hName}>David Gelu-Fanel</Text>
        <Text style={s.hTitle}>FULL-STACK DEVELOPER</Text>
        <Text style={s.hSummary}>
          Full-Stack Developer with 4+ years of experience building real-time analytics dashboards
          and scalable web applications using React, TypeScript, and Node.js. Focused on performance
          optimization, reusable component systems, and clean architecture.
        </Text>
        <View style={s.hContacts}>
          {contacts.map((c, i) => (
            <View key={i} style={s.hContactItem}>
              <View style={s.hContactDot} />
              {c.url
                ? <Link href={c.url} style={s.hContactText}>{c.text}</Link>
                : <Text style={s.hContactText}>{c.text}</Text>
              }
            </View>
          ))}
        </View>
      </View>

      {/* Body — sidebar și main curg natural pe câte pagini e nevoie */}
      <View style={s.body}>

        <View style={s.sidebar} >
          <Text style={[s.sectionTitle, s.firstSection]}>Technical Skills</Text>
          {skills.map((skill, i) => (
            <View key={i} style={s.skillItem}>
              <View style={s.skillDot} />
              <Text style={s.skillText}>{skill}</Text>
            </View>
          ))}

          <Text style={s.sectionTitle}>Education</Text>
          <Text style={s.eduDegree}>Bachelor's Degree — Marketing</Text>
          <Text style={s.eduSchool}>Faculty of Economic Sciences</Text>
          <Text style={s.eduYear}>2022 – 2025</Text>
          <Text style={s.eduDegree}>Front-End Web Design</Text>
          <Text style={s.eduSchool}>ANC Accredited — IT School</Text>
          <Text style={s.eduYear}>2019</Text>

          <Text style={s.sectionTitle}>Certifications</Text>
          {certifications.map((cert, i) => (
            <View key={i} style={s.certGroup}>
              <Text style={s.certTitle}>{cert.title}</Text>
              {cert.items.map((item, j) => (
                <Text key={j} style={s.certItem}>{item}</Text>
              ))}
            </View>
          ))}

          <Text style={s.sectionTitle}>Languages</Text>
          {languages.map((lang, i) => (
            <Text key={i} style={s.langItem}>{lang}</Text>
          ))}

          <Text style={s.sectionTitle}>Personal Skills</Text>
          {personalSkills.map((ps, i) => (
            <View key={i} style={s.pskillItem}>
              <View style={s.pskillDot} />
              <Text style={s.pskillText}>{ps.skill}</Text>
            </View>
          ))}
        </View>

        <View style={s.main} wrap>
          <Text style={[s.sectionTitle, s.firstSection]}>Work Experience</Text>
          {workExperience.map((job, i) => (
            <JobItem key={i} job={job} last={i === workExperience.length - 1} />
          ))}
        </View>
      </View>

    </Page>
  </Document>
);

export default PDFDocument; 