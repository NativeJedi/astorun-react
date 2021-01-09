import uniqid from 'uniqid';
import {
  ADD_NOTIFICATION,
  IAddNotificationAction,
  INotification,
  IRemoveNotificationAction,
  REMOVE_NOTIFICATION,
} from './notifications.types';

export const addNotification = (
  notification: Omit<INotification, 'id'>
): IAddNotificationAction => ({
  type: ADD_NOTIFICATION,
  payload: {
    ...notification,
    id: uniqid(),
  },
});

export const removeNotification = (id: string): IRemoveNotificationAction => ({
  type: REMOVE_NOTIFICATION,
  payload: id,
});
