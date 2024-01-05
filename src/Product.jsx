function Product(Props)
{
    console.log(Props);
    let {name,price,specs} = Props
    return(
        <div className="product">
            <h2>{Props.name}</h2>
            <h3>{Props.price}</h3>
            <h3>{Props.spec.suri}</h3>
            <h3>{Props.cater}</h3>
        </div>
    )
}
export default Product;