import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Header = () => {
  return (
    <div className="flex justify-center items-center my-5">
      <StaticImage
        src="../../images/Logo-Mariana-Caribbean-Sports2.webp"
        alt="Mariana Caribbean Sports"
        placeholder="blurred"
        layout="fixed"
        height={100}
      />
    </div>
  )
}

export default Header
