/**
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720 
 */


function nombreResolucion(ancho, alto){
    const _8K = {
        nombre:'8K',
        ancho: 7680,
        alto: 4320
    };
    const _4K = {
        nombre:'4K',
        ancho: 3840,
        alto: 2160
    };
    const WQHD = {
        nombre:'WQHD',
        ancho: 2560,
        alto: 1440
    };
    const FHD = {
        nombre:'FHD',
        ancho: 1920,
        alto: 1080
    };
    const HD = {
        nombre:'HD',
        ancho: 1280,
        alto: 720
    };

    const resoluciones = [_8K, _4K, WQHD, FHD, HD];

    for(resolucion of resoluciones){
        if(alto>=resolucion.alto&&ancho>=resolucion.ancho){
            return resolucion;
        }
    }
    
    
}

console.log(nombreResolucion(7680, 4310));