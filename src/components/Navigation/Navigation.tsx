import React from 'react';
import { Logo } from '../Logo/Logo';
import { FavoritesIcon } from '../Favorites/FavoritesIcon';
import { CartIcon } from '../Cart/Cart';

export const Navigation = () => {
  return (
    <div>
      <Logo />
      {/* <NavBar /> */}
      <FavoritesIcon />
      <CartIcon />
    </div>
  );
};
