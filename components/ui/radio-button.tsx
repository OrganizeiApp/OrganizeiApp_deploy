import { useState } from "react";

export default function Radiobuttonlist({ onChange }: { onChange: (value: string) => void }) {
    const items: { value: string, label: string }[] = [
        { value: 'caderno', label: 'Caderno' },
        { value: 'resumo', label: 'Resumo' },
    ];
    const [value, setValue] = useState<string | null>(null);

    const handleChange = (newValue: string) => {
        setValue(newValue);
        onChange(newValue);  // Passa o valor selecionado para o pai
    };

    return (
        <>
            {items.map(item => (
                <div key={item.value}>
                    <input
                        name="opt"
                        type="radio"
                        value={item.value}
                        id={item.value}
                        checked={value === item.value}
                        onChange={e => handleChange(e.target.value)}  // Atualiza o estado e chama onChange
                    />
                    <label
                        className="font-extrabold text-sm text-[#463F3A]"
                        htmlFor={item.value}
                    >
                        {item.label}
                    </label>
                </div>
            ))}
        </>
    );
}
