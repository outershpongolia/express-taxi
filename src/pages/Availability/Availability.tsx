import React from "react"
import './Availability.scss'
import { ContentWrapper, PageWrapper, TextWrapper } from "@/ui/container"
import { Header1Text, Paragraph1Text } from "@/ui/text"
import { AVAILABILITY_CONTENT_ARRAY, ERoute } from "@/constants"
import { AvailabilityItem } from "./AvailabilityItem/AvailabilityItem"
import { uniqueId } from "lodash"

interface IAvailabilityProps {}

export const Availability: React.FC<IAvailabilityProps> = () => {
  return (
    <PageWrapper
      id={ERoute.AVAILABILITY}
      className="availability"
    >
      <ContentWrapper className="availability__wrapper">
        <TextWrapper className="availability__text-wrapper">
          <Header1Text text='Gradski ritam i putevi' />

          <Paragraph1Text
            text='Naša usluga čeka u koracima vaše misli, spremna da pretvori želju u stvarnost. Trenutna vožnja - jedan poziv, jedna avantura.'
          />
        </TextWrapper>

        <div className="availability__list">
          {AVAILABILITY_CONTENT_ARRAY.map(item => {
            return (
              <AvailabilityItem
                key={uniqueId(item.title)}
                title={item.title}
                text={item.description}
                icon={item.icon}
              />
            )
          })}
        </div>
      </ContentWrapper>
    </PageWrapper>
  )
}