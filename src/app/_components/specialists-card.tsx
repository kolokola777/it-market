"use client"

import { Flex } from "@/components/flex"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface SpecialistCardProps {
    id: number
    icon: string | StaticImageData
    name: string
    position: string
    city: string
    tags: string[]
    description: string
}

export const SpecialistCard = ({
    id,
    icon,
    name,
    position,
    city,
    tags,
    description,
}: SpecialistCardProps) => {
    const displayTags = tags.slice(0, 6)
    const displayDescription =
        description.length > 150 ? description.slice(0, 150) + "…" : description

    return (
        <Link
            href={`/specialists/${id}`}
            className="w-full p-4 bg-white rounded-2xl flex flex-col gap-3 hover:shadow-2xl transition-shadow duration-200 h-fit"
        >
            <Flex items={"start"} className="gap-3">
                <Image src={icon} alt={name} width={64} height={64} className="rounded-full" />
                <div className="text-left">
                    <h3 className="font-bold text-lg text-black">{name}</h3>
                    <p className="text-sm text-[#BDBDBD] uppercase font-bold">{position}</p>

                    <Flex items="center" className="gap-1">
                        <svg
                            className="w-3.75 h-3.75 text-[#BDBDBD]"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
                                fill="currentColor"
                            />
                        </svg>
                        <p className="text-sm text-[#BDBDBD]">{city}</p>
                    </Flex>
                </div>
            </Flex>

            <p className="text-sm line-clamp-3">{description}</p>

            <Flex className="gap-2 flex-wrap">
                {tags.slice(0, 6).map((tag, i) => (
                    <span
                        key={i}
                        className="text-sm font-bold text-white bg-[#E0E0E0] rounded-full px-2 py-1"
                    >
                        {tag}
                    </span>
                ))}
            </Flex>
        </Link>
    )
}

export default SpecialistCard