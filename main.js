
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

let lista = [p1,p2,p3,p4,p5,p6]

function filtrarComuna(){
    let comuna = prompt("Ingrese la comuna a buscar").toUpperCase().trim();
    let resultado = lista.filter((x)=>x.comuna.toUpperCase().includes(comuna))

    if (resultado.length > 0)
    {
        console.table(resultado)
    }
    else{
        alert("No se encontraron personas en la comuna ingresada: " + comuna)
    }
}

function agregarPersona(){
    let nombre = prompt("ingresa nombre de persona:").trim()
    let direccion = prompt("ingresa la direccion de la persona:").trim()
    let comuna = prompt("ingresa la comuna de la persona:").trim()

    if (nombre == "" || direccion == "" || comuna == "")
    {
        return 
    }   

    let persona = new Persona(nombre, direccion, comuna)

    if (lista.some((x)=>x.persona.nombre == persona.nombre))
    {
        alert("el nombre ya existe")
        return
    }

    lista.push(persona)
    console.table(lista)
}

let opcion = 0
while (opcion != 4)
{
    let menu = "1. Ingresar persona\n 2. Listar personas\n3. Buscar por comuna\n4. Salir"
    opcion = parseInt(prompt(menu))
    
    if (isNaN(opcion) || opcion == null || opcion < 1 || opcion > 4  )
    {
        alert("Opción incorrecta");
        continue
    }
    switch(opcion){
        case 1:
            agregarPersona()
            break
        case 2:
            console.table(lista)
            break
        case 3:
            filtrarComuna()
            break
        default:
            break
    }
}
