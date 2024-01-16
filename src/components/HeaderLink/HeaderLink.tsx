'use client'
import React, { useCallback } from 'react'
import './HeaderLink.scss'
import { ERoute } from '@/constants'
import Link from 'next/link'
import { scrollToSection } from '@/utilities'

interface IHeaderLinkProps {
    title: string
    route: ERoute
}

export const HeaderLink: React.FC<IHeaderLinkProps> = ({ title, route }) => {
    const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()

        scrollToSection(route)
    }, [route])

    return (
        <Link
            className='header-link'
            href={route}
            onClick={handleScroll}
        >
            {title}
        </Link>
    )
}