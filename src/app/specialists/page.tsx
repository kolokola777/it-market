"use client"

import { useState } from "react"
import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import Link from "next/link"
import { specialists } from "@/mocks/specialists"
import SpecialistCard from "@/app/_components/specialists-card"

const specializations = [
    "Разработка сайтов",
    "Разработка приложений",
    "Комплексные решения",
    "Тестирование",
    "Digital-маркетинг",
    "Поисковая оптимизация",
    "Разработка игр",
    "Мобильные приложения",
    "Инфраструктура",
    "Консалтинг и документация",
    "Прочее",
    "Инструменты для бизнеса",
    "IT-образование",
]

const city = [
    "Кашкадарьинская область",
    "Республика Каракалпакстан",
    "Самаркандская область",
    "Сырдарьинская область",
    "Сурхандарьинская область",
    "Ташкентская область",
    "Ташкент",
    "Андижанская область",
    "Бухарская область",
    "Ферганская область",
    "Джизакская область",
    "Хорезмская область",
    "Наманганская область",
    "Навоийская область",
]

const SpecialistsPage = () => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const [selectedSpecs, setSelectedSpecs] = useState<string[]>([])
    const [selectedLocations, setSelectedLocations] = useState<string[]>([])
    const perPage = 4

    const toggleSpec = (spec: string) => {
        setSelectedSpecs((prev) =>
            prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec]
        )
        setPage(1)
    }

    const toggleLocation = (loc: string) => {
        setSelectedLocations((prev) =>
            prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc]
        )
        setPage(1)
    }

    const handleSearch = () => setPage(1)

    const filteredSpecialists = specialists.filter((sp) => {
        const matchesName = sp.name.toLowerCase().includes(search.toLowerCase())
        const matchesSpec =
            selectedSpecs.length === 0 || sp.tags.some((tag) => selectedSpecs.includes(tag))
        const matchesLocation =
            selectedLocations.length === 0 || selectedLocations.includes(sp.city)
        return matchesName && matchesSpec && matchesLocation
    })

    const totalPages = Math.ceil(filteredSpecialists.length / perPage)
    const start = (page - 1) * perPage
    const end = start + perPage
    const currentSpecialists = filteredSpecialists.slice(start, end)

    const getPageNumbers = () => {
        const pages = []
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i)
        } else {
            if (page <= 3) pages.push(1, 2, 3, 4, "...", totalPages)
            else if (page >= totalPages - 2)
                pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
            else pages.push(1, "...", page - 1, page, page + 1, "...", totalPages)
        }
        return pages
    }

    return (
        <div className="bg-[#F5F5F5]">
            <div className="w-full bg-white shadow-xl mb-12">
                <Container type="default">
                    <Flex items={"center"} justify={"between"} className="py-8">
                        <div>
                            <h1 className="text-[38px] font-bold">IT-специалисты</h1>
                            <p className="uppercase font-semibold text-[#7F7F7F]">
                                Резюме IT-специалистов, которые находятся в поиске работы или задач
                            </p>
                        </div>

                        <Link
                            href="#!"
                            className="uppercase text-[#FFC107] border border-[#FFC107] rounded-full px-3 py-2 transition-all duration-200 hover:bg-[#FFC107] hover:text-[#B8860B] inline-block"
                        >
                            Разместить резюме
                        </Link>
                    </Flex>
                </Container>
            </div>

            <Container type="default">
                <Flex className="gap-8 pb-12 items-start">
                    <div className="w-8/12 grid grid-cols-1 gap-4">
                        {currentSpecialists.map((sp) => (
                            <SpecialistCard key={sp.id} {...sp} />
                        ))}

                        {totalPages > 1 && (
                            <div className="flex gap-2 mt-2">
                                <button
                                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                                    disabled={page === 1}
                                    className="px-3 py-1 disabled:opacity-50 cursor-pointer h-9.5 w-9.5"
                                >
                                    &#8592;
                                </button>

                                {getPageNumbers().map((p, idx) =>
                                    p === "..." ? (
                                        <span key={idx} className="px-3 py-1 cursor-pointer h-9.5 w-9.5">
                                            ...
                                        </span>
                                    ) : (
                                        <button
                                            key={idx}
                                            onClick={() => setPage(Number(p))}
                                            className={`px-3 py-1 ${page === p
                                                ? "bg-[#1DCE1D] text-white rounded-md h-9.5 w-9.5"
                                                : "cursor-pointer h-9.5 w-9.5"
                                                }`}
                                        >
                                            {p}
                                        </button>
                                    )
                                )}

                                <button
                                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                                    disabled={page === totalPages}
                                    className="px-3 py-1 disabled:opacity-50 cursor-pointer h-9.5 w-9.5"
                                >
                                    &#8594;
                                </button>
                            </div>
                        )}

                        {filteredSpecialists.length === 0 && (
                            <p className="text-center text-[#999999] mt-4">Специалисты не найдены</p>
                        )}
                    </div>

                    <div className="w-4/12 space-y-4">
                        <div className="flex mb-4">
                            <input
                                type="text"
                                placeholder="Поиск..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full px-3 py-1 rounded-l-lg border border-r-0 border-[#bbbbbb] bg-white focus:outline-none"
                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            />
                            <button
                                onClick={handleSearch}
                                className="px-3 bg-[#1DCE1D] text-white rounded-r-full hover:bg-green-600 transition-colors flex items-center justify-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-4.35-4.35M5 11a6 6 0 1112 0 6 6 0 01-12 0z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Специализации */}
                        <div className="bg-white px-4 pt-4 pb-6 rounded-2xl">
                            <h3 className="font-semibold text-[#999999] mb-2 uppercase">Специализации</h3>
                            <ul className="font-semibold space-y-2">
                                {specializations.map((spec) => (
                                    <li key={spec}>
                                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 accent-[#1DCE1D]"
                                                checked={selectedSpecs.includes(spec)}
                                                onChange={() => toggleSpec(spec)}
                                            />
                                            {spec}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Область */}
                        <div className="bg-white px-4 pt-4 pb-6 rounded-2xl">
                            <h3 className="font-semibold text-[#999999] mb-2 uppercase">Область</h3>
                            <ul className="font-semibold space-y-2">
                                {city.map((loc) => (
                                    <li key={loc}>
                                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 accent-[#1DCE1D]"
                                                checked={selectedLocations.includes(loc)}
                                                onChange={() => toggleLocation(loc)}
                                            />
                                            {loc}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default SpecialistsPage