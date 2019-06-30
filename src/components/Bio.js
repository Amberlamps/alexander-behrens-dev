import React from 'react'

import ContentWrapper from './ContentWrapper';
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "alexander.behrens.84@gmail.com",
    size: 56,
  })

  return (
    <ContentWrapper>
      <div className={`
        ${styles.Bio}
        ${props.className || ''}
      `}>
        <img src={photoURL} alt="Me" />
        <div>
          Hi, I am Alex. Welcome to my professional blog about software development. Follow me on Github, Twitter, Linkedin, RSS
        </div>
      </div>
    </ContentWrapper>
  )
}

export default Bio
