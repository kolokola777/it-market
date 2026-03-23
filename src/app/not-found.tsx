"use client"

import Link from "next/link"

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F5F5] text-center px-4">
            <h1 className="text-[120px] font-bold text-[#1DCE1D]">404</h1>
            <h2 className="text-3xl font-semibold mt-4">Страница не найдена</h2>
            <p className="text-[#7F7F7F] mt-2">
                К сожалению, страница, которую вы ищете, не существует.
            </p>
            <Link
                href="/"
                className="mt-6 inline-block bg-[#1DCE1D] text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
                Вернуться на главную
            </Link>
        </div>
    )
}

export default NotFoundPage