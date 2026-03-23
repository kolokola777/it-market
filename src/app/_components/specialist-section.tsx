"use client"

import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import { specialists } from "@/mocks/specialists"
import Link from "next/link"
import SpecialistCard from "@/app/_components/specialists-card"

export const SpecialistsSection = () => {
    return (
        <section className="w-full min-h-screen pt-20 pb-7 relative bg-[#EEEDED]">
            <Container type="default" className="relative z-10">
                <Flex justify={"center"} items={"center"} direction={"vertical"} className="text-center gap-2">
                    <h2 className="text-4xl font-semibold text-black">IT-специалисты</h2>

                    <Link
                        href="/specialists"
                        className="uppercase text-white bg-[#FFC107] rounded-full px-3 py-2 transition-all duration-200 hover:brightness-90 inline-block"
                    >
                        Разместить резюме
                    </Link>
                </Flex>

                <Flex justify={"center"} direction={"vertical"} className="mt-10 gap-4">
                    {specialists.slice(0, 12).map((specialist) => (
                        <Flex key={specialist.id} justify="center" className="w-full">
                            <SpecialistCard {...specialist} />
                        </Flex>
                    ))}
                </Flex>

                <Flex justify={"center"} items={"center"} direction={"vertical"} className="text-center mt-12">
                    <Link
                        href="/specialists"
                        className="text-[#1DCE1D] font-semibold bg-white rounded-full py-2 px-3 transition-all duration-200 hover:brightness-90 inline-block"
                    >
                        Все специалисты
                    </Link>
                </Flex>
            </Container>
        </section>
    )
}

export default SpecialistsSection