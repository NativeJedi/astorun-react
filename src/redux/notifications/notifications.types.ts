export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export interface INotification {
  type: 'error' | 'success';
  id: string;
  message: string;
}

export type TNotifications = INotification[];

export interface INotificationsState {
  notifications: TNotifications;
}

export interface IAddNotificationAction {
  type: typeof ADD_NOTIFICATION;
  payload: INotification;
}

export interface IRemoveNotificationAction {
  type: typeof REMOVE_NOTIFICATION;
  payload: string;
}

export type NotificationActionTypes =
  | IAddNotificationAction
  | IRemoveNotificationAction;
