
import Image from "next/image";
import { Card, CardContent } from "../components/ui/card";
import {Barbershop} from '@prisma/client'
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { StarIcon } from "lucide-react";



interface BarbershopItemProps {
    barbershop: Barbershop
}

const BarbershopItem = ({barbershop}: BarbershopItemProps) => {
   
    return (  

        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className=" px-1 py-0">
                <div className="px-1 relative h-[159px] w-full">
                    <div className="absolute top-2 left-2 z-50">
                        <Badge variant="secondary" className="opacity-90 flex gap-1 items-center top-3 left-3">
                            <StarIcon size={12} className="fill-primary text-primary"/>
                            <span className="text-xs">5.0</span>

                        </Badge>
                    </div>
                   


                     <Image src={barbershop.imageUrl} fill className="rounded-2xl" alt={barbershop.name} style={{objectFit:"cover"}}/>
                </div>
                   
                {/* height={0} width={0} sizes="100vw */}
               
                <div className="px-3 pb-4">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>

                    <Button className="w-full mt-3" variant="secondary">Reservar</Button>

                </div>
                   
             
               
            </CardContent>

           

        </Card>


    );
}
 
export default BarbershopItem;