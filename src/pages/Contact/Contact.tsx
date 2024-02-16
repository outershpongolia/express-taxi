'use client'
import { CONTACT_LINKS, ERoute } from "@/constants"
import { ContentWrapper, PageWrapper } from "@/ui/container"
import { Header1Text } from "@/ui/text"
import React from "react"
import './Contact.scss'
import { ContactItem } from "./ContactItem/ContactItem"
import { IoHome } from "react-icons/io5"
import { BsTelephone } from "react-icons/bs"
import { FaMobileAlt, FaWhatsapp, FaViber, FaFacebook } from "react-icons/fa"

interface IContactProps {}

export const Contact: React.FC<IContactProps> = () => {
  return (
    <PageWrapper
      id={ERoute.CONTACT}
      className="contact"
    >
      <ContentWrapper className="contact__wrapper">
        <Header1Text className="contact__title" text='Kontaktirajte nas' />

        <div className="contact__content">
          <div className="contact__items">
            <ContactItem
              icon={<IoHome />}
              info='Svetog Save 6, 25101 Sombor, Republika Srbija'
            />

            <ContactItem
              icon={<BsTelephone />}
              info='(+381) 25 44 40 44'
            />

            <ContactItem
              icon={<FaMobileAlt />}
              info='(+381) 69 1 44 40 44'
            />

            <ContactItem
              icon={<FaWhatsapp />}
              info='(+381) 64 4 359 444'
            />

            <ContactItem
              icon={<FaViber />}
              info='(+381) 64 4 359 444'
            />

            <ContactItem
              icon={<FaFacebook />}
              info='Express Taxi'
              link={CONTACT_LINKS.facebook}
            />
          </div>
        </div>
      </ContentWrapper>
    </PageWrapper>
  )
}