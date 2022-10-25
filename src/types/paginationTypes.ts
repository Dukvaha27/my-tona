export type paginationProps = {
    limit:number;
    onChange:(obj:pagesType) => void;
    total:number
}

type pagesType = {
    start:number;
    offset:number;
}