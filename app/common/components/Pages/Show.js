//app/components/Pages/Show.js

import React, { PropTypes } from 'react'

const ShowPage = ({ title, content }) => {
  return (
    <article>
      <h1>{title}</h1>

      <hr />
      
      <p>
        {content}
      </p>
    </article>
  )
}

ShowPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default ShowPage
