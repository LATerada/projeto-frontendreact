import { FilterContainer, Input, Select } from "./styles"

export const Filter = ({query, minPrice, setQuery, setMinPrice}) => {
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
                value={minPrice}
                onChange={(event) => {setMinPrice(event.target.value)}}
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