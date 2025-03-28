import React from 'react'

interface ContactProps {
  contacts: {
    icon: string
    text: string
    link?: string
  }[]
}

const Contact: React.FC<ContactProps> = ({ contacts }) => (
  <div className="contact">
    <h2>CONTACT</h2>
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          {contact.link ? (
            <a href={contact.link}>
              <p>
                <i className={`fa ${contact.icon}`} aria-hidden="true"></i>
                {contact.text}
              </p>
            </a>
          ) : (
            <p>
              <i className={`fa ${contact.icon}`} aria-hidden="true"></i>
              {contact.text}
            </p>
          )}
        </li>
      ))}
    </ul>
  </div>
)

export default Contact