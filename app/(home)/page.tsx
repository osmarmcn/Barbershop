
import { ptBR } from "date-fns/locale";
import Header from "../components/header";
import {format} from "date-fns";
import Search from "./search";
import BookingItem from "../components/booking-item";


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

      <div className="px-5 mt-6">

        <h2 className="text-sm mb-3 uppercase text-gray-400 font-bold" >Agendamentos</h2>
        <BookingItem/>
      </div>
      
     
    </div>

  )
}
