import { Input, Input2, Label, Label2, PageFilter } from "./styles"

export const Filter = () => {
    return(
        <PageFilter>
            <Input placeholder="Search by name:" type="text"></Input>
            <Input2 placeholder="Minimun Price" type="number"></Input2>
            <Input2 placeholder="Maximum Price" type="number"></Input2>
        </PageFilter>
    )
}