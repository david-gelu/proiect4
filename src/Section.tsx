import React from 'react'

interface SectionProps {
  className: string
  title: string
  items: (string | { skill: string, icon: string })[]
  icon?: string
}

const Section: React.FC<SectionProps> = ({ className, title, items, icon }) => (
  <div className={className}>
    <h2>{title} {icon && <i className={`fa ${icon}`} aria-hidden="true"></i>}</h2>
    <ul>
      {items.map((item, index) => (
        typeof item === 'string' ? (
          <li key={index}>{item}</li>
        ) : (
          <li key={index}>
            <span>{item.skill}</span>
            <i className={`fas ${item.icon}`}></i>
          </li>
        )
      ))}
    </ul>
  </div>
)

export default Section