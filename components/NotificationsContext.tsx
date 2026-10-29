import { createContext, ReactNode, useContext, useState } from 'react';

type NotificationsContextValue = {
  count: number;
  notify: () => void;
  markAllAsRead: () => void;
};

const NotificationsContext = createContext<NotificationsContextValue | null>(null);

export function NotificationsProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <NotificationsContext.Provider
      value={{
        count,
        notify: () => setCount((c) => c + 1),
        markAllAsRead: () => setCount(0),
      }}>
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotifications() {
  const ctx = useContext(NotificationsContext);
  if (!ctx) throw new Error('useNotifications must be used within NotificationsProvider');
  return ctx;
}

