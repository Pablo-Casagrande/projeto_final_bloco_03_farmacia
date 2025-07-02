import type Produto from "./Produto";

﻿export default interface Categoria {
    id: number | undefined;
    tipo: string;
    produto?: Produto[] | null;
}