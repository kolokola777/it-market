"use client"

import { Flex } from "@/components/flex"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface CompanyCardProps {
    id: number
    icon: string | StaticImageData
    name: string
    form: string
    location: string
    tags: string[]
    description: string
}

export const CompanyCard = ({
    id,
    icon,
    name,
    form,
    location,
    tags,
    description,
}: CompanyCardProps) => {
    const displayTags = tags.slice(0, 4)
    const displayDescription =
        description.length > 150 ? description.slice(0, 150) + "…" : description

    return (
        <Link
            href={`/companies/${id}`}
            className="w-89 min-h-98.75 p-4 bg-white rounded-2xl flex flex-col gap-3 hover:shadow-2xl transition-shadow duration-200"
        >
            <Flex items={"start"} className="gap-3">
                <Image src={icon} alt={name} width={64} height={64} />
                <div className="text-left">
                    <h3 className="font-bold text-lg text-black">{name}</h3>
                    <p className="text-sm text-[#BDBDBD]">{form}</p>
                    <p className="text-sm">{location}</p>
                </div>
            </Flex>

            <Flex className="gap-2 flex-wrap">
                {displayTags.map((tag, i) => (
                    <span
                        key={i}
                        className="text-sm font-bold uppercase text-white bg-[#E0E0E0] rounded-full px-2 py-1"
                    >
                        {tag}
                    </span>
                ))}
            </Flex>

            <p className="mt-2 text-sm text-black">{displayDescription}</p>
        </Link>
    )
}

export default CompanyCard