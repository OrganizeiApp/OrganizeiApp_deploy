import { FormPopoverFM } from "@/components/TEMPLATES/form-popover-controle-financeiro-mensal";
import { FormPopoverFS } from "@/components/TEMPLATES/form-popover-controle-financeiro-semanal";
import { FormPopover } from "@/components/TEMPLATES/form-popover-controle-hábitos";
import { FormPopoverFacul } from "@/components/TEMPLATES/form-popover-faculdade";
import { FormPopoverPD } from "@/components/TEMPLATES/form-popover-planner-diario";
import { FormPopoverPM } from "@/components/TEMPLATES/form-popover-planner-mensal";
import { FormPopoverPS } from "@/components/TEMPLATES/form-popover-planner-semanal";
import { FormPopoverTXT } from "@/components/TEMPLATES/form-popover-texto";
import { Hint } from "@/components/hint";
import { HelpCircle, User2 } from "lucide-react";


export const BoardList = () => {

    return (
        <div className="space-y-4">
            <div className="flex items-center font-semibold text-lg text-[#f08080]">
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-4">
                {/*Controle de hábitos*/}
                <FormPopover sideOffset={10} side="top">
                <div
                role="button"
                className="aspect-video relative h-full w-full bg-[#f0e5db] border-2 border-[#f08080] rounded-lg flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
                >
                <p className="text-sm text-[#f08080] font-extrabold">Controle de Hábitos</p>
                <Hint
                    sideOffset={0}
                    description={`
                        Uma ferramenta para monitorar e acompanhar hábitos diários ou semanais, permitindo que o usuário visualize seu progresso ao longo do tempo e mantenha a consistência em novas rotinas.
                        `}
                >
                    <HelpCircle
                    className="absolute bottom-2 right-2 h-[14px] w-[14px] text-[#f08080]"
                    />
                </Hint>
                </div>
                </FormPopover>
                
                {/*Controle Financeiro Mensal*/}
                <FormPopoverFM sideOffset={10} side="bottom">
                <div
                role="button"
                className="aspect-video relative h-full w-full bg-[#f0e5db] border-2 border-[#f08080] rounded-lg flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
                >
                <p className="text-sm text-[#f08080] font-extrabold">Controle Financeiro Mensal</p>
                <Hint
                    sideOffset={0}
                    description={`
                        Um template focado no planejamento e acompanhamento de despesas e receitas mensais. Ideal para organizar as finanças e estabelecer metas de economia a longo prazo.
                        `}
                >
                    <HelpCircle
                    className="absolute bottom-2 right-2 h-[14px] w-[14px] text-[#f08080]"
                    />
                </Hint>
                </div>
                </FormPopoverFM>

                {/*Controle Financeiro Semanal*/}
                <FormPopoverFS sideOffset={10} side="bottom">
                <div
                role="button"
                className="aspect-video relative h-full w-full bg-[#f0e5db] border-2 border-[#f08080] rounded-lg flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
                >
                <p className="text-sm text-[#f08080] font-extrabold">Controle Financeiro Semanal</p>
                <Hint
                    sideOffset={0}
                    description={`
                        Um template para acompanhar receitas e despesas semanais, ideal para controlar as finanças em ciclos curtos e monitorar os gastos diários.
                        `}
                >
                    <HelpCircle
                    className="absolute bottom-2 right-2 h-[14px] w-[14px] text-[#f08080]"
                    />
                </Hint>
                </div>
                </FormPopoverFS>
                
                {/*Faculdade*/}
                <FormPopoverFacul sideOffset={10} side="bottom">
                <div
                role="button"
                className="aspect-video relative h-full w-full bg-[#f0e5db] border-2 border-[#f08080] rounded-lg flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
                >
                <p className="text-sm text-[#f08080] font-extrabold">Faculdade</p>
                <Hint
                    sideOffset={0}
                    description={`
                        Um template dedicado à vida acadêmica, incluindo planejamento de aulas, tarefas, prazos de entrega e atividades relacionadas ao estudo, visando otimizar a organização no ambiente universitário.
                        `}
                >
                    <HelpCircle
                    className="absolute bottom-2 right-2 h-[14px] w-[14px] text-[#f08080]"
                    />
                </Hint>
                </div>
                </FormPopoverFacul>

                {/*Planner Diário*/}
                <FormPopoverPD sideOffset={10} side="bottom">
                <div
                role="button"
                className="aspect-video relative h-full w-full bg-[#f0e5db] border-2 border-[#f08080] rounded-lg flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
                >
                <p className="text-sm text-[#f08080] font-extrabold">Planner Diário</p>
                <Hint
                    sideOffset={0}
                    description={`
                        Uma agenda diária para organizar tarefas, compromissos e eventos. Permite que o usuário defina suas prioridades e gerencie melhor o tempo.
                        `}
                >
                    <HelpCircle
                    className="absolute bottom-2 right-2 h-[14px] w-[14px] text-[#f08080]"
                    />
                </Hint>
                </div>
                </FormPopoverPD>
                
                {/*Planner Mensal*/}
                <FormPopoverPS sideOffset={10} side="bottom">
                <div
                role="button"
                className="aspect-video relative h-full w-full bg-[#f0e5db] border-2 border-[#f08080] rounded-lg flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
                >
                <p className="text-sm text-[#f08080] font-extrabold">Planner Mensal</p>
                <Hint
                    sideOffset={15}
                    description={`
                        Um calendário mensal que ajuda a visualizar compromissos, eventos e metas a longo prazo, ideal para o planejamento global de atividades.
                        `}
                >
                    <HelpCircle
                    className="absolute bottom-2 right-2 h-[14px] w-[14px] text-[#f08080]"
                    />
                </Hint>
                </div>
                </FormPopoverPS>
                                
                {/*Planner Semanal*/}
                <FormPopoverPM sideOffset={10} side="bottom">
                <div
                role="button"
                className="aspect-video relative h-full w-full bg-[#f0e5db] border-2 border-[#f08080] rounded-lg flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
                >
                <p className="text-sm text-[#f08080] font-extrabold">Planner Semanal</p>
                <Hint
                    sideOffset={0}
                    description={`
                        Uma agenda semanal para organizar tarefas, compromissos e eventos. Permite que o usuário defina suas prioridades e gerencie melhor o tempo.
                        `}
                >
                    <HelpCircle
                    className="absolute bottom-2 right-2 h-[14px] w-[14px] text-[#f08080]"
                    />
                </Hint>
                </div>
                </FormPopoverPM>
                                                
                {/*Texto*/}
                <FormPopoverTXT sideOffset={10} side="bottom">
                <div
                role="button"
                className="aspect-video relative h-full w-full bg-[#f0e5db] border-2 border-[#f08080] rounded-lg flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
                >
                <p className="text-sm text-[#f08080] font-extrabold">Texto</p>
                <Hint
                    sideOffset={0}
                    description={`
                        Um espaço dedicado para escrever e organizar textos, seja para brainstorms, redação de artigos ou notas. Permite criar e gerenciar documentos de forma organizada.
                        `}
                >
                    <HelpCircle
                    className="absolute bottom-2 right-2 h-[14px] w-[14px] text-[#f08080]"
                    />
                </Hint>
                </div>
                </FormPopoverTXT>
            </div>
        </div>
    );
};
