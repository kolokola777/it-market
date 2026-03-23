import residents from "$public/hero-images/for_residents_icon.png"
import office from "$public/hero-images/for_virtual_office.png"
import contractors from "$public/hero-images/for_contractors_icon.png"
import customers from "$public/hero-images/for_customers_icon.png"
import proffesionals from "$public/hero-images/for_professionals_icon.png"
import employers from "$public/hero-images/rabotadatelem.svg"

export const heroCards = [
    {
        icon: residents,
        title: "Резидентство",
        description: "Подай заявку на получение статуса резидента Технопарка путем отправления заявления Дирекции IT-Парка.",
        linkText: "Создать кабинет на my.it-park.uz",
        optionalLink: "Войти в кабинет на my.it-park.uz",
        number: "1626",
        numberText: "Резидентов",
    },
    {
        icon: office,
        title: "Виртуальный офис",
        description: "Виртуальный офис предоставляется только резидентам IT-Парк.",
        linkText: "Получить Виртуальный офис",
        optionalLink: null,
        number: "40",
        numberText: "Компаний",
    },
    {
        icon: contractors,
        title: "Исполнителям",
        description: "Готовы взяться за проекты и выполнить их успешно? Госзаказы на разработку программных продуктов, аутсорсинг IT-услуг - всё это и даже больше Вы можете найти тут.",
        linkText: "Найти заказ",
        optionalLink: null,
        number: "182",
        numberText: "Заказов",
    },
    {
        icon: customers,
        title: "Заказчикам",
        description: "Большая база IT-компаний Узбекистана. Найдите исполнителя для своего проекта...",
        linkText: "Найти исполнителя",
        optionalLink: null,
        number: "709",
        numberText: "Компаний",
    },
    {
        icon: proffesionals,
        title: "Специалистам",
        description: "Постройте карьеру в IT. Разместите свое резюме и найдите лучшее предложение!",
        linkText: "Найти работу",
        optionalLink: null,
        number: "1730",
        numberText: "Вакансий",
    },
    {
        icon: employers,
        title: "Работодателям",
        description: "Найдите высококвалифицированных IT-специалистов. Найти специалистов.",
        linkText: "Найти специалистов",
        optionalLink: null,
        number: "1557",
        numberText: "Специалистов",
    },
]