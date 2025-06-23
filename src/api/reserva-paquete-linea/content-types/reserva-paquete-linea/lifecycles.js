export default {
    async beforeCreate(event){
        const { data } = event.params;
        try {
        const paqueteID = data?.paquetes_turismo?.connect?.[0]?.id;
        const cantidad = data?.cantidad;
        if (!paqueteID || cantidad !== 'number') {
            return "ingrese valores validos";            
        }
        const paquetes = await strapi.entityService.findMany('api::paquetes-turismo.paquetes-turismo',{
            filters: { id: paqueteID},      
            fields : ['precio'],    
            limit : 1,
        });
        const paquete = paquetes[0];
          if(!paquete || typeof paquete.precio !== 'number'){
            return "ingrese valores validos en paquete o precio";
          }
          data.precioTdeLinea = paquete.precio * cantidad;    
           } 
    catch (error) {
        console.error("ERROR A LA HORA DE CALCULAR EL PRECIO TOTAL DE RESERVAS_PAQUTE", error)
    }
    }
    
}