import ArticleProducts from "./ArticleProducts";
import tas1 from "../../assets/bag_1.png";
import tas2 from "../../assets/bag_2.png";
import tas3 from "../../assets/bag_3.png";
import tas4 from "../../assets/bag_4.png";


function ArticleProductsMultiple(){
    return(
<>
<ArticleProducts
    redLabelText={"Best Seller"}
    imgTas={tas1}
    imgAlt={"pink bag"}
    nameBag={"The Handy Bag"}
    Price={"€400,-"}
    text={"added 1 to your shopping cart"}
    />
<ArticleProducts
    redLabelText={"Best Seller"}
    imgTas={tas2}
    imgAlt={"brown bag"}
    nameBag={"The Stylish Bag"}
    Price={"€250,-"}
    text={"added 1 to your shopping cart"}
/>
<ArticleProducts
    redLabelText={"New collection"}
    imgTas={tas3}
    imgAlt={"green simple bag"}
    nameBag={"The Simple Bag"}
    Price={"€300,-"}
    text={"added 1 to your shopping cart"}
/>
<ArticleProducts
    redLabelText={"New collection"}
    imgTas={tas4}
    imgAlt={"Yellow Trendy bag"}
    nameBag={"The Trendy Bag"}
    Price={"€150,-"}
    text={"added 1 to your shopping cart"}
/>
</>
)}

export default ArticleProductsMultiple