import type Categoria from "./Categoria";

export default interface Produto{
    id: number;
    categoria: Categoria | null;
}