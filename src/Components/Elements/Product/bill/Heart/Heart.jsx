import { FaHeart } from "react-icons/fa";

const FavoriteButton = ({ product, favorites, toggleFavorite }) => {
  return (
    <button
      className={`hover:text-yellow-500 transition ${favorites.includes(product.id) ? 'text-red-500' : ''}`}
      onClick={() => toggleFavorite(product.id)}
    >
      <FaHeart />
    </button>
  );
};

export default FavoriteButton;
