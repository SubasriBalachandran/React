const Cart = ({ products }) => {
    return (
      <div >
        <h1>Cart</h1>
        <ul>
          {products.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Cart;