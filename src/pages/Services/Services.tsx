import React from "react"
import './Services.scss'
import { ContentWrapper, PageWrapper } from "@/ui/container"
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
      <ContentWrapper className="services__cards">
        {SERVICES_ARRAY.map((service, index) => {
          return (
            <ServiceCard
              key={uniqueId(service.title)}
              title={service.title}
              description={service.description}
              image={service.image}
              reversed={index % 2 !== 0}
            />
          )
        })}
      </ContentWrapper>
    </PageWrapper>
  )
}