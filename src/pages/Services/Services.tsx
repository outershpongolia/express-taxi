import React from "react"
import './Services.scss'
import { ContentWrapper, PageWrapper } from "@/ui/container"
import { Header1Text } from "@/ui/text"
import { ERoute, SERVICES_ARRAY } from "@/constants"
import { ServiceCard } from "./ServiceCard/ServiceCard"
import { uniqueId } from "lodash"

interface IServicesProps {}

export const Services: React.FC<IServicesProps> = () => {
    return (
        <PageWrapper
            id={ERoute.SERVICES}
            className="services"
        >
            <Header1Text
                className="services__title"
                text='Uslužni horizonti: grad, aerodrom, dostava'
                type="light"
            />

            <ContentWrapper className="services__cards">
                {SERVICES_ARRAY.map(service => {
                    return (
                        <ServiceCard
                            key={uniqueId(service.title)}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                        />
                    )
                })}
            </ContentWrapper>
        </PageWrapper>
    )
}