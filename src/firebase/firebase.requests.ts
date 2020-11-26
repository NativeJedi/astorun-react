import firebase from 'firebase';
import { TCollections } from '../redux/collections/collections.types';
import { TProducts } from '../redux/products/products.types';
import { firestore } from './firebase';

type CollectionReference = firebase.firestore.CollectionReference;

interface IDocument {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

function parseRefResponse(ref: CollectionReference): Promise<IDocument[]> {
  return ref.get().then(({ docs }) =>
    docs.map((doc) => {
      const { id } = doc;

      return {
        id,
        ...doc.data(),
      };
    })
  );
}

const collectionsRef = firestore.collection('collections');
const productsRef = firestore.collection('products');

export const getCollections: () => Promise<TCollections> = () =>
  parseRefResponse(collectionsRef).then((collections) =>
    collections.map(({ id, name, imageUrl }) => ({
      id,
      name,
      imageUrl,
    }))
  );

export const getProducts: () => Promise<TProducts> = () =>
  parseRefResponse(productsRef).then((productsDocs) =>
    productsDocs.map(({ id, title, price, imageUrl, sizes }) => ({
      id,
      title,
      price,
      imageUrl,
      sizes,
    }))
  );
