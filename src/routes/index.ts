import React, { lazy, LazyExoticComponent } from 'react';

const ShopPage = lazy(() => import('../pages/shop/shop.page'));
const MainPage = lazy(() => import('../pages/main/main.page'));
const CollectionOverview = lazy(
  () => import('../pages/collection-overview/collection-overview.page')
);
const ProductDetailsPage = lazy(
  () => import('../pages/product-details/product-details.page')
);
const CheckoutPage = lazy(() => import('../pages/checkout/checkout.page'));

export interface IRoute {
  path: string;
  exact?: boolean;
  component: LazyExoticComponent<any> | React.FC;
  getPath: (param?: string | number) => string;
}

export const MainRoute: IRoute = {
  path: '/',
  getPath: () => '/',
  exact: true,
  component: MainPage,
};

export const ShopRoute: IRoute = {
  path: '/shop',
  getPath: () => '/shop',
  exact: true,
  component: ShopPage,
};

export const CollectionOverviewRoute: IRoute = {
  path: '/shop/:collection',
  getPath: (collection) => `/shop/${collection}`,
  exact: true,
  component: CollectionOverview,
};

export const ProductDetailsRoute: IRoute = {
  path: '/shop/products/:productId',
  getPath: (id) => `/shop/products/${id}`,
  exact: true,
  component: ProductDetailsPage,
};

export const CheckoutRoute: IRoute = {
  path: '/checkout',
  getPath: () => '/checkout',
  exact: true,
  component: CheckoutPage,
};
