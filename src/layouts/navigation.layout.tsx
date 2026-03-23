"use client"

import LogoDark from "$public/logo-large-dark.png"
import LogoGreen from "$public/logo-large-light.png"
import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navigation = () => {
    const pathname = usePathname()
    const isHome = pathname === "/"

    const linkBase = "uppercase p-2 transition-colors duration-200"
    const linkHome = "text-white hover:bg-[#7DBA29]"
    const linkOther = "text-[#7F7F7F] hover:text-gray-900 font-semibold"

    return (
        <nav
            className={`
                absolute top-0 left-0 w-full z-50
                ${!isHome ? "shadow-sm pb-2 bg-white" : ""}
            `}
        >
            <Container type="default">
                <Flex
                    justify={"end"}
                    items={"center"}
                    className="text-[10px] gap-1.5 uppercase pt-2"
                >
                    <Link href="#!" className={`${linkBase} ${isHome ? linkHome : linkOther}`}>
                        Зарегистрироваться
                    </Link>
                    <Link href="#!" className={`${linkBase} ${isHome ? linkHome : linkOther}`}>
                        Войти
                    </Link>
                    <Link href="#!" className={`${linkBase} ${isHome ? linkHome : linkOther}`}>
                        Русский
                    </Link>
                </Flex>

                <Flex justify={"start"} items={"center"} className="gap-10 pt-2">
                    <Link href="/" className="flex gap-2 font-semibold uppercase items-center">
                        <Image
                            src={isHome ? LogoDark : LogoGreen}
                            alt="Logo"
                            width={30}
                            height={30}
                        />
                        <p className={`${isHome ? "text-white" : "text-black"} text-xl`}>
                            IT Market
                        </p>
                    </Link>

                    <Flex className="font-medium">
                        {[
                            { name: "Компании", href: "/companies" },
                            { name: "Специалисты", href: "/specialists" },
                            { name: "Вакансии", href: "/vacancies" },
                            { name: "Заказы", href: "/orders" },
                        ].map((link) => {
                            const isActive = pathname === link.href

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`${linkBase} ${isActive
                                        ? "text-black"
                                        : isHome
                                            ? linkHome
                                            : linkOther
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            )
                        })}
                    </Flex>
                </Flex>
            </Container>
        </nav>
    )
}