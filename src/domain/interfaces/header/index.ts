export interface HeaderProps {
  modules?: {
    logo: boolean;
    location: boolean;
    categories: boolean;
    search: boolean;
    login: boolean;
    cart: boolean;
    topBrands: boolean;
    footerHeader: boolean;
  };
  cartId?: string;
}
