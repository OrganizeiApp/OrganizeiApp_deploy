'use client';

import * as React from 'react';
import { Label } from '@/components/ui/label';

interface TimePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  setEndTime: (time: Date | undefined) => void; // Função para definir a hora final
}

export function EndTimePicker({ date, setDate, setEndTime }: TimePickerProps) {
  const [durationHours, setDurationHours] = React.useState<number>(0);
  const [durationMinutes, setDurationMinutes] = React.useState<number>(0);

  // Atualiza a hora final sempre que a hora inicial ou a duração mudarem
  React.useEffect(() => {
    const calculateEndTime = () => {
      if (date) {
        const endDate = new Date(date);
        endDate.setHours(endDate.getHours() + durationHours);
        endDate.setMinutes(endDate.getMinutes() + durationMinutes);

        // Verifica se o horário final é inferior a 23:59
        if (endDate.getHours() < 24 || (endDate.getHours() === 23 && endDate.getMinutes() <= 59)) {
          return endDate;
        } else {
          // Se passar das 23:59, ajusta para o máximo possível
          endDate.setHours(23);
          endDate.setMinutes(59);
          return endDate;
        }
      }
      return undefined;
    };

    const endTime = calculateEndTime();
    setEndTime(endTime);
  }, [date, durationHours, durationMinutes, setEndTime]);

  return (
    <div className="flex items-end gap-2">
      <div className="grid gap-1 text-center">
        <Label htmlFor="duration-hours" className="text-xs">
          Duração (Horas)
        </Label>
        <input
          id="duration-hours"
          type="number"
          min="0"
          max="23"
          value={durationHours}
          onChange={(e) => setDurationHours(parseInt(e.target.value))}
          className="border p-1 rounded"
        />
      </div>
      <div className="grid gap-1 text-center">
        <Label htmlFor="duration-minutes" className="text-xs">
          Duração (Minutos)
        </Label>
        <input
          id="duration-minutes"
          type="number"
          min="0"
          max="59"
          value={durationMinutes}
          onChange={(e) => setDurationMinutes(parseInt(e.target.value))}
          className="border p-1 rounded"
        />
      </div>
    </div>
  );
}
