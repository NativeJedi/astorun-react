import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppNotificationListener from './components/app-notification-listener/app-notification-listener.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';
import MainLayout from './layouts/main/main.layout';
import AppRoute from './routes/app-route.component';
import {
  CollectionOverviewRoute,
  MainRoute,
  ProductDetailsRoute,
  ShopRoute,
  CheckoutRoute,
} from './routes/index';

const App: React.FC = () => (
  <div className="App">
    <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <AppRoute route={MainRoute} />
          <Route
            path={[
              ShopRoute.path,
              ProductDetailsRoute.path,
              CheckoutRoute.path,
            ]}
          >
            <MainLayout>
              <AppRoute route={ShopRoute} />
              <AppRoute route={CollectionOverviewRoute} />
              <AppRoute route={ProductDetailsRoute} />
              <AppRoute route={CheckoutRoute} />
            </MainLayout>
          </Route>
        </Suspense>
      </ErrorBoundary>
    </Switch>
    <AppNotificationListener />
  </div>
);

export default App;
