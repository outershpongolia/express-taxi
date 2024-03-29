import React, { PropsWithChildren } from "react"
import './styles.scss'
import clsx from "clsx"

interface ITextProps extends PropsWithChildren {
  text: string
  className?: string
}

export const Header1Text: React.FC <ITextProps> = ({ text, className }) => <div className={clsx('header1-text', className)}>{text}</div>
export const Header2Text: React.FC <ITextProps> = ({ text, className }) => <div className={clsx('header2-text', className)}>{text}</div>
export const Header3Text: React.FC <ITextProps> = ({ text, className }) => <div className={clsx('header3-text', className)}>{text}</div>
export const Paragraph1Text: React.FC <ITextProps> = ({ text, className }) => <div className={clsx('paragraph1-text', className)}>{text}</div>
export const Paragraph2Text: React.FC <ITextProps> = ({ text, className }) => <div className={clsx('paragraph2-text', className)}>{text}</div>