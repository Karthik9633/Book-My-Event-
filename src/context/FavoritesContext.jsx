import { createContext, useContext, useState } from "react";
import { useToast } from "./ToastContext";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { showToast } = useToast();

  const toggleFavorite = (event) => {
    setFavorites((prev) => {
      const exists = prev.find((e) => e.id === event.id);

      if (exists) {
        showToast("Removed from favourites");
        return prev.filter((e) => e.id !== event.id);
      } else {
        showToast("Added to favourites");
        return [...prev, event];
      }
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => {
      showToast("Removed from favourites");
      return prev.filter((e) => e.id !== id);
    });
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
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);