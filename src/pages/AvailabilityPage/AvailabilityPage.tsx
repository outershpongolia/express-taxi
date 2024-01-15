import React from "react"
import './AvailabilityPage.scss'
import { ContentWrapper, PageWrapper, TextWrapper } from "@/ui/container"
import { Header1Text, Paragraph1Text } from "@/ui/text"
import { AVAILABILITY_CONTENT_ARRAY } from "@/constants"
import { AvailabilityItem } from "./AvailabilityItem/AvailabilityItem"
import { uniqueId } from "lodash"

interface IAvailabilityPageProps {}

export const AvailabilityPage: React.FC<IAvailabilityPageProps> = () => {
    return (
        <PageWrapper className="availability-page">
            <ContentWrapper className="availability-page__wrapper">
                <TextWrapper className="availability-page__text-wrapper">
                    <Header1Text text='Gradski ritam i putevi' />

                    <Paragraph1Text
                        text='Naša usluga čeka u koracima vaše misli, spremna da pretvori želju u stvarnost. Trenutna vožnja - jedan poziv, jedna avantura.'
                    />
                </TextWrapper>

                <div className="availability-page__list">
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