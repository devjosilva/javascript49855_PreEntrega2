
const Persona = function(nombre, direccion, comuna){
    this.nombre = nombre
    this.direccion = direccion
    this.comuna = comuna
}

let p1 = new Persona("Juan", "Los libertadores 194", "Santiago")
let p2 = new Persona("Jose ", "11 de Septiembre 4726", "Ñuñoa")
let p3 = new Persona("Raul", "Bernardo Ohiggins 9863", "Providencia")
let p4 = new Persona("Pedro", "Los trapenses 3456", "Provedencia")
let p5 = new Persona("Claudio", "Salesanos 97465", "Providencia")
let p6 = new Persona("Max", "Los libertadores 123", "Santiago")

var listaPersonas = [p1,p2,p3,p4,p5,p6]

function filtrarComuna(){
    let comuna = prompt("Ingrese la comuna a buscar").toUpperCase().trim();
    let resultado = listaPersonas.filter((x)=>x.comuna.toUpperCase().includes(comuna))

    if (resultado.length > 0)
    {
        console.table(resultado)
    }
    else{
        alert("No se encontraron personas en la comuna ingresada: " + comuna)
        return
    }
    Imprimir(resultado)
}

function agregarPersona(){
    let nombre = prompt("ingresa nombre de persona:").trim()
    let direccion = prompt("ingresa la direccion de la persona:").trim()
    let comuna = prompt("ingresa la comuna de la persona:").trim()

    if (nombre == null || nombre == "" || direccion == null || direccion == "" || comuna == null || comuna == "")
    {
        alert("Datos incorrectos. ")
        return 
    }   

    let persona = new Persona(nombre, direccion, comuna)

    if (listaPersonas.some((x)=>x.nombre.trim().toUpperCase() === persona.nombre.trim().toUpperCase()))
    {
        alert("el nombre ya existe")
        return
    }

    listaPersonas.push(persona)
    console.table(listaPersonas)
}

function Imprimir(arreglo){
    // Obtener el elemento div donde se mostrará el arreglo
    var contenedor = document.getElementById("resultado");
    contenedor.innerHTML = ""
    // Crear un elemento ul (lista desordenada)
    var lista = document.createElement("ul");

    // Iterar sobre los objetos del arreglo y mostrar sus propiedades
    arreglo.forEach(function(objeto) {
        var li = document.createElement("li");
        // Crear un string con las propiedades del objeto
        var propiedades = Object.keys(objeto).map(function(key) {
            return key + ": " + objeto[key];
        }).join(", ");
        li.textContent = "{" + propiedades + "}";
        lista.appendChild(li);
    });

    // Agregar la lista al contenedor
    contenedor.appendChild(lista);

}

let opcion = 0
while (opcion != 4)
{
    let menu = "1. Ingresar persona\n2. Listar personas\n3. Buscar por comuna\n4. Salir"
    opcion = parseInt(prompt(menu))
    
    if (isNaN(opcion) || opcion == null || opcion < 1 || opcion > 4  )
    {
        alert("Opción incorrecta");
        continue
    }
    switch(opcion){
        case 1:
            agregarPersona()
            Imprimir(listaPersonas)
            break
        case 2:
            console.table(listaPersonas)
            Imprimir(listaPersonas)
            break
        case 3:
            filtrarComuna()
            break
        default:
            break
    }
}
