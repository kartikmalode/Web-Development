

function Title({title,price=1, features}){
  let styles = {backgroundColor: price>=30000 ? "yellow":""};
  return(
     <  >
     <div style ={styles}>
    <h1>{title}</h1>
    <p>price = {price}</p>
    <p>{features.map((feature) => (<li>{feature}</li>)) }</p>            {/*  rendering the array to props*/ }
     {price>=30000 && <p>Discount of 5%</p>}
     </div>
  </>
  );
}
export default Title;