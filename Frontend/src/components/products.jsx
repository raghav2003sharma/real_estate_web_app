import React from "react";
import Card from "./cards";
function Product(){
  
    return(
        <div className="product">
            <Card
           img="../assets/house1.jpg"
           details="2bhk with balcony
           2876 sqft area"
           location="mohali sector 8"
           price="89lacs" 
           />
             <Card
           img="../assets/house2.webp"
           details="3bhk with garden"
           location="chandigarh sector56"
           price="1.3 crores" 
           />
             <Card
           img="../assets/house3.jpg"
           details="4bhk with balcony"
           location="chandigarh 17"
           price="3 crores negotiable" 
           />
            
        </div>
    )
}
export default Product;