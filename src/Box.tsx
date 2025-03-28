import React from 'react'

interface BoxProps {
  title: string
  imageSrc?: string
  items: string[]
}

const Box: React.FC<BoxProps> = ({ title, imageSrc, items }) => (
  <div className="boxs">
    <h3>
      {imageSrc && <img src={imageSrc} alt="" />} {title}
    </h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
)

export default Box