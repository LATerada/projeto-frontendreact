import { PageNav } from "./styles"

export const Nav = () => {
    return(
        <PageNav>
            <label>Search by name</label>
            <input type="text"></input>
            <br></br>
            <br></br>
            <label>Min</label>
            <input type="number"></input>
            <label>Max</label>
            <input type="number"></input>
        </PageNav>
    )
}