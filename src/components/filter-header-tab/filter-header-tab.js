import React from 'react'
import PropTypes from 'prop-types'
import cl from 'classnames'
import HeaderTab from '../header-tab/header-tab'
import headerTabClasses from '../header-tab/header-tab.scss'
import header from '../header/header.scss'
import icon from 'styles/_icon.scss'
import button from 'styles/_button.scss'

class FilterTab extends React.PureComponent {
  constructor() {
    super()
  }

  componentDidMount() {
    this.listenForBodyClick()
  }

  listenForBodyClick() {
    document.body.addEventListener('click', (e) => {
      if (e.target.closest(`.${headerTabClasses.tab}`)
        || !this.props.isOpen) return

      this.props.triggerFilter()
    })
  }

  render() {
    const {
      toggleCompletedIdeas, hideCompletedIdeas, orderByDeadline, toggleOrderByDeadline
    }
      = this.props

    return (
      <div>
        <div className={headerTabClasses.row}>
          <button
            className={cl(header.button, button.withIcon)}
            onClick={toggleCompletedIdeas}>
            <svg className={icon.icon}>
              <use xlinkHref={hideCompletedIdeas ? '#toggle-on' : '#toggle-off'}/>
            </svg>

            Hide completed
          </button>
        </div>
        <div className={headerTabClasses.row}>
          <button
            className={cl(header.button, button.withIcon)}
            onClick={toggleOrderByDeadline}>
            <svg className={icon.icon}>
              <use xlinkHref={orderByDeadline ? '#toggle-on' : '#toggle-off'}/>
            </svg>

            Order by deadline
          </button>
        </div>
      </div>
    )
  }
}

FilterTab.propTypes = {
  hideCompletedIdeas: PropTypes.bool,
  toggleCompletedIdeas: PropTypes.func,
  orderByDeadline: PropTypes.bool,
  toggleOrderByDeadline: PropTypes.func
}

export default HeaderTab({
  icon: "dots",
  label: "Filters"
})(FilterTab)