import { Input, Input2, Label, Label2, PageFilter } from "./styles"

export const Filter = () => {
    return(
        <PageFilter>
            <Label>Search by name:</Label>
            <Input type="text"></Input>
            <Label2>Min. Price:</Label2>
            <Input2 type="number"></Input2>
            <Label2>Max. Price:</Label2>
            <Input2 type="number"></Input2>
        </PageFilter>
    )
}