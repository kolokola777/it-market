"use client"

import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import { HeroCard } from "./hero-card"

const HeroSection = () => {
    return (
        <section className="relative w-full flex flex-col pt-50 pb-20 overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                src="https://it-market.uz/static/itpp/img/itmarket2_2m.mp4"
                loop
                autoPlay
                muted
                playsInline
            />

            <Container type="default" className="z-10 flex flex-col text-center p-0">
                <h1 className="sm:text-7xl font-medium tracking-tight text-white">
                    Ваш проводник
                </h1>
                <p className="mt-6 text-2xl text-white font-medium">
                    в IT рынок Узбекистана
                </p>

                <Flex className="mt-15 gap-10 flex-wrap justify-center">
                    <HeroCard />
                </Flex>
            </Container>
        </section>
    )
}

export default HeroSection