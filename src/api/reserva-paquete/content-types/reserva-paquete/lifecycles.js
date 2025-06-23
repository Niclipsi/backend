import { totalmem } from "os";

export default{
    async beforeCreate(event){
        await calcularTotalDeLasReservas(event); 
    }
}

async function calcularTotalDeLasReservas(event){
    try {
        const {data,where} = event.params;
        const reservaID = data?.id || where?.id; 
        
        if(!reservaID){
            return "por ahora no hay ID";
        }
        const reservaPaquetesLinea = await strapi.entityService.findMany('api::reserva-paquete-linea.reserva-paquete-linea',{
            filters : {reserva: reservaID},
            fields : ['precioTdeLinea'],
            limit : -1,
        })
        const Total = reservaPaquetesLinea.reduce((acc,item) => {
            return acc + (item.precio_total || 0);
                },0);
                data.precio_total = Total;
    } catch (error) {
        console.error("Error a la hora de calcular el total de las reservas",error);
    }    
}