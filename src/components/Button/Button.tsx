import React from "react"
import './Button.scss'

interface IButtonProps {
  label: string
  type?: 'primary' | 'secondary'
  onClick?: () => void
}

export const Button: React.FC<IButtonProps> = ({ label, type='primary', onClick }) => {
  return (
    <button
      className={`button button_${type}`}
      type='button'
      onClick={onClick}
    >
      {label}
    </button>
  )
}