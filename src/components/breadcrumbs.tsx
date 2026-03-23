"use client"

import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import Link from "next/link"
import { usePathname } from "next/navigation"

const nameMap: Record<string, string> = {
    companies: "IT-компании Узбекистана",
    specialists: "IT-специалисты",
    vacancies: "IT-вакансии",
    orders: "Заказы",
}

const allowedPages = ["/companies", "/specialists", "/vacancies", "/orders"]

export const Breadcrumbs = () => {
    const pathname = usePathname()

    if (!allowedPages.includes(pathname)) return null

    const paths = pathname.split("/").filter(Boolean)

    return (
        <div className="mt-28 left-0 w-full z-40 bg-white">
            <Container type="default">
                <Flex items={"center"} className="gap-2 text-sm">
                    <Link
                        href="/"
                        className="text-[#1DCE1D] hover:underline hover:brightness-90 transition duration-200"
                    >
                        Главная
                    </Link>

                    {paths.map((segment, index) => {
                        const href = "/" + paths.slice(0, index + 1).join("/")
                        const isLast = index === paths.length - 1

                        return (
                            <Flex key={href} className="gap-2 items-center">
                                <span>/</span>

                                {isLast ? (
                                    <span className="text-gray-600">
                                        {nameMap[segment] || segment}
                                    </span>
                                ) : (
                                    <Link
                                        href={href}
                                        className="text-[#1DCE1D] hover:brightness-90 transition duration-200"
                                    >
                                        {nameMap[segment] || segment}
                                    </Link>
                                )}
                            </Flex>
                        )
                    })}
                </Flex>
            </Container>
        </div>
    )
}