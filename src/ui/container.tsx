import React, { PropsWithChildren } from 'react'
import './styles.scss'
import clsx from 'clsx'
import { ERoute } from '@/constants'

interface IContainerProps extends PropsWithChildren {
    className?: string
}

interface IPageWrapperProps extends IContainerProps {
    id: ERoute
}

export const PageWrapper: React.FC<IPageWrapperProps> = ({ id, className, children }) => <div id={id} className={clsx('page-wrapper', className)}>{children}</div>
export const ContentWrapper: React.FC<IContainerProps> = ({ className, children }) => <div className={clsx('content-wrapper', className)}>{children}</div>
export const TextWrapper: React.FC<IContainerProps> = ({ className, children }) => <div className={clsx('text-wrapper', className)}>{children}</div>