import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import Link from "next/link";

export const Footer = () => {
    return (
        <div className="flex items-center w-full px-6 z-50 dark:bg-[#6F73D2]">
            <div className="hidden sm:block">
                <Logo />
            </div>
            {/* Container flexível para ajustar o alinhamento conforme o tamanho da tela */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-start sm:justify-end gap-x-2 text-muted-foreground">
                {/* Alinhar "Política de Privacidade" à esquerda em telas pequenas e à direita em telas médias/grandes */}
                <Link href="/privacy-policy">
                    <Button variant="ghostmarketing">
                        Política de Privacidade
                    </Button>
                </Link>
                {/* "Termos de Serviço" sempre será à direita, seguindo a lógica de alinhamento da tela */}
                <Link href="/terms-of-service">
                    <Button variant="ghostmarketing">
                        Termos de Serviço
                    </Button>
                </Link>
            </div>
        </div>
    );
};
