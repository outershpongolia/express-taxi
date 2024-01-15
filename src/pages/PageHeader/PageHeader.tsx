import React from "react"
import './PageHeader.scss'
import { PageWrapper, TextWrapper } from "@/ui/container"
import { Header1Text, Paragraph1Text } from "@/ui/text"

interface IPageHeaderProps {}

export const PageHeader: React.FC<IPageHeaderProps> = () => {
    return (
        <PageWrapper className="page-header">
            <TextWrapper className="page-header__wrapper">
                <Header1Text
                    className="page-header__title"
                    text="Najbolji taxi u Somboru"
                    type="light"
                />

                <Paragraph1Text
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    type='light'
                />
            </TextWrapper>
        </PageWrapper>
    )
}