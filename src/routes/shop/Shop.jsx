// import SHOP_DATA from "./shop.data.js";

import { useContext } from "react";

import { CategoriesContext } from "../../context/Categories.context";
import CategoryPreview from "../../components/category-preview/Category-preview";
import "./Shop.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className='shop-container'>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview title={key} products={products} />;
      })}
    </div>
  );
};

export default Shop;
// class ShopPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collections: SHOP_DATA,
//     };
//   }

//   render() {
//     const { collections } = this.state;
//     return (
//       <div className='shop-page'>
//         {collections.map(({ id, ...otherCollectionProps }) => (
//           <CollectionPreview key={id} {...otherCollectionProps} />
//         ))}
//       </div>
//     );
//   }
// }
