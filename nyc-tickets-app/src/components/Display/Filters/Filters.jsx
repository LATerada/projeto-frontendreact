import { FilterContainer, Input, Input2 } from "./styles"

export const Filter = () => {
    return(
        <FilterContainer>
            <Input placeholder="Search by name:" type="text"></Input>
            <Input2 placeholder="Minimun Price" type="number"></Input2>
            <Input2 placeholder="Maximum Price" type="number"></Input2>
        </FilterContainer>
    )
}