import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button'; 
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, LucideCalendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { TimePicker } from './time-picker';
import { toast } from 'sonner';
import { useState } from 'react';
import { EndTimePicker } from './duracao';
import { useCardModal } from '@/hooks/use-card-modal';
import { useQuery } from '@tanstack/react-query';
import { fetchCardById } from '@/app/api/fetch-card-by-id/route';


const formSchema = z.object({
    dateTime: z.date(),
});
type FormSchemaType = z.infer<typeof formSchema>;

export default function DateTimePickerForm() {
    const id = useCardModal((state) => state.id);
    const [endTime, setEndTime] = useState<Date | undefined>(undefined);

    const { data: cardData, isLoading, error } = useQuery(
        ['card', id],
        () => fetchCardById(id),
        { enabled: !!id } // Only fetch if id is available
    );

    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(values: FormSchemaType) {
        console.log("Título do evento:", cardData.title);
        console.log("Descrição do evento:", cardData.description);
        console.log("Data de início:", values.dateTime);
        console.log("Hora final do evento:", endTime);

        const tokenResponse = await fetch('/api/oauth2');
        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        const event = {
            'summary': cardData.title,
            'description': cardData.description,
            'start': {
                'dateTime': values.dateTime,
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
            },
            'end': {
                'dateTime': endTime,
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
            }
        }
        await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + accessToken, // access token for Google
            },
            body: JSON.stringify(event)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
        })

        toast("Evento criado!");
    }

    return (
        <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
            control={form.control}
            name="dateTime"
            render={({ field }) => (
                <FormItem className='relative flex items-center'>
                    <div className='flex items-center'>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[310px] justify-start text-left font-normal border-2 border-[#8DC3F5]",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4 text-[#463F3A]" />
                                    {field.value ? format(field.value, "dd/MM/yyyy - HH:mm") : <span className='text-[#463F3A] font-extrabold'>Selecionar data</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => date <= new Date()}
                                    initialFocus
                                />
                                <div className='p-3 border-t border-border'>
                                    <p className='font-extrabold text-[#8DC3F5]'>Início do Evento:</p>
                                    <TimePicker setDate={field.onChange} date={field.value}/>
                                </div>
                                <div className='p-3 border-t border-border'>
                                    <p className='font-extrabold text-[#8DC3F5]'>Fim do Evento:</p>  
                                    <EndTimePicker 
                                        setDate={field.onChange} 
                                        date={field.value} 
                                        setEndTime={setEndTime}
                                    />
                                </div>
                            </PopoverContent>
                        </Popover>
                        <Button 
                            variant="lightpurple"
                            onClick={onSubmit}
                            size="calendar"
                            className="ml-3.5"
                        >
                            <LucideCalendar className="h-4 w-4 mr-2" />
                            Salvar
                        </Button>
                    </div>
                    <FormMessage />
                </FormItem>
            )}
        />
    </form>
</Form>

    );
}