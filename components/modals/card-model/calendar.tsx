"use client";

import DateTimePickerForm from "@/components/modals/card-model/Date-time-picker/date-time-picker-form";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

export const Calendario = () => {
    return(
        <div className="px-2 md:px-4">
            <DateTimePickerForm />
            </div>
    )
}

Calendario.Skeleton = function CalendarioSkeleton() {
    return(
        <div className="flex items-start gap-x-3 w-full">
            <Skeleton className="h-6 w-6 bg-[#8DC3F5]" />
            <div className="w-full">
                <Skeleton className="w-24 h-6 mb-2 bg-[#8DC3F5]" />
                <Skeleton className="w-full h-[78px] bg-[#8DC3F5]" />
            </div>
        </div>
    );
};