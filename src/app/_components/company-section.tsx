"use client"

import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import Link from "next/link"
import { companies } from "@/mocks/companies"
import { CompanyCard } from "@/app/_components/company-card"

export const CompaniesSection = () => {
    return (
        <section className="w-full min-h-screen pt-20 pb-7 bg-[url('/companies-bg.jpg')] bg-cover bg-center bg-no-repeat relative">
            <Container type="default" className="relative z-10">
                <Flex justify={"center"} items={"center"} direction={"vertical"} className="text-center gap-2">
                    <h2 className="text-4xl font-semibold text-white">IT-компании</h2>

                    <Link
                        href="/companies"
                        className="uppercase text-white bg-[#FFC107] rounded-full px-3 py-2 transition-all duration-200 hover:brightness-90 inline-block"
                    >
                        Разместить компанию
                    </Link>
                </Flex>

                <Flex justify={"center"} className="mt-10 gap-6 flex-wrap">
                    {companies.slice(0, 12).map((company) => (
                        <CompanyCard key={company.id} {...company} />
                    ))}
                </Flex>

                <Flex justify={"center"} items={"center"} direction={"vertical"} className="text-center mt-12">
                    <Link
                        href="/companies"
                        className="text-[#1DCE1D] font-semibold bg-white rounded-full py-2 px-3 transition-all duration-200 hover:brightness-90 inline-block"
                    >
                        Все компании
                    </Link>
                </Flex>
            </Container>
        </section>
    )
}

export default CompaniesSection