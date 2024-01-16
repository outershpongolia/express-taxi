import { IAvailabilityCard, IServiceCard } from "./interfaces"
import { BsSpeedometer } from "react-icons/bs"
import { GiWorld, GiClockwork } from "react-icons/gi"
import carImage1 from '$/images/car-inside.jpg'
import carImage2 from '$/images/car2.jpg'
import carImage3 from '$/images/car3.jpg'

export const enum ERoute {
    HEADER = '/',
    ABOUT = 'about',
    SERVICES = 'services',
    AVAILABILITY = 'availability',
    CONTACT = 'contact'
}

export const AVAILABILITY_CONTENT_ARRAY: IAvailabilityCard[] = [
    {
        title: 'Dostupni gde god da ste',
        description: 'Bilo da se nalazite u centru grada, na aerodromu ili van urbanog područja, naša mreža pokriva svaki kutak. Bez obzira na lokaciju, naši vozači su spremni da vas prevezu do vaše destinacije.',
        icon: <GiWorld className='availability-icon availability-icon_world' />
    },
    {
        title: 'Brzo do vaše vožnje',
        description: 'Naša brza usluga omogućava vožnju u trenutku kad vam zatreba. Sa samo nekoliko klikova ili pozivom, postajemo vaša vožnja koja stiže munjevitom brzinom.',
        icon: <BsSpeedometer className='availability-icon availability-icon_speed' />
    },
    {
        title: '24/7 brza reakcija',
        description: 'Naša usluga je dostupna 24 sata dnevno, 7 dana u nedelji. Bez obzira na vreme ili dan, naša flota je spremna da odgovori na vaš poziv za prevoz, čak i u najnepredvidljivijim trenucima.',
        icon: <GiClockwork className='availability-icon availability-icon_compass' />
    }
]

export const SERVICES_ARRAY: IServiceCard[] = [
    {
        title: 'Otkrijte grad u našem taktu',
        description: 'Udobne vožnje koje prate puls grada. Uživajte u vožnji kroz gradske ulice uz naše iskusne vozače i otkrijte sve njegove skrivene dragulje.',
        image: carImage1
    },
    {
        title: 'Tarife za vaše avanture',
        description: 'Spojite gradove sa našim povoljnim međugradskim tarifama. Sloboda putovanja na udoban i pouzdan način.',
        image: carImage2
    },
    {
        title: 'Bez stresa, bez kašnjenja',
        description: 'Vaša udobnost je naš prioritet. Brza i sigurna vožnja do aerodroma, prateći vaše vreme i potrebe.',
        image: carImage3
    },
    {
        title: 'Vaši paketi, naša briga',
        description: 'Osim putnika, brinemo se i o vašim pošiljkama. Naša efikasna dostava prilagođena je vašim potrebama, pružajući pouzdanu i bezbednu uslugu.',
        image: carImage1
    }
]
