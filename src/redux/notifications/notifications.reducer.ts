import {
  ADD_NOTIFICATION,
  INotificationsState,
  NotificationActionTypes,
  REMOVE_NOTIFICATION,
  TNotifications,
} from './notifications.types';

const INITIAL_STATE: INotificationsState = {
  notifications: [],
};

const removeNotification = (
  notifications: TNotifications,
  removeId: string
): TNotifications => {
  return notifications.filter(({ id }) => id !== removeId);
};

const notificationsReducer = (
  state: INotificationsState = INITIAL_STATE,
  action: NotificationActionTypes
): INotificationsState => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };

    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: removeNotification(state.notifications, action.payload),
      };

    default:
      return state;
  }
};

export default notificationsReducer;
