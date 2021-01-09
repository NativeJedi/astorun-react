import { createSelector } from 'reselect';
import { RootState } from '../root.reducer';
import { INotificationsState } from './notifications.types';

const selectNotificationsState = ({
  notifications,
}: RootState): INotificationsState => notifications;

export const selectNotifications = createSelector(
  [selectNotificationsState],
  ({ notifications }) => notifications
);
