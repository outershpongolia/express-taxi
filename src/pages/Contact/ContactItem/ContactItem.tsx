import React from 'react'
import './ContactItem.scss'
import { Paragraph1Text } from '@/ui/text'
import Link from 'next/link'
import clsx from 'clsx'

interface IContactItemProps {
  icon: React.ReactNode
  info: string
  link?: string
}

export const ContactItem: React.FC<IContactItemProps> = ({ icon, info, link }) => {
  return (
    <Link
      className={clsx('contact-item', {
        ['contact-item_not-clickable']: !link
      })}
      href={link || ''}
    >
      {icon}

      <Paragraph1Text text={info} />
    </Link>
  )
}