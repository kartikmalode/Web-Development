import "./Product.css";
import Price from "./Price";
function Product({title,idx}){
    let oldprice = ["50,599","78,999","15000","2000"];
    let newprice = ["51,000","75000","16,000","1599"];
    let description = [
        ["best camera","HD Quality"],
        ["fast processing","Gaming"],
        ["best battery backup","High performance"],
        ["low price","HD streming"]];
    return (
        <>
       <div className="product">
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
       </div>
        </>
    );
}

export default Product;