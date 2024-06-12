/**
 * Crea una funcion que recibiendo un precio y un impuesto devuelva el precio neto
 */


function taxes(price, tax){
    return price+price*tax;
}


console.log(taxes(100, 0.21))