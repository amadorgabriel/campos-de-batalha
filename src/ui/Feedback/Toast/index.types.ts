import { Toast, ToastAction } from '.';
import { actionTypes } from './index.hook';

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

export type ToastActionElement = React.ReactElement<typeof ToastAction>;

export type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

export type ActionType = typeof actionTypes;

export type Action =
  | {
      type: ActionType['ADD_TOAST'];
      toast: ToasterToast;
    }
  | {
      type: ActionType['UPDATE_TOAST'];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType['DISMISS_TOAST'];
      toastId?: ToasterToast['id'];
    }
  | {
      type: ActionType['REMOVE_TOAST'];
      toastId?: ToasterToast['id'];
    };

export type Toast = Omit<ToasterToast, 'id'>;
