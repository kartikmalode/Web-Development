import Product from "./Product";
import "./Product.css"
import Price from "./Price";

function ProductTab() {
    let styles = {
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    };
    return(
       <div style={styles}>
       <Product title="Apple Phone " idx ={0}/>
       <Product title="Apple MACBook" idx ={1}/>
       <Product title=" Vivo Phone" idx ={2}/>
       <Product title="Samsung Phone" idx ={3}/>
       </div>
    );
}
export default ProductTab;