export async function fetchCardById(id: string) {
    const response = await fetch(`/api/cards/${id}`);
    if (!response.ok) {
        throw new Error('Erro ao buscar o cartão');
    }
    return response.json();
}
