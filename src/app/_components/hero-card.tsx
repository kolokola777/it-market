import { Flex } from "@/components/flex"
import Image from "next/image"
import Link from "next/link"
import { heroCards } from "@/mocks/hero-card"

export const HeroCard = () => {
    return (
        <Flex className="gap-6 flex-wrap">
            {heroCards.map((card, index) => (
                <Flex
                    key={index}
                    className="max-w-135 min-h-60.75 border border-white rounded-2xl overflow-hidden"
                >
                    <Flex className="flex-1 p-6 border-r border-white bg-gray-300/25 backdrop-blur-sm rounded-2xl flex-col justify-between hover:shadow-2xl">
                        <Flex className="items-center gap-3 mb-3">
                            <Image src={card.icon} alt="ICON" className="max-w-12 max-h-12" />
                            <h2 className="text-lg text-white uppercase font-bold">{card.title}</h2>
                        </Flex>

                        <p className="text-white text-left flex-1">{card.description}</p>

                        <Flex className="gap-10 mt-4">
                            <Link
                                href={"#!"}
                                className="text-sm font-bold text-white border border-white rounded-full px-4 py-2 text-center hover:bg-white hover:text-black duration-200"
                            >
                                {card.linkText}
                            </Link>
                            {card.optionalLink && (
                                <Link
                                    href={"#!"}
                                    className="text-sm font-bold text-white border border-white rounded-full px-4 py-2 text-center hover:bg-white hover:text-black duration-200"
                                >
                                    {card.optionalLink}
                                </Link>
                            )}
                        </Flex>
                    </Flex>

                    <Flex
                        justify={"center"}
                        items={"center"}
                        className="w-1/4 flex-col text-center"
                    >
                        <h2 className="text-4xl font-bold text-white">{card.number}</h2>
                        <p className="text-sm text-white">{card.numberText}</p>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    )
}

export default HeroCard