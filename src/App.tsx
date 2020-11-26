import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';
import MainLayout from './layouts/main/main.layout';
import ProductsPage from './pages/products/products.page';

const ShopPage = lazy(() => import('./pages/shop/shop.page'));
const MainPage = lazy(() => import('./pages/main/main.page'));

const App: React.FC = () => (
  <div className="App">
    <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={MainPage} />
          <Route path={['/shop']}>
            <MainLayout>
              <Route exact path="/shop" component={ShopPage} />
              <Route exact path="/shop/:collection" component={ProductsPage} />
            </MainLayout>
          </Route>
        </Suspense>
      </ErrorBoundary>
    </Switch>
  </div>
);

export default App;
