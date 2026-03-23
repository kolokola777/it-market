"use client"

import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import { vacancies } from "@/mocks/vacancies"
import Link from "next/link"
import VacancyCard from "@/app/_components/vacancies-card"

export const VacanciesSection = () => {
    return (
        <section className="w-full min-h-screen pt-50 pb-7 relative bg-[#EEEDED]">
            <Container type="default" className="relative z-10">
                <Flex justify={"center"} items={"center"} direction={"vertical"} className="text-center gap-2">
                    <h2 className="text-4xl font-semibold text-black">IT-вакансии</h2>

                    <Link
                        href="/vacancies"
                        className="uppercase text-white bg-[#FFC107] rounded-full px-3 py-2 transition-all duration-200 hover:brightness-90 inline-block"
                    >
                        Разместить вакансию
                    </Link>
                </Flex>

                <Flex justify={"center"} items={"center"} direction={"vertical"} className="mt-10 gap-4">
                    {vacancies.slice(0, 12).map((vacancy, i) => (
                        <Flex key={i} justify="center" className="w-full min-w-206.25 max-w-206.25">
                            <VacancyCard {...vacancy} />
                        </Flex>
                    ))}
                </Flex>

                <Flex justify={"center"} items={"center"} direction={"vertical"} className="text-center mt-12">
                    <Link
                        href="/vacancies"
                        className="text-[#1DCE1D] font-semibold bg-white rounded-full py-2 px-3 transition-all duration-200 hover:brightness-90 inline-block"
                    >
                        Все вакансии
                    </Link>
                </Flex>
            </Container>
        </section>
    )
}

export default VacanciesSection