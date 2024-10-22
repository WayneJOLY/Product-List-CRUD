



class Product{

 constructor(name,price,date)
    {
    this.name=name,
    this.price=price,
    this.date=date
    }
}


class UI{

    AddProduct  ( product){
        const productsList= document.querySelector(".products-list")
        const productDiv=document.createElement('div')
        productDiv.innerHTML=`<div class="list-item">
                <div class="product-detail">
                    <p>Product Name: <span>${product.name}</span></p>
                    <p>Product Price: <span>$ ${product.price}</span></p>
                    <p>Product Date: <span>${product.date}</span></p>
                </div>
                <button id="delete" value="delete">Delete</button>
            </div>`

            productsList.appendChild(productDiv)
    }

    DeleteProduct(){
           
    }
    
    ClearCard(){
        document.querySelector("#product-form").reset()
    }
}

document.getElementById("enviar").addEventListener("click",(e)=>{
    e.preventDefault()
    const name=document.querySelector("#productNAme").value
    const price= document.querySelector("#price").value
    const date=document.querySelector("#date").value
    
    const procuct= new Product(name,price,date)
    console.log(procuct)
    const ui= new UI()
    ui.AddProduct(procuct)
    
})

document.querySelector("#delete").addEventListener("click",(e)=>{
if(e.value==="delete")
{
    e.parentElement.parentElement.parentElement.remove()
}
})

document.querySelector(".products-list").addEventListener("click",(e)=>{
        
    if(e.target.id =='delete')
    {console.log("EL BOTON")

        let elemento = e.target;
        let padre = elemento.parentNode;
        let abuelo = padre.parentNode;
        abuelo.parentNode.removeChild(abuelo);
        //e.parentNode.parentNode.remove()
    }
    else{
        console.log(e.target)
    }
})