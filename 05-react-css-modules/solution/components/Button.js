import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import classnames from 'classnames'
import { button, buttonIcons } from '../css-modules'

let styles = {}
Object.assign(styles, button, buttonIcons)

const Button = ({
  icon,
  classNames, 
  depressed, 
  disabled,
  onClick,
  children,
  ...otherProps
}) => {

  const buttonStyleNames = classnames(styles['btn'], classNames,
    {
      [styles['icon']]: icon,
      [styles[`icon-${icon}`]]: icon,
      [styles['depressed']]: depressed,
      [styles['depressed-icon']]: depressed,
      [styles['disabled']]: disabled
    }
  )

  return (
    <button 
      className={ buttonStyleNames } 
      onClick={ onClick }
      { ...otherProps }
    >
      { children }
    </button>
  )

}

const DecoratedButton = CSSModules(Button, styles, { allowMultiple: true })
export { DecoratedButton as Button }
