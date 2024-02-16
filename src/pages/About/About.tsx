import React from "react"
import './About.scss'
import { ContentWrapper, PageWrapper } from "@/ui/container"
import { Header1Text, Paragraph1Text } from "@/ui/text"
import { Button } from "@/components/Button/Button"
import { CarSvg } from "$/icons/CarIcon"
import { ERoute } from "@/constants"
import { Circle } from "@/components/Circle/Circle"

interface IAboutProps {}

export const About: React.FC<IAboutProps> = () => {
  return (
    <PageWrapper
      id={ERoute.ABOUT}
      className="about"
    >
      <ContentWrapper className="about__wrapper">
        <Circle className="about__circle">
          <div className="about__svg-wrapper">
            <CarSvg
              className="about__svg"
              color="#FEFF86"
              width={40}
              height={24}
            />
          </div>
        </Circle>

        <Header1Text
          className="about__title"
          text='Putničke priče'
        />

        <div className="about__margin">
          <Paragraph1Text
            className="about__text"
            text='U konkurentnom okruženju, gde buka i informacije obiluju, priča koja izražava tvoj jedinstveni glas i identitet, i koja je dobro ispričana, ističe se od ostalih, stvara pravi utisak i vodi ka uspehu.'
          />
          <Button label="Pogledaj nase usluge" type='secondary' />
        </div>
      </ContentWrapper>
    </PageWrapper>
  )
}