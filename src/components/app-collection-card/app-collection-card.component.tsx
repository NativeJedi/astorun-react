import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { ICollectionItem } from '../../redux/collections/collections.types';
import './app-collection-card.styles.scss';

interface ICollectionItemProps {
  item: ICollectionItem;
}

const AppCollectionCard = ({
  item,
}: ICollectionItemProps): React.ReactElement => {
  const { name, imageUrl } = item;
  const history = useHistory();
  const match = useRouteMatch();
  const redirectUrl = `${match.path}/${name}`;
  const { t } = useTranslation();

  const handleKeyboardClick = ({
    key,
  }: React.KeyboardEvent<HTMLDivElement>): void => {
    if (key !== 'Enter') {
      return;
    }

    history.push(redirectUrl);
  };

  const handleMouseClick = () => {
    history.push(redirectUrl);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="collection-item"
      onKeyUp={handleKeyboardClick}
      onClick={handleMouseClick}
    >
      <div
        className="collection-item__background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="collection-item__content">
        <h4 className="collection-item__title">{t(`collections.${name}`)}</h4>
        <div className="collection-item__subtitle">SHOP NOW</div>
      </div>
    </div>
  );
};

export default AppCollectionCard;
