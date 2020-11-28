import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';
import MainLayout from './layouts/main/main.layout';
import AppRoute from './routes/app-route.component';
import {
  CollectionOverviewRoute,
  MainRoute,
  ProductDetailsRoute,
  ShopRoute,
} from './routes/index';

const App: React.FC = () => (
  <div className="App">
    <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <AppRoute route={MainRoute} />
          <Route path={[ShopRoute.path, ProductDetailsRoute.path]}>
            <MainLayout>
              <AppRoute route={ShopRoute} />
              <AppRoute route={CollectionOverviewRoute} />
              <AppRoute route={ProductDetailsRoute} />
            </MainLayout>
          </Route>
        </Suspense>
      </ErrorBoundary>
    </Switch>
  </div>
);

export default App;
