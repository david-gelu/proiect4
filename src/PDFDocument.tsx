import { Document, Page, Text, View, StyleSheet, Image, Font, Link } from '@react-pdf/renderer';
import { certifications, contacts, education, languages, personalSkills, skills, workExperience } from './data';
import {
  faMapMarker,
  faMobile,
  faEnvelope,
  faLink,
  faCertificate,
  faBriefcase,
  faPeopleGroup,
  faTriangleExclamation,
  faClock,
  faFilePdf,
  faCheck
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import FontAwesomeIcon from './components/FontAwesomeIcon';
import { Buffer as BufferType } from 'buffer';
import { getCssVariable } from './utils/getCssVariable';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Buffer: typeof BufferType;
  }
}

if (typeof window !== 'undefined') {
  window.Buffer = BufferType;
}

// Replace the static colors object with a function that gets the current values
const useThemeColors = () => {
  const [colors, setColors] = useState({
    primary: '#013440',    // default fallback
    text: '#63f2d8',      // default fallback
    accent: '#04bf9d',    // default fallback
    background: '#dcf2e8', // default fallback
    darkText: '#010326',  // default fallback
  });

  useEffect(() => {
    setColors({
      primary: getCssVariable('--primary-color'),
      text: getCssVariable('--text-color'),
      accent: getCssVariable('--accent-color'),
      background: getCssVariable('--light-background'),
      darkText: getCssVariable('--dark-text'),
    });
  }, []);

  return colors;
};

type IconType = 'fa-map-marker' | 'fa-mobile' | 'fa-envelope-o' | 'fa-linkedin' |
  'fa-link' | 'fa-github' | 'fa-certificate' | 'fa-briefcase' |
  'fa-people-group' | 'fa-triangle-exclamation' | 'fa-clock' | 'fa-file-pdf' | 'fa-check';

const getIcon = (iconType: IconType) => {
  const icons = {
    'fa-map-marker': faMapMarker,
    'fa-mobile': faMobile,
    'fa-envelope-o': faEnvelope,
    'fa-linkedin': faLinkedin,
    'fa-link': faLink,
    'fa-github': faGithub,
    'fa-certificate': faCertificate,
    'fa-briefcase': faBriefcase,
    'fa-people-group': faPeopleGroup,
    'fa-triangle-exclamation': faTriangleExclamation,
    'fa-clock': faClock,
    'fa-file-pdf': faFilePdf,
    'fa-check': faCheck,
  };
  return icons[iconType] || faMapMarker
}

Font.register({
  family: 'Helvetica',
  fonts: [
    {
      src: 'Helvetica',
      fontWeight: 'normal',
    },
    {
      src: 'Helvetica-Bold',
      fontWeight: 'bold',
    }
  ],
});

interface ContactItemProps {
  icon: IconType;
  text: string;
  url?: string;
}



const PDFDocument = () => {
  const colors = useThemeColors();

  const styles = StyleSheet.create({
    page: {
      lineHeight: 0.9,
      fontFamily: 'Helvetica',
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      backgroundColor: colors.primary,
      padding: 20,
    },
    imageProfile: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginRight: 20,
      backgroundColor: colors.text,
    },
    headerContent: {
      flex: 1,
    },
    webDeveloperText: {
      fontSize: 12,
      color: colors.text,
      marginBottom: 5,
      fontWeight: 'bold',
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: ' 20 40',
      color: colors.text,
      textAlign: 'center',
    },
    description: {
      fontSize: 12,
      color: colors.text,
    },
    main: {
      flexDirection: 'row',
    },
    rightSection: {
      width: '30%',
      padding: 5,
      backgroundColor: colors.primary,
    },
    leftSection: {
      width: '70%',
      padding: 5,
      backgroundColor: colors.background,
      border: `1px solid ${colors.darkText}`,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      color: colors.darkText,
      textTransform: 'uppercase',
    },
    leftSectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      padding: 5,
      color: colors.text,
      textTransform: 'uppercase',
    },
    contactItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 4,
    },
    contactText: {
      fontSize: 11,
      color: colors.text,
    },
    icon: {
      fontSize: 14,
      color: colors.accent,
    },
    skillItem: {
      width: '100%',
      fontSize: 11,
      color: colors.text,
      flexWrap: 'wrap',
      flexShrink: 1,
      paddingRight: 5,
    },
    leftSkillItem: {
      fontSize: 11,
      marginBottom: 5,
      color: colors.darkText,
      wordBreak: 'break-word',
      padding: 4,
    },
    experienceBox: {
      marginBottom: 5,
      padding: 5,
      backgroundColor: colors.background,
    },
    experienceTitle: {
      fontSize: 13,
      fontWeight: 'bold',
      marginBottom: 5,
      color: colors.primary,
    },
    experienceItem: {
      fontSize: 11,
      marginBottom: 5,
      color: colors.darkText,
      paddingLeft: 4,
    },
    divider: {
      borderBottom: `1px solid ${colors.darkText}`,
      marginVertical: 5,
      opacity: 0.5,
    },
    leftDivider: {
      borderBottom: `1px solid ${colors.text}`,
      marginVertical: 5,
      opacity: 0.5,
    },
    certHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    link: {
      textDecoration: 'none',
    },
    linkText: {
      textDecoration: 'none',
    },
  });
  const ContactItem = ({ icon, text, url }: ContactItemProps) => {
    const content = (
      <View style={styles.contactItem}>
        <FontAwesomeIcon
          faIcon={getIcon(icon)}
          style={{
            width: 14,
            height: 14,
            color: colors.accent,
            marginRight: 8,
            marginTop: -5,
          }}
        />
        <Text style={[styles.contactText, ...(url ? [styles.linkText] : [])]}>{text}</Text>
      </View>
    );

    return url ? (
      <Link src={url} style={styles.link}>
        {content}
      </Link>
    ) : (
      content
    );
  };
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={{ width: '30%', display: 'flex', flexDirection: 'column' }}>
            <Image src="/assets/poza3.jpg" style={styles.imageProfile} />
            <Text style={styles.webDeveloperText}>&lt; Software developer /&gt;</Text>
          </View>
          <View style={{ ...styles.headerContent, width: '70%' }}>
            <Text style={styles.name}>David Gelu-Fanel</Text>
            <Text style={styles.description}>
              Dedicated and passionate with a strong commitment to continuous growth, leveraging extensive experience in
              full-stack technologies including React, Nextjs, NodeJs, MongoDB, JavaScript, TypeScript, HTML, CSS, Scss,
              Styled - Components and Bootstrap.
            </Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.rightSection}>
            <View>
              <Text style={styles.leftSectionTitle}>CONTACT</Text>
              {contacts.map((contact, index) => (
                <ContactItem
                  key={index}
                  icon={contact.icon as IconType}
                  text={contact.text}
                  url={contact.url}
                />
              ))}
            </View>
            <View style={styles.leftDivider} />
            <View>
              <Text style={styles.leftSectionTitle}>PROFESSIONAL SKILLS</Text>
              {skills.map((skill, index) => (
                <View key={index} style={styles.contactItem}>
                  <FontAwesomeIcon
                    faIcon={getIcon('fa-check')}
                    style={{
                      width: 14,
                      height: 14,
                      color: colors.accent,
                      marginRight: 8,
                      marginTop: -5,
                      flexShrink: 0,
                    }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={styles.skillItem}>{skill}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.leftDivider} />

            <View>
              <Text style={styles.leftSectionTitle}>EDUCATION</Text>
              {education.map((item, index) => (
                <View key={index} style={styles.contactItem}>
                  <FontAwesomeIcon
                    faIcon={getIcon('fa-check')}
                    style={{
                      width: 14,
                      height: 14,
                      color: colors.accent,
                      marginRight: 8,
                      marginTop: -5,
                    }}
                  />
                  <Text style={styles.skillItem}>{item}</Text>
                </View>
              ))}
            </View>

            <View style={styles.leftDivider} />

            <View>
              <Text style={styles.leftSectionTitle}>PERSONAL SKILLS</Text>
              {personalSkills.map((skill, index) => (
                <Text key={index} style={{ ...styles.skillItem, marginLeft: 23 }}>{skill.skill}</Text>
              ))}
            </View>
            <View style={styles.leftDivider} />

            <View>
              <Text style={styles.leftSectionTitle}>LANGUAGES</Text>
              {languages.map((lang, index) => (
                <Text key={index} style={{ ...styles.skillItem, marginLeft: 23 }}>{lang}</Text>
              ))}
            </View>
          </View>

          <View style={styles.leftSection}>
            <View>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.sectionTitle}>WORK EXPERIENCE  </Text>
                <FontAwesomeIcon
                  faIcon={getIcon("fa-briefcase")}
                  style={{
                    width: 14,
                    height: 14,
                    color: colors.darkText,
                    marginTop: -7,
                  }}
                />
              </View>
              {workExperience.map((job, index) => (
                <View key={index} style={styles.experienceBox}>
                  <Text style={styles.experienceTitle}>{job.title}</Text>
                  {job.items.map((item, i) => (
                    <Text key={i} style={styles.experienceItem}>• {item}</Text>
                  ))}
                </View>
              ))}
            </View>
            <View style={styles.divider} />
            <View>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.sectionTitle}>CERTIFICATIONS  </Text>
                <FontAwesomeIcon
                  faIcon={getIcon("fa-certificate")}
                  style={{
                    width: 14,
                    height: 14,
                    color: colors.darkText,
                    marginTop: -7,
                  }}
                />
              </View>
              {certifications.map((cert, index) => (
                <View key={index} style={styles.experienceBox}>
                  <View style={styles.certHeader}>
                    <Text style={styles.experienceTitle}>{cert.title}</Text>
                  </View>
                  {cert.items.map((item, i) => (
                    <Text key={i} style={styles.experienceItem}>{item}</Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;