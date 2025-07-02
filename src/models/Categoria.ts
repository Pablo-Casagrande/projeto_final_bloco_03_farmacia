import type Produto from "./Produto";

﻿export default interface Categoria {
    id: number | undefined;
    nome: string;
    produto?: Produto[] | null;
}