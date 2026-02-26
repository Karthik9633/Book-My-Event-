import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (event) => {
    setFavorites((prev) => {
      const exists = prev.find((e) => e.id === event.id);
      if (exists) {
        return prev.filter((e) => e.id !== event.id);
      } else {
        return [...prev, event];
      }
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((event) => event.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((event) => event.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        removeFavorite,
        isFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);