import React, { MouseEventHandler } from 'react';
import './app-btn-close.styles.scss';

interface IAppBtnCloseProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const AppBtnClose = ({
  onClick,
  className,
}: IAppBtnCloseProps): React.ReactElement => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`app-btn-close btn-default ${className}`}
    >
      ✕
    </button>
  );
};

AppBtnClose.defaultProps = {
  className: '',
};

export default AppBtnClose;
