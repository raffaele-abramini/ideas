import React from 'react'
import PropTypes from 'prop-types'
import cl from 'classnames'
import { innerContainer, centralColumn } from '../styles/_layout.scss'
import { textCentered } from '../styles/_utils.scss'

const OfflineView = ({}) => {
  return (
    <div className={innerContainer}>
      <div className={cl({
        [textCentered] : true,
        [centralColumn] : true,
      })}>
        <h1>
          oh oh!
        </h1>

        <div>
          You are offline :(
        </div>
      </div>
    </div>
  )
}

OfflineView.propTypes = {}

export default OfflineView