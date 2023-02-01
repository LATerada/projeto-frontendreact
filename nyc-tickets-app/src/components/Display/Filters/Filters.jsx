import { FilterContainer, Input, Select } from "./styles"

export const Filter = ({query,setQuery}) => {
    return(
        <FilterContainer>
            <Input 
                placeholder="Search by name:" 
                type="text"
                value={query}
                onChange={(event) => {setQuery(event.target.value)}}
                />
            <Input 
                placeholder="Minimun Price" 
                type="number"
                />
            <Input 
                placeholder="Maximum Price"
                type="number"
                />
            <Select>
                <option>Low to Hight</option>
                <option>Hight to Low</option>
            </Select>
    
        </FilterContainer>
    )
}