import { FilterContainer, Input, Select } from "./styles"

export const Filter = ({ query, minPrice, maxPrice, sortParameter, setQuery, setMinPrice, setMaxPrice, setSortParameter }) => {
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
                min="0"
                value={minPrice}
                onChange={(event) => {setMinPrice(event.target.value)}}
                />
            <Input 
                placeholder="Maximum Price"
                type="number"
                min="0"
                value={maxPrice}
                onChange={(event) => {setMaxPrice(event.target.value)}}
                />
            <Select
                value={sortParameter}
                onChange={(event) => {setSortParameter(event.target.value)}}>
                <option value="" disabled >Sort by price</option>
                <option value="low">Low to Hight</option>
                <option value="high" >Hight to Low</option>
                <option value="">None</option>
            </Select>
    
        </FilterContainer>
    )
}