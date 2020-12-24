import React from 'react';
import './app-quantity-control.styles.scss';

interface IQuantityControlProps {
  value: number;
  onChange: (quantity: number) => void;
}

const AppQuantityControl = ({
  value,
  onChange,
}: IQuantityControlProps): React.ReactElement => {
  return (
    <div className="app-quantity-control">
      <button
        type="button"
        className="btn-default app-quantity-control__btn"
        onClick={() => onChange(value - 1)}
      >
        ❮
      </button>
      <span className="app-quantity-control__value">{value}</span>
      <button
        type="button"
        className="btn-default app-quantity-control__btn"
        onClick={() => onChange(value + 1)}
      >
        ❯
      </button>
    </div>
  );
};

export default AppQuantityControl;
