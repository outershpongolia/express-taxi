import { ERoute } from "@/constants"
import { ContentWrapper, PageWrapper } from "@/ui/container"
import React from "react"

interface IContactProps {}

export const Contact: React.FC<IContactProps> = () => {
    return (
        <PageWrapper
            id={ERoute.CONTACT}
            className="contact"
        >
            <ContentWrapper>
                Hej
            </ContentWrapper>
        </PageWrapper>
    )
}