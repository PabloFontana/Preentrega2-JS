/* Pagina de ecommerce de muebles industriales */
/* Posteriormente con mayor codigo voy a realizar diferentes archivos de js para tener las funciones separadas. */
let nombre = "Pablo ";
let apellido = "Fontana";
let nombre_apellido = nombre + apellido;

let usuario = prompt ("Bienvenido a Cronoz!! como es tu nombre?")

//validacion de contrasena y user para futuro login.
function validar_password(password){
        if( password=== "" || (password.lenght<4 )){
                return false;
        }else{
                return true;
        }
        }
function validar_user(user){
        if( user=== "" || (user.lenght<4) ){
                return false;
        }else{
                return true;
        }
        }

//variable para la redireccion de los diferentes productos! 
let redireccion;
do{
        redireccion = prompt("Hola " + usuario + ". ¿Qué estás interesado en buscar? Muebles para la living, cocina, comedor o otros?");
        redireccion = redireccion.toLowerCase();
        if (redireccion === "living" || redireccion === "cocina" || redireccion === "comedor" || redireccion === "otros") {
        alert("Esta semana tenemos ofertas en " + redireccion + ", ¡imperdibles!");
        } else {
        alert("No ingresaste un producto válido. ¡Inténtalo de nuevo!");
        }
        console.log(redireccion);
} while (redireccion !== "living" && redireccion !== "cocina" && redireccion !== "comedor" && redireccion !== "otros");



function escritorio(cantidad) {
        let precio_escritorio = 500;
        let costo_escritorio;

        if (isNaN(parseFloat(cantidad))) {
        console.log("Ingrese un número válido");
        return;
        }
        let resultado = precio_escritorio * cantidad;
        costo_escritorio = "Debes abonar $" + resultado;
        console.log(costo_escritorio);
}

const listaProd =[
        {id : 1 , nombreProd : 'Rack bajo TV' , precio : 1 , categoria : 'living' }, 
        {id : 2 , nombreProd : 'Biblioteca' , precio : 1 , categoria : 'living' },
        {id : 3 , nombreProd : 'Mesa ratonera' , precio : 1 , categoria : 'living' }, 
        {id : 4 , nombreProd : 'Perchero recibidor' , precio : 1 , categoria : 'living' }, 
        {id : 5 , nombreProd : 'Rack TV' , precio : 1 , categoria : 'living' }, 
        {id : 6 , nombreProd : 'Rack bajo TV con cajones' , precio : 1 , categoria : 'living' }, 
        {id : 7 , nombreProd : 'Combo Rack TV + Ratonera' , precio : 1 , categoria : 'living' }, 
        /* Termina seccion de comedor y cocina. */
        {id : 8 , nombreProd : 'Alacena' , precio : 1 , categoria : 'comedorCocina' },
        {id : 9 , nombreProd : 'Combo desayunador + 4 sillas' , precio : 1 , categoria : 'comedorCocina' },
        {id : 10 , nombreProd : 'Combo mesa + 4 sillas' , precio : 1 , categoria : 'comedorCocina' },
        {id : 11 , nombreProd : 'Mesa comedor industrial' , precio : 1 , categoria : 'comedorCocina' },
        {id : 12 , nombreProd : 'Mesa comedor estilo industrial' , precio : 1 , categoria : 'comedorCocina' },
        {id : 13 , nombreProd : 'Silla industrial pack 4' , precio : 1 , categoria : 'comedorCocina' },
        /* Termina seccion de comedor y cocina. */
        {id : 14 , nombreProd : 'Escritorio con 3 cajones' , precio : 1 , categoria : 'otros' },
        {id : 15 , nombreProd : 'Mesa de luz con cajon' , precio : 1 , categoria : 'otros' },
        {id : 16 , nombreProd : 'Mesa de luz' , precio : 1 , categoria : 'otros' },
        {id : 17 , nombreProd : 'Respadar para cama 2 plazas' , precio : 1 , categoria : 'otros' },
        
]
/* momentaneamente todos los productos valen uno para poder validar mejor la eleccion de la cantidad y corroborarlo tambien con el precio */

/* Para barra de busqueda */

class busquedaProd {
        constructor(listaProd){
                this.listaProd = listaProd; 
        }

addStock(producto){
        let id = this.listaProd.length +1 ;
        producto.id = id ;
        this.listaProd.push(producto);
        
}
/* retornando producto por id */
getProductoById(id){
        const productoCod = this.listaProd.find ( item => item.id == id);
        
return productoCod ? productoCod : 'No ingresaste un codigo de producto valido, intenta de nuevo.' ;
}

/* filtro por categoria */
getProductoByCategoria(categoria){
        const listaProd = this.listaProd.filter(item => item.categoria=== categoria );
        return listaProd; 
        
        }
/* filtro por nombre de producto. con Includes aplicado!! */
getProductoByNombreProd(nombreProd){
        const listaProd = this.listaProd.filter(item => item.nombreProd.toLowerCase().includes(nombreProd.toLowerCase()));
        return listaProd;
}
getProductoByIVA(precio){
        const sumaIva = precio*1.21;
}

showProducto(){
        console.table(this.listaProd);
}
}       


const busquedaProducto = new busquedaProd(listaProd);
/* const productosdispo = busquedaProducto.getProductoById(23);
const filtros = busquedaProducto.getProductoByCategoria('living'); */


/* Para agrear producto nuevo al stock. solo dueno del sitio */
let productonuevo = prompt ('Que producto desea agregar al stock? De lo contrario escriba "No"')
do{
        let precio;
        do {
                precio = parseInt(prompt('Precio'));
                if (isNaN(precio)) {
                        alert("Por favor, ingrese un precio válido. Solo número sin $");
                }
                } while (isNaN(precio));
        categoria =  prompt ('Categoria')
        

        busquedaProducto.addStock({nombreProd: productonuevo , precio : precio , categoria : categoria})
        busquedaProducto.showProducto();

        productonuevo = prompt ('Que otro producto desea agregar? De lo contrario escriba "No"')
}while(productonuevo.toLowerCase() != 'no') 



/* Estos id van a entenderse mejor cuando se linkee la pagina de productos al js. */
