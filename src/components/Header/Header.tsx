import React from 'react'
import './Header.scss'
import { Link } from '../Link/Link'
import { Button } from '../Button/Button'
import { ContentWrapper } from '@/ui/container'

// Images
import Image from 'next/image'
import logoIcon from '$/images/logo.svg'

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
	return (
		<div className='header'>
			<ContentWrapper className='header__wrapper'>
				<Image
					src={logoIcon}
					alt='Express Taxi logo'
					onClick={undefined}
					style={{
						width: 'auto',
						height: '100%'
					}}
				/>

				<div className='header__links'>
					<Link title='O nama' />
					<Link title='Usluge' />
					<Link title='Dostupnost' />
				</div>

				<Button label='Pozovite nas' />
			</ContentWrapper>
		</div>
	)
}