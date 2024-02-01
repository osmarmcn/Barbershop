
import { ptBR } from "date-fns/locale";
import Header from "../components/header";
import {format} from "date-fns";
import Search from "./search";
import BookingItem from "../components/booking-item";
import { db } from "../_lib/prisma";
import BarbershopItem from "./barbershop-item";


export default async function Home() {

  const barbershop = await db.barbershop.findMany({})


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

      <div className="mt-6">
        <h2 className="px-5 text-sm mb-3 uppercase text-gray-400 font-bold" >Recomendados</h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden ">
          {barbershop.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
          ))}
        </div>


      </div>

      <div className="mt-6 mb-[4.5rem]">
        <h2 className="px-5 text-sm mb-3 uppercase text-gray-400 font-bold" >Populares</h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden ">
          {barbershop.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
          ))}
        </div>


      </div>
     
    </div>

  )
}
