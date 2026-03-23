"use client"

import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import { orders } from "@/mocks/orders"
import Link from "next/link"
import OrderCard from "@/app/_components/orders-card"

export const OrdersSection = () => {
    return (
        <section className="w-full min-h-screen py-30 relative bg-[#EEEDED]">
            <Container type="default" className="relative z-10">
                <Flex justify={"center"} items={"center"} direction={"vertical"} className="text-center gap-2">
                    <h2 className="text-4xl font-semibold text-black">IT-заказы</h2>

                    <Link
                        href="/orders"
                        className="uppercase text-white bg-[#FFC107] rounded-full px-3 py-2 transition-all duration-200 hover:brightness-90 inline-block"
                    >
                        Разместить заказ
                    </Link>
                </Flex>

                <Flex justify={"center"} items={"center"} direction={"vertical"} className="mt-10 gap-4">
                    {orders.slice(0, 12).map((order) => (
                        <Flex key={order.id} justify="center" className="w-full max-w-206.25">
                            <OrderCard {...order} />
                        </Flex>
                    ))}
                </Flex>

                <Flex justify={"center"} items={"center"} direction={"vertical"} className="text-center mt-12">
                    <Link
                        href="/orders"
                        className="text-[#1DCE1D] font-semibold bg-white rounded-full py-2 px-3 transition-all duration-200 hover:brightness-90 inline-block"
                    >
                        Все заказы
                    </Link>
                </Flex>
            </Container>
        </section>
    )
}

export default OrdersSection