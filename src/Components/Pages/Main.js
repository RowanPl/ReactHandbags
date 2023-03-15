import ArticleProductsMultiple from "../Article/ArticleProductsMultiple";
import TileMultiple from "../Tile/TileMultiple"
import Button from "../Button/Button";

function Main(){

    return( <>
<h1>Handbags & Purses</h1>
            <nav>
                <Button
                    typeOfButton={"button"}
                    text={"to the collection"}
                    onClick={() => (console.log(" to the collection"))}>
                    to the collection
                </Button>
                <Button
                    typeOfButton={"button"}
                    text={"show all bags"}
                    onClick={() => (console.log("shop all bags"))}>
                    shop all bags
                </Button>

                <Button isDisabled={true}
                        typeOfButton={"button"}
                        text={"pre-Orders"}
                        onClick={() => (console.log("pre-Orders"))}>
                    pre-Orders

                </Button>
            </nav>
  <main>
    <ArticleProductsMultiple/>
</main>
<footer>
    <TileMultiple/>
</footer>
        </>
)
}
export default Main;