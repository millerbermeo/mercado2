
let inputBusqueda = document.getElementById("inputBusqueda");

class Automovil {
    constructor(marca, modelo, precio,year, km, city) {
        this.marca = marca;
        this.modelo= modelo;
        this.precio= precio;
        this.year= year;
        this.km= km;
        this.city= city;
    }
}

let auto1 = new Automovil("BMW", "s1000rr", 104000000, "2023", "22.000", "Pitalito - Huila");



window.addEventListener('keydown', function(event) {
    if (event.key == "Enter"){
        let mainContent = document.getElementById("mainContent");
        // Caja para el producto
        let boxProducto = document.createElement("div");
        mainContent.appendChild(boxProducto);
        boxProducto.setAttribute("class", "box-producto");
    
        // Caja para la imagen
        let boxImg = document.createElement("div");
        boxProducto.appendChild(boxImg);
        boxImg.setAttribute("class", "box-img");

        let imgAuto = document.createElement("img");
        
        boxImg.appendChild(imgAuto);
        imgAuto.setAttribute("src","motogp.webp");
        imgAuto.setAttribute("class", "img-auto");
    
        // Caja para la informacion
        let boxInfo = document.createElement("div");
        boxProducto.appendChild(boxInfo);
        boxInfo.setAttribute("class", "box-info");

        let marca = document.createElement("label")
        boxInfo.appendChild(marca)
        
        let txtNodeMarca = this.document.createTextNode(auto1.marca + " " + auto1.modelo)
        marca.appendChild(txtNodeMarca)



        let precio = document.createElement("label")
        boxInfo.appendChild(precio)


        let prescioSrt = Intl.NumberFormat("de-DE").format(auto1.precio)

        let txtNodePrecio = document.createTextNode(`$ ${prescioSrt}`)
        precio.appendChild(txtNodePrecio)
        precio.setAttribute("class", "precio")



        let kilometraje = document.createElement("label")
        boxInfo.appendChild(kilometraje)

        let txtNodeKm = document.createTextNode(`${auto1.year} . ${auto1.km} km ${auto1.city}`)
        kilometraje.appendChild(txtNodeKm)
        kilometraje.setAttribute("class", "kilometraje")




        let boxCorazon = document.createElement("div")
        boxImg.appendChild(boxCorazon);

        let iconCorazon = document.createElement("i");

        boxCorazon.appendChild(iconCorazon)
        boxCorazon.setAttribute("class", "box-corazon")
        iconCorazon.setAttribute("class", "icon-corazon fa-regular fa-heart")


    
    }
})