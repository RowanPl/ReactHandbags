import Button from "../Button/Button";


function ArticleProducts({redLabelText, imgTas, imgAlt ,nameBag, Price, Children, text}){
    function showAlert() {
        alert(text);
    }

    return(
        <article>
            <span>{redLabelText}</span>
            <img src={imgTas} alt={imgAlt}/>
            <p> {nameBag} </p>
            <h4> {Price} </h4>
            <Button
                Text={text}
                onClick={showAlert}>
                buy
            </Button>
        </article>
    )
}
export default ArticleProducts;