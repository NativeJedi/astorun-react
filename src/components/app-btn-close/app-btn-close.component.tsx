import React, { MouseEventHandler } from 'react';
import './app-btn-close.styles.scss';

interface IAppBtnCloseProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const AppBtnClose = ({ onClick }: IAppBtnCloseProps): React.ReactElement => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="app-btn-close btn-default"
    >
      ✕
    </button>
  );
};

export default AppBtnClose;
