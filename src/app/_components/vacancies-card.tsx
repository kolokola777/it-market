"use client"

import { Flex } from "@/components/flex"
import Link from "next/link"

interface VacancyCardProps {
    id: number
    company: string
    position: string
    lastUpdated: string
    tags: string[]
    workType: string
    salary: string
    workExperience: string
}

export const VacancyCard = ({
    id,
    company,
    position,
    lastUpdated,
    tags,
    workType,
    salary,
    workExperience,
}: VacancyCardProps) => {
    const displayTags = tags.slice(0, 6)

    return (
        <Link
            href={`/vacancies/${id}`}
            className="w-full p-4 bg-white rounded-2xl flex flex-col gap-3 hover:shadow-2xl transition-shadow duration-200"
        >
            <div className="text-left">
                <p className="text-sm text-[#BDBDBD] pt-1 pb-4">{company}</p>

                <Flex justify="between" items="center">
                    <h3 className="font-bold text-lg text-black">{position}</h3>
                    <p className="text-sm text-[#BDBDBD]">Обновлено: {lastUpdated}</p>
                </Flex>

                <Flex className="gap-2 flex-wrap mt-2">
                    {displayTags.map((tag, i) => (
                        <span
                            key={i}
                            className="uppercase text-sm font-medium text-white bg-[#E0E0E0] rounded-full px-2 py-1"
                        >
                            {tag}
                        </span>
                    ))}
                </Flex>
            </div>

            <Flex className="mt-4 gap-6">
                <Flex direction="vertical" className="flex-1">
                    <p className="text-sm text-[#BDBDBD]">Тип работы</p>
                    <p className="text-sm text-black mt-1">{workType}</p>
                </Flex>
                <Flex direction="vertical" className="flex-1">
                    <p className="text-sm text-[#BDBDBD]">Зарплата</p>
                    <p className="text-sm text-black mt-1">{salary}</p>
                </Flex>
                <Flex direction="vertical" className="flex-1">
                    <p className="text-sm text-[#BDBDBD]">Опыт работы</p>
                    <p className="text-sm text-black mt-1">{workExperience}</p>
                </Flex>
            </Flex>
        </Link>
    )
}

export default VacancyCard