import React from "react";
import "./styles.css"
import Product from "./Product";


function App(){
    const products= [
        {id: 1, description: "Unisex Cologne", image: "/products/cologne.jpg", value: 0 },
        {id: 2, description: "Apple iWatch", image: "/products/iwatch.jpg", value: 0 },
        {id: 3, description: "Unique Mug", image: "/products/mug.jpg", value: 0 },
        {id: 4, description: "Mens wallet", image: "/products/wallet.jpg", value: 0 }
    ]
return(
    <div>
      {/* Header */}
       <header className="header">
        <h1>Shop to react</h1>
        <div className="cart">
            <i class="fa-solid fa-cart-shopping"></i>
            0 items
        </div>
       </header>

        <div className="product-list">
            
        {products.map((p) => (
          <Product key={p.id} {...p} />
        ))}
        </div>

    </div>
)
}

export default App;