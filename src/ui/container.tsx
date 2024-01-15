import React, { PropsWithChildren } from 'react'
import './styles.scss'
import clsx from 'clsx'

interface IContainerProps extends PropsWithChildren {
    className?: string
}

export const PageWrapper: React.FC<IContainerProps> = ({ className, children }) => <div className={clsx('page-wrapper', className)}>{children}</div>
export const ContentWrapper: React.FC<IContainerProps> = ({ className, children }) => <div className={clsx('content-wrapper', className)}>{children}</div>
export const TextWrapper: React.FC<IContainerProps> = ({ className, children }) => <div className={clsx('text-wrapper', className)}>{children}</div>