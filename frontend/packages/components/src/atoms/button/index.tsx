import styles from "./Button.module.css"
import { ButtonSize, ButtonType } from "@packages/core"
import clsx from "clsx"

type ButtonProps  = {
    type?: ButtonType,
    title: string,
    onClick: () => void,
    isDisabled?: boolean,
    isLoading?: boolean,
    size?: ButtonSize
}

export const Button = ({ type = "button", title, size = "medium" }: ButtonProps) => {

    return (
        <button type={type} className={clsx(
            styles.button,
            styles[size]
        )}>
            {title}
        </button>
    )
}