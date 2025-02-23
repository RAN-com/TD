const FavoritesScreen = ({ products, favorites }) => {
    const favoriteProducts = products.filter((product) => favorites.includes(product.id));
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">Your Favorites</h2>
        {favoriteProducts.length === 0 ? (
          <p>No favorite items yet.</p>
        ) : (
          <ul>
            {favoriteProducts.map((product) => (
              <li key={product.id} className="border-b p-4">
                <span className="font-semibold">{product.name}</span> - ${product.price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default FavoritesScreen;
  