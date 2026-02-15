import styles from "./Button.module.css"
import { ButtonSize, ButtonType, ThemePalette, ButtonVariant } from "@packages/core"
import clsx from "clsx"

type ButtonProps  = {
  type?: ButtonType,
  title: string,
  onClick: () => void,
  isDisabled?: boolean,
  isLoading?: boolean,
  size?: ButtonSize,
  variant: ButtonVariant,
  palette: ThemePalette
}

export const Button = ({ variant = "filled", type = "button", title, size = "medium", isDisabled = false, palette = "primary" }: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        styles[size],
        styles[variant],
        styles[palette],
        {
          [styles.disabled]: isDisabled,
        }
      )}>
        {title}
    </button>
  )
}
