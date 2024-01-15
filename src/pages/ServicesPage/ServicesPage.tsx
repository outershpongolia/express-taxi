import React from "react"
import './ServicesPage.scss'
import { ContentWrapper, PageWrapper } from "@/ui/container"
import { Header1Text } from "@/ui/text"
import { SERVICES_ARRAY } from "@/constants"
import { ServiceCard } from "./ServiceCard/ServiceCard"
import { uniqueId } from "lodash"

interface IServicesPageProps {}

export const ServicesPage: React.FC<IServicesPageProps> = () => {
    return (
        <PageWrapper className="services-page">
            <Header1Text
                className="services-page__title"
                text='Uslužni horizonti: grad, aerodrom, dostava'
                type="light"
            />

            <ContentWrapper className="services-page__cards">
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