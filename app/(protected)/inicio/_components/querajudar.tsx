"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export const Feedback = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-x-4">
            <div className="lg:pt-8 lg:pr-4 w-full h-[60px] relative text-center">
                <p className="lg:pt-0 pt-6 font-extrabold lg:text-5xl text-5xl text-[#7935E8]">
                    Você pode nos ajudar?
                </p>
                <div className="flex pt-8 items-center justify-center w-full"/>
                <h1 className="font-bold lg:text-3xl text-xl px-2">
                    Por favor, preencha este formulário para contribuir com o desenvolvimento do nosso projeto!
                </h1>
                <div className="flex items-center justify-center pt-4">
                    <Link href="https://forms.gle/vhn5N7v77xXMqnVaA">
                        <Button variant="dashboard" size="bigd">
                            Feedback
                        </Button>
                    </Link>
                </div>
                <div className="pt-8">
                    <Separator />  
                    <div className="pt-4">
                        <p className="text-[#7935E8] font-extrabold lg:text-5xl text-5xl">
                            Quem somos?
                        </p>
                        <div className="flex pt-8 items-center justify-center w-full"/>
                        <h1 className="font-bold lg:text-3xl text-xl px-2">
                            Olá, nós somos a Organizei, participamos do um programa de aceleração de startups do mescla. <span>Estamos aqui para ajudar a melhorar a sua rotina de estudos. </span>
                        </h1>
                    </div>
                </div>
                <div className="pt-8">
                    <Separator />
                    <div className="pt-4">
                        <p className="text-[#7935E8] font-extrabold lg:text-5xl text-5xl">
                            Nossas Redes Sociais!
                        </p>
                        <div className="pt-4 flex items-center justify-center">
                            <Link href="https://www.instagram.com/organizeiapp?igsh=MTFlYWpzZmQ0c3NzYg==">
                                <Button className="normal-case" variant="instagram" size="bigd">
                                    Instagram
                                </Button>
                            </Link>
                        </div>
                        <div className="pt-4 flex items-center justify-center">
                            <Link href="https://www.tiktok.com/@organizeiapp?_t=8p2Gp80bRrh&_r=1">
                                <Button className="normal-case" variant="tiktok" size="bigd">
                                    TikTok
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
