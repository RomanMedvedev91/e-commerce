// import React from "react";
// import { CollectionPreview } from "../../components/collection-preview/Collection-preview.jsx";

// import SHOP_DATA from "./shop.data.js";

import React from "react";
import SHOP_DATA from "../../shop-data.json";

const Shop = () => {
  return (
    <div>
      {SHOP_DATA.map((product) => {
        return (
          <div id={product.id}>
            <h1>{product.name}</h1>
          </div>
        );
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
