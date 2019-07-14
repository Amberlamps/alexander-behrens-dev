import React from 'react'

import Button from './Button';
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
          Hey there! My name is Alex and this is my personal blog about software development.
          Follow me on
          <Button name="github-circled-1" url="https://github.com/Amberlamps"></Button>
          <Button name="linkedin" url="https://www.linkedin.com/in/alexander-behrens-4b2a7772/"></Button>
          <Button name="twitter" url="https://twitter.com/amberlamps84"></Button>
          <Button name="stackoverflow" url="https://stackexchange.com/users/1225680/amberlamps"></Button>
          <Button name="rss" url="/rss.xml"></Button>
          .
        </div>
      </div>
    </ContentWrapper>
  )
}

export default Bio
