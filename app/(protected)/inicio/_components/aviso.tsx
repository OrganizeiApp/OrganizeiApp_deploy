import { TriangleAlert } from "lucide-react";

const Avisos = () => {
    return (
        <div className="bg-destructive/15 p-5 rounded-md flex items-center gap-x-2 text-sm text-destructive font-bold lg:max-w-[50vw]">
            <TriangleAlert className='h-7 w-7' />
            <p>
            Aviso:
            </p>
            <p>Se encontrar um problema relacionado ao Google Calendário, por favor, saia e faça login novamente.</p>
        </div>
    );
}

export default Avisos;