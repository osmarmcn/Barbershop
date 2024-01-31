"use client"

import { SearchIcon } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"


const Search = () => {
    return(

        <div className="flex items-center gap-3">
            <Input placeholder="Busque por uma barbearia..."/>
            <Button variant="default" size="icon">
                <SearchIcon size={25}/>
            </Button>

        </div>


    )
}


export default Search