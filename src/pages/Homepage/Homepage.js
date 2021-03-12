import React from 'react'
import '../../css/styles.css'

// import { Link } from '../../components/atoms/Link/Link'

import AboutMe from '../../components/organisms/AboutMe/AboutMe'
import Footer from '../../components/organisms/Footer/Footer'
import { AboutGavin } from '../../components/organisms/AboutGavin/AboutGavin'



export const Homepage = (props) => {
  return (
    <>
      {/* <Link href={props.href}>{props.linkText}</Link> */}

      <AboutMe />
      <AboutGavin />

      {/* <Footer /> */}

    </>
  )
}




Homepage.defaultProps = {
  href: 'https://gavincrowley.dev/',
  linkText: 'My Work'
};


