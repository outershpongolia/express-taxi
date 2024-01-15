import React from 'react'
import './Link.scss'

interface ILinkProps {
    title: string
    onClick?: () => void
}

export const Link: React.FC<ILinkProps> = ({ title, onClick }) => {
    return (
        <div
            className='link'
            onClick={onClick}
        >
            {title}
        </div>
    )
}