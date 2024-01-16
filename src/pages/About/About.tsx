import React from "react"
import './About.scss'
import { ContentWrapper, PageWrapper } from "@/ui/container"
import { Header1Text, Paragraph1Text } from "@/ui/text"
import { Button } from "@/components/Button/Button"
import { CarSvg } from "$/icons/CarIcon"
import { ERoute } from "@/constants"

interface IAboutProps {}

export const About: React.FC<IAboutProps> = () => {
    return (
        <PageWrapper
            id={ERoute.ABOUT}
            className="about"
        >
            <ContentWrapper className="about__wrapper">
                <div className="about__circle">
                    <div className="about__svg-wrapper">
                        <CarSvg
                            className="about__svg"
                            color="#FEFF86"
                            width={48}
                            height={30}
                        />
                    </div>
                </div>

                <Header1Text
                    className="about__title"
                    text='Putničke priče'
                    type='light'
                />

                <div className="about__margin">
                    <Paragraph1Text
                        className="about__text"
                        text='In a competitive environment, where noise and information abound, a story that expresses your unique voice and identity and is told well stands out from the rest, makes a real impact and leads to success.'
                        type='light'
                    />
                    <Button label="Pogledaj nase usluge" type='secondary' />
                </div>
            </ContentWrapper>
        </PageWrapper>
    )
}