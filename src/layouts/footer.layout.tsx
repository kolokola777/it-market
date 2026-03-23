"use client"

import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "$public/logo-large-dark.png"

export const Footer = () => {
    const pathname = usePathname()

    const mainLinks = [
        { name: "Компании", href: "/companies" },
        { name: "Специалисты", href: "/specialists" },
        { name: "Вакансии", href: "/vacancies" },
        { name: "Заказы", href: "/orders" },
        { name: "Связаться с нами", href: "/contact" },
    ]

    const columns = [
        {
            title: "Вакансии по специализациям",
            items: [
                "Разработка сайтов",
                "Разработка приложений",
                "Комплексные решения",
                "Тестирование",
                "Digital-маркетинг",
            ],
        },
        {
            title: "Специалисты по специализациям",
            items: [
                "Разработка сайтов",
                "Разработка приложений",
                "Комплексные решения",
                "Тестирование",
                "Digital-маркетинг",
            ],
        },
        {
            title: "Заказы по специализациям",
            items: [
                "Разработка сайтов",
                "Разработка приложений",
                "Комплексные решения",
                "Тестирование",
                "Digital-маркетинг",
            ],
        },
    ]

    const socialLinks = [
        { href: "https://www.facebook.com", svg: "M22.675 0h-21.35C.595 0 0 .592 0 1.323v21.354C0 23.408.595 24 1.325 24h11.49v-9.294H9.692V11.08h3.123V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.918c-1.504 0-1.795.716-1.795 1.763v2.309h3.587l-.467 3.626h-3.12V24h6.116C23.405 24 24 23.408 24 22.677V1.323C24 .592 23.405 0 22.675 0z" },
        { href: "https://twitter.com", svg: "M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.38 4.482A13.957 13.957 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574A4.897 4.897 0 0 1 .96 9.097v.062a4.918 4.918 0 0 0 3.946 4.817 4.996 4.996 0 0 1-2.212.084 4.923 4.923 0 0 0 4.6 3.417A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z" },
        { href: "https://www.linkedin.com", svg: "M20.447 20.452H16.89V14.83c0-1.341-.027-3.066-1.869-3.066-1.869 0-2.156 1.459-2.156 2.967v5.721H9.307V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.37-1.848 3.604 0 4.267 2.372 4.267 5.455v6.284zM5.337 7.433a2.065 2.065 0 1 1 .001-4.131 2.065 2.065 0 0 1-.001 4.131zM7.119 20.452H3.555V9h3.564v11.452z" },
        { href: "https://www.instagram.com", svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.848 0 3.204-.011 3.583-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.646.069-4.85.069-3.203 0-3.583-.012-4.849-.069-3.259-.149-4.771-1.7-4.919-4.919C2.175 15.583 2.163 15.204 2.163 12c0-3.203.012-3.583.069-4.849C2.381 3.92 3.92 2.38 7.151 2.232 8.417 2.175 8.797 2.163 12 2.163zM12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 12 8a4 4 0 0 1 0 8z" },
        { href: "https://www.youtube.com", svg: "M23.498 6.186a2.978 2.978 0 0 0-2.096-2.11C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.402.576A2.978 2.978 0 0 0 .502 6.186 31.64 31.64 0 0 0 0 12a31.64 31.64 0 0 0 .502 5.814 2.978 2.978 0 0 0 2.096 2.11C4.495 20.5 12 20.5 12 20.5s7.505 0 9.402-.576a2.978 2.978 0 0 0 2.096-2.11A31.64 31.64 0 0 0 24 12a31.64 31.64 0 0 0-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" },
    ]

    return (
        <footer className="bg-[#323232] py-8">
            <Container type="default">
                <Flex justify={"start"} items={"center"} className="gap-10 pb-8 flex-wrap">
                    <Link href={"/"} className="flex gap-2 items-center">
                        <Image src={Logo} alt="Logo" width={30} height={30} />
                        <p className="text-white text-xl">IT Market</p>
                    </Link>

                    <Flex className="gap-2 flex-wrap">
                        {mainLinks.map((link) => {
                            const isActive = pathname === link.href
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`
                                        uppercase p-2 text-sm transition-all duration-200
                                        ${isActive
                                            ? "border-b-2 border-[#1DCE1D] text-white"
                                            : "text-white hover:bg-[#7DBA29]"
                                        }
                                    `}
                                >
                                    {link.name}
                                </Link>
                            )
                        })}
                    </Flex>
                </Flex>

                <Flex justify={"between"} items={"start"} className="flex-wrap gap-8">
                    {columns.map((col) => (
                        <div key={col.title} className="min-w-40">
                            <h4 className="mb-2 text-white">{col.title}</h4>
                            <ul className="space-y-3 text-sm ">
                                {col.items.map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={"#!"}
                                            className="text-[#BDBDBD] hover:border-b transition-colors duration-200"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="min-w-40 text-right">
                        <ul className="space-y-2">
                            <li>
                                <span className="text-[#bdbdbd] font-semibold text-sm uppercase">Адрес:</span>{" "}
                                <span className="text-[rgba(255,255,255,0.5)] text-sm">ул. Тепамасжид 4, Ташкент, Узбекистан</span>
                            </li>
                            <li>
                                <span className="text-[#bdbdbd] font-semibold text-sm uppercase">Телефон:</span>{" "}
                                <span className="text-[rgba(255,255,255,0.5)] text-sm">+998 71 209 11 99</span>
                            </li>
                            <li>
                                <span className="text-[#bdbdbd] font-semibold text-sm uppercase">Эл. почта:</span>{" "}
                                <span className="text-[rgba(255,255,255,0.5)] text-sm">info@it-market.uz</span>
                            </li>
                            <li>
                                <div className="flex justify-end gap-4">
                                    {socialLinks.map((s, i) => (
                                        <Link key={i} href={s.href} target="_blank" rel="noopener noreferrer">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#efefef]">
                                                <path d={s.svg} />
                                            </svg>
                                        </Link>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>
                </Flex>
            </Container>
        </footer>
    )
}

export default Footer