import React from "react"
import './PageHeader.scss'
import { PageWrapper, TextWrapper } from "@/ui/container"
import { Header1Text, Paragraph1Text } from "@/ui/text"
import { ERoute } from "@/constants"

interface IPageHeaderProps {}

export const PageHeader: React.FC<IPageHeaderProps> = () => {
  return (
    <PageWrapper
      id={ERoute.HEADER}
      className="page-header"
    >
      <TextWrapper className="page-header__wrapper">
        <Header1Text
          className="page-header__title"
          text="Najbolji somborski taxi"
        />

        <Paragraph1Text
          text='Pozovite nas i nas mali porodicni biznis stize do vas, brzo i jednostavno.'
        />
      </TextWrapper>
    </PageWrapper>
  )
}