import React from "react"
import './AboutPage.scss'
import { ContentWrapper, PageWrapper } from "@/ui/container"
import { Header1Text, Paragraph1Text } from "@/ui/text"
import { Button } from "@/components/Button/Button"
import { CarSvg } from "$/icons/CarIcon"

interface IAboutPageProps {}

export const AboutPage: React.FC<IAboutPageProps> = () => {
    return (
        <PageWrapper className="about-page">
            <ContentWrapper className="about-page__wrapper">
                <div className="about-page__circle">
                    <div className="about-page__svg-wrapper">
                        <CarSvg
                            className="about-page__svg"
                            color="#FEFF86"
                            width={48}
                            height={30}
                        />
                    </div>
                </div>

                <Header1Text
                    className="about-page__title"
                    text='Putničke priče'
                    type='light'
                />

                <div className="about-page__margin">
                    <Paragraph1Text
                        className="about-page__text"
                        text='In a competitive environment, where noise and information abound, a story that expresses your unique voice and identity and is told well stands out from the rest, makes a real impact and leads to success.'
                        type='light'
                    />
                    <Button label="Pogledaj nase usluge" type='secondary' />
                </div>
            </ContentWrapper>
        </PageWrapper>
    )
}