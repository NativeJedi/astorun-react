import { Button } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { ShopRoute } from '../../routes/index';
import './app-cart-placeholder.styles.scss';

interface AppCartPlaceholderProps {
  onRedirect: () => void;
}

const AppCartPlaceholder = ({
  onRedirect,
}: AppCartPlaceholderProps): React.ReactElement => {
  const { t } = useTranslation();
  const history = useHistory();

  const handleRedirect = () => {
    history.push(ShopRoute.getPath());
    onRedirect();
  };

  return (
    <div className="app-cart-placeholder">
      <div className="app-cart-placeholder__text">
        {t('page.cart.placeholder')}
      </div>

      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={handleRedirect}
      >
        {t('actions.go_shop')}
      </Button>
    </div>
  );
};

export default AppCartPlaceholder;
