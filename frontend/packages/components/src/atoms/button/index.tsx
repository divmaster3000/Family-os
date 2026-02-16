import React from 'react'

import { ButtonSize, ButtonType, ThemePalette, ButtonVariant } from '@packages/core'
import clsx from 'clsx'

import styles from './Button.module.css'

type ButtonProps = {
  type?: ButtonType
  title?: string
  onClick: () => void
  isDisabled?: boolean
  isLoading?: boolean
  size?: ButtonSize
  variant: ButtonVariant
  palette: ThemePalette
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button = ({
  variant = 'filled',
  type = 'button',
  title,
  size = 'medium',
  isDisabled = false,
  palette = 'primary',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(styles.button, styles[size], styles[variant], styles[palette], {
        [styles.disabled]: isDisabled,
      })}
    >
      <div className={clsx(styles.button_content, styles[size], styles[variant], styles[palette])}>
        {LeftIcon && <div>{LeftIcon}</div>}
        {title}
        {RightIcon && <div>{RightIcon}</div>}
      </div>
    </button>
  )
}
