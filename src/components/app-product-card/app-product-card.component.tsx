import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  CardActionArea,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from 'react-router-dom';
import { IProduct } from '../../redux/products/products.types';
import './app-product-card.styles.scss';
import { ProductDetailsRoute } from '../../routes/index';

interface ICardProps {
  product: IProduct;
}

const AppProductCard = ({ product }: ICardProps): React.ReactElement => {
  const { name, image, price, id } = product;
  const path = ProductDetailsRoute.getPath!(id);

  return (
    <Link to={path}>
      <Card raised className="app-product-card">
        <CardActionArea>
          <CardMedia
            className="app-product-card__media"
            image={image.url}
            title={name}
          />
        </CardActionArea>

        <CardContent className="app-product-card__content">
          <div className="app-product-card__info">
            <h4 className="app-product-card__title">{name}</h4>
            <span className="app-product-card__price">{price}</span>
          </div>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Link>
  );
};

export default AppProductCard;
