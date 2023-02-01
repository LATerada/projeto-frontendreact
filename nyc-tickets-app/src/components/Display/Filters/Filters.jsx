import { FilterContainer, Input, Select } from "./styles"

export const Filter = () => {
    return(
        <FilterContainer>
            <Input placeholder="Search by name:" type="text"></Input>
            <Input placeholder="Minimun Price" type="number"></Input>
            <Input placeholder="Maximum Price" type="number"></Input>
            <Select>
                <option>Low to Hight</option>
                <option>Hight to Low</option>
            </Select>
    
        </FilterContainer>
    )
}