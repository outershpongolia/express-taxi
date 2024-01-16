'use client'
import React, { useCallback } from 'react'
import './Header.scss'
import { Button } from '../Button/Button'
import { ContentWrapper } from '@/ui/container'

// Images
import Image from 'next/image'
import logoIcon from '$/images/logo.svg'
import { ERoute } from '@/constants'
import { HeaderLink } from '../HeaderLink/HeaderLink'
import { scrollToSection } from '@/utilities'

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
	const handleScrollToStart = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault()

        scrollToSection(ERoute.HEADER)
    }, [])

	return (
		<div className='header'>
			<ContentWrapper className='header__wrapper'>
				<Image
					className='header__logo'
					src={logoIcon}
					alt='Express Taxi logo'
					onClick={handleScrollToStart}
					style={{
						width: 'auto',
						height: '100%'
					}}
				/>

				<div className='header__links'>
					<HeaderLink
						title='O nama'
						route={ERoute.ABOUT}
					/>
					<HeaderLink
						title='Usluge'
						route={ERoute.SERVICES}
					/>
					<HeaderLink
						title='Dostupnost'
						route={ERoute.AVAILABILITY}
					/>
					<HeaderLink
						title='Kontakt'
						route={ERoute.CONTACT}
					/>
				</div>

				<Button label='Pozovite nas' />
			</ContentWrapper>
		</div>
	)
}