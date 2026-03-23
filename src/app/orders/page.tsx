"use client"

import { useState } from "react"
import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import { orders } from "@/mocks/orders"
import { OrderCard } from "@/app/_components/orders-card"
import Link from "next/link"

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

const clientTypes = ["Все", "Компания", "Государственный орган", "Частное лицо"]
const statuses = ["Все", "Идет прием заявок", "Прием заявок завершен"]

const OrdersPage = () => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const [budgetFrom, setBudgetFrom] = useState("")
    const [budgetTo, setBudgetTo] = useState("")
    const [selectedSpecializations, setSelectedSpecializations] = useState<string[]>([])
    const [selectedClientType, setSelectedClientType] = useState("Все")
    const [selectedStatus, setSelectedStatus] = useState("Все")
    const perPage = 4

    const toggleSpecialization = (spec: string) => {
        setSelectedSpecializations((prev) =>
            prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec]
        )
        setPage(1)
    }

    const handleSearch = () => setPage(1)

    const filteredOrders = orders.filter((order) => {
        const matchesPosition = order.position.toLowerCase().includes(search.toLowerCase())
        const matchesSpecialization =
            selectedSpecializations.length === 0 ||
            selectedSpecializations.some((spec) => order.position.includes(spec))
        const matchesClientType =
            selectedClientType === "Все" || order.companyType === selectedClientType
        const matchesStatus = true

        let matchesBudget = true
        if (budgetFrom || budgetTo) {
            const numbers = order.budget.replace(/,/g, "").match(/\d+/g)
            if (numbers && numbers.length >= 1) {
                const orderBudget = parseInt(numbers[0])
                const from = budgetFrom ? parseInt(budgetFrom) : 0
                const to = budgetTo ? parseInt(budgetTo) : Number.MAX_SAFE_INTEGER
                matchesBudget = orderBudget >= from && orderBudget <= to
            }
        }

        return matchesPosition && matchesSpecialization && matchesClientType && matchesStatus && matchesBudget
    })

    const totalPages = Math.ceil(filteredOrders.length / perPage)
    const start = (page - 1) * perPage
    const end = start + perPage
    const currentOrders = filteredOrders.slice(start, end)

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
                            <h1 className="text-[38px] font-bold">Заказы</h1>
                            <p className="uppercase font-semibold text-[#7F7F7F]">
                                База объявлений для исполнителей в сфере IT
                            </p>
                        </div>

                        <Link
                            href="#!"
                            className="uppercase text-[#FFC107] border border-[#FFC107] rounded-full px-3 py-2 transition-all duration-200 hover:bg-[#FFC107] hover:text-[#B8860B] inline-block"
                        >
                            Разместить заказ
                        </Link>
                    </Flex>
                </Container>
            </div>

            <Container type="default">
                <Flex className="gap-8 pb-12 flex-col md:flex-row items-start">
                    <div className="w-full md:w-8/12 grid grid-cols-1 gap-4">
                        {currentOrders.map((order) => (
                            <OrderCard key={order.id} {...order} />
                        ))}

                        {currentOrders.length === 0 && (
                            <p className="text-center text-[#999999] mt-4">Заказы не найдены</p>
                        )}

                        {totalPages > 1 && currentOrders.length > 0 && (
                            <div className="flex gap-2 mt-2 flex-wrap">
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
                    </div>

                    <div className="w-full md:w-4/12 space-y-4">
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

                        <div className="bg-white px-4 pt-4 pb-6 rounded-2xl flex flex-col gap-2">
                            <h3 className="font-semibold text-[#999999] mb-2 uppercase">Бюджет</h3>
                            <Flex className="gap-2">
                                <input
                                    type="number"
                                    placeholder="от"
                                    className="w-1/2 px-2 py-1 border rounded-lg"
                                    value={budgetFrom}
                                    onChange={(e) => setBudgetFrom(e.target.value)}
                                />
                                <input
                                    type="number"
                                    placeholder="до"
                                    className="w-1/2 px-2 py-1 border rounded-lg"
                                    value={budgetTo}
                                    onChange={(e) => setBudgetTo(e.target.value)}
                                />
                            </Flex>
                        </div>

                        <div className="bg-white px-4 pt-4 pb-6 rounded-2xl">
                            <h3 className="font-semibold text-[#999999] mb-2 uppercase">Что требуется</h3>
                            <ul className="font-semibold space-y-2">
                                {specializations.map((spec) => (
                                    <li key={spec}>
                                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 accent-[#1DCE1D]"
                                                checked={selectedSpecializations.includes(spec)}
                                                onChange={() => toggleSpecialization(spec)}
                                            />
                                            {spec}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white px-4 pt-4 pb-6 rounded-2xl">
                            <h3 className="font-semibold text-[#999999] mb-2 uppercase">Тип заказчика</h3>
                            <ul className="font-semibold space-y-2">
                                {clientTypes.map((type) => (
                                    <li key={type}>
                                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                                            <input
                                                type="radio"
                                                name="clientType"
                                                className="w-4 h-4 accent-[#1DCE1D]"
                                                value={type}
                                                checked={selectedClientType === type}
                                                onChange={() => {
                                                    setSelectedClientType(type)
                                                    setPage(1)
                                                }}
                                            />
                                            {type}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white px-4 pt-4 pb-6 rounded-2xl">
                            <h3 className="font-semibold text-[#999999] mb-2 uppercase">Статус</h3>
                            <ul className="font-semibold space-y-2">
                                {statuses.map((status) => (
                                    <li key={status}>
                                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                                            <input
                                                type="radio"
                                                name="status"
                                                className="w-4 h-4 accent-[#1DCE1D]"
                                                value={status}
                                                checked={selectedStatus === status}
                                                onChange={() => setSelectedStatus(status)}
                                            />
                                            {status}
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

export default OrdersPage