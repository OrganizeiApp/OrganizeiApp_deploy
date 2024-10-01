import { ICard, IList } from "@prisma/client";

export type ListWithCards = IList & { cards: ICard[] };

export type CardWithList = ICard & { list: IList };