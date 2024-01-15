import React from 'react'
import './AvailabilityItem.scss'
import { Header3Text, Paragraph2Text } from '@/ui/text'

interface IAvailabilityItemProps {
    title: string
    text: string
    icon: React.ReactNode
}

export const AvailabilityItem: React.FC<IAvailabilityItemProps> = ({ title, text, icon }) => {
    return (
        <div className='availability-item'>
            {icon}

            <Header3Text text={title} />

            <Paragraph2Text text={text} />
        </div>
    )
}