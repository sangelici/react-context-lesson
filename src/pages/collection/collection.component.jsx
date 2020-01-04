import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';
 
import CollectionsContext from '../../context/collections/collections.context'

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// CONTEXT CONSUMER METHOD
// const CollectionPage = ({ match }) => {
//   return (
//     <CollectionsContext.Consumer>
//     {/* pass this function that has access to the value we stored in our context */}
//     {
//       collections => {
//         const collection = collections[match.params.collectionId];
//         const { title, items } = collection;
//         return (
//           <div className='collection-page'>
//             <h2 className='title'>{title}</h2>
//             <div className='items'>
//               {items.map(item => (
//                 <CollectionItem key={item.id} item={item} />
//               ))}
//             </div>
//           </div>
//         )
//       }
//     }
//     </CollectionsContext.Consumer>
//   );
// };

export default CollectionPage;
