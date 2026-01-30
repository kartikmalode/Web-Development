export default function Price({oldprice,newprice}){
    let oldstyle={
        textDecorationLine:"line-through"
    };
    let newstyle = {
        fontWeight:"bold"
    };
    let styles ={
        backgroundColor:"yellow",
        height:"30px",
        width:"200px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"15px",
    };
    return(
       <div style={styles}>
        <span style={oldstyle}>{oldprice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={newstyle}>{newprice}</span>
       </div>
    );
}