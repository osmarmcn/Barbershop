
import { ptBR } from "date-fns/locale";
import Header from "../components/header";
import {format} from "date-fns";
import Search from "./search";


export default function Home() {
  return (
    <div>
      <Header/>
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Miguel!</h2>
        <p className="capitalize text-sm">
            {format(new Date(), "EEEE ',' d 'de' MMMM 'de' yyyy", {
            locale: ptBR,
          })}
        </p>
      </div>
      <div className="px-5 mt-6">
          <Search/>
      </div>
      
     
    </div>

  )
}
