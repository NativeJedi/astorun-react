import React from 'react';
import { Alert } from '@material-ui/lab';
import './app-notification-listener.styles.scss';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotifications } from '../../redux/notifications/notifications.selectors';
import { TNotifications } from '../../redux/notifications/notifications.types';
import { removeNotification } from '../../redux/notifications/notifications.actions';

const AppNotificationListener: React.FC = () => {
  const notifications: TNotifications = useSelector(selectNotifications);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="app-notification">
      {notifications.map(({ id, type, message }) => (
        <Alert
          key={id}
          classes={{ root: 'app-notification__item' }}
          severity={type}
          variant="filled"
          onClose={() => dispatch(removeNotification(id))}
        >
          {message || t('errors.unknown_error')}
        </Alert>
      ))}
    </div>
  );
};

export default AppNotificationListener;
