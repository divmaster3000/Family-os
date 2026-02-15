type ButtonProps  = {
    type?: "button" | "submit" | "reset",
    title: string
}

export const Button = ({ type = "button", title }: ButtonProps) => (
    <button type={type}>
        {title}
    </button>
);