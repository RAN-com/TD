
import Navbar from "../Components/Elements/Navbar";
import AutoSlideBanner from "../Components/Elements/Banner";
import Categories from "../Components/Elements/Categery/Categery";

import ContactInfo from "../Pages/Contact";
import ProductList from "../Components/Elements/Product/ProductCard";


function Layout() {
  return (
    <>

      <AutoSlideBanner />
      <Categories/>
      <ProductList/>
      <ContactInfo/>
     {/* This is where nested route content will render */}
    </>
  );
}

export default Layout;
