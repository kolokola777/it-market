import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import Link from "next/link"
import { categories } from "@/mocks/categories"

const CompaniesPage = () => {
  const rows: Array<typeof categories[number][]> = []
  for (let i = 0; i < categories.length; i += 4) {
    rows.push(categories.slice(i, i + 4))
  }

  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-full bg-white shadow-xl mb-12">
        <Container type="default">
          <Flex items={"center"} justify={"between"} className="py-8">
            <div>
              <h1 className="text-[38px] font-bold">IT-Компании Узбекистана</h1>
              <p className="uppercase font-semibold text-[#7F7F7F]">
                Найдите надежного исполнителя для своего проекта
              </p>
            </div>

            <Link
              href="#!"
              className="uppercase text-[#FFC107] border border-[#FFC107] rounded-full px-3 py-2 transition-all duration-200 hover:bg-[#FFC107] hover:text-[#B8860B] inline-block"
            >
              Разместить компанию
            </Link>
          </Flex>
        </Container>
      </div>

      <div className="pb-10">
        <Container type="default">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {row.map((cat) => (
                <div key={cat.title}>
                  <h3 className="text-lg mb-2 border-b-2 border-[#1DCE1D]">
                    {cat.title}
                  </h3>
                  <ul className="text-md font-semibold text-[#3F3F3F] space-y-1">
                    {cat.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          href="#!"
                          className="flex justify-between transition-colors duration-200"
                        >
                          <span className="hover:text-black">{item.name}</span>
                          <span className="text-[#999999] ml-1">{item.count}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </Container>
      </div>
    </div>
  )
}

export default CompaniesPage