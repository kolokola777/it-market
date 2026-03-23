"use client"

import { Flex } from "@/components/flex"
import Link from "next/link"

interface OrderCardProps {
    id: number
    company: string
    companyType: string
    position: string
    budget: string
    startDate: string
    endDate: string
}

export const OrderCard = ({
    id,
    company,
    companyType,
    position,
    budget,
    startDate,
    endDate,
}: OrderCardProps) => {
    return (
        <Link
            href={`/orders/${id}`}
            className="w-full p-4 bg-white rounded-2xl flex flex-col gap-3 hover:shadow-2xl transition-shadow duration-200"
        >
            <div className="text-left">
                <p className="text-[#BDBDBD] mt-2 font-semibold uppercase">{company}</p>
                <p className="text-sm text-[#BDBDBD] pb-3 uppercase">{companyType}</p>

                <Flex justify="between" items="center">
                    <h3 className="font-bold text-lg text-black">{position}</h3>
                </Flex>

                <Flex className="mt-4 gap-6 flex-wrap">
                    <Flex direction="vertical" className="flex-1 min-w-30">
                        <p className="text-sm text-[#BDBDBD]">Бюджет</p>
                        <p className="text-sm text-black mt-1">{budget}</p>
                    </Flex>
                    <Flex direction="vertical" className="flex-1 min-w-30">
                        <p className="text-sm text-[#BDBDBD]">Начало приема</p>
                        <p className="text-sm text-black mt-1">{startDate}</p>
                    </Flex>
                    <Flex direction="vertical" className="flex-1 min-w-30">
                        <p className="text-sm text-[#BDBDBD]">Конец приема</p>
                        <p className="text-sm text-black mt-1">{endDate}</p>
                    </Flex>
                </Flex>
            </div>
        </Link>
    )
}

export default OrderCard