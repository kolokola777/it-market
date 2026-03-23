import { Container } from "@/components/container";
import { Flex } from "@/components/flex";
import Link from "next/link";

export const RegisterSection = () => {
    return (
        <section className="bg-[url(/registration-bg.jpg)] overflow-hidden bg-no-repeat">
            <Container type="default">
                <Flex justify={"between"} items={"center"} className="py-11.5 px-15">
                    <div className="text-white">
                        <h4 className="text-2xl mb-4">
                            Еще не зарегистрированы?
                        </h4>
                        <p className="uppercase text-xs">
                            Не упускайте возможность быть всегда в курсе последних событий в IT Рынке Узбекистана
                        </p>
                    </div>

                    <Flex justify={"center"} items={"center"} direction={"vertical"} className="text-center">
                        <Link
                            href="/register"
                            className="text-[#1DCE1D] text-sm bg-white rounded-full py-2 px-3 transition-all duration-200 hover:brightness-90 inline-block uppercase"
                        >
                            Зарегистрироваться
                        </Link>
                    </Flex>
                </Flex>
            </Container>
        </section>
    );
};