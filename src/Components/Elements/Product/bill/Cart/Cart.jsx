import { FaShoppingCart } from "react-icons/fa";

const CartButton = ({ product, addToCart }) => {
  return (
    <button className="hover:text-yellow-500 transition" onClick={() => addToCart(product)}>
      <FaShoppingCart />
    </button>
  );
};

export default CartButton;
