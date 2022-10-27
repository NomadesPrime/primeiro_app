import { Geolocation} from '@capacitor/geolocation'

export function meuMapa(){
    const pegarCoordenadas = async ()=>{
        const cordinates = await Geolocation.getCurrentPosition();
        console.log('current position: ' , cordinates);
    };
    return{
        pegarCoordenadas
    }

}