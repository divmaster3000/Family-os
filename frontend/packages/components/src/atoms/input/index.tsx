import clsx from 'clsx'

type InputProps = {
  label?: string
  name: string
  onChange: () => void
  type: 'text'
}

export const Input = ({ label, name, onChange, type }: InputProps) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input name={name} onChange={onChange} type={type} />
    </div>
  )
}
