import React from "react"
import "./ServiceCard.scss"
import { TextWrapper } from "@/ui/container"
import { Header2Text, Paragraph1Text } from "@/ui/text"
import Image, { StaticImageData } from "next/image"

interface IServiceCardProps {
    title: string
    description: string
    image: string | StaticImageData
}

export const ServiceCard: React.FC<IServiceCardProps> = ({ title, description, image }) => {
    return (
        <div className="service-card">
            <TextWrapper className="service-card__text-wrapper">
                <Header2Text
                    className="service-card__title"
                    text={title}
                    type="light"
                />

                <Paragraph1Text
                    className="service-card__text"
                    text={description}
                    type="light"
                />
            </TextWrapper>

            <div className="service-card__image">
                <Image
                    src={image}
                    alt=""
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '16px'
                    }}
                />
            </div>
        </div>
    )
}