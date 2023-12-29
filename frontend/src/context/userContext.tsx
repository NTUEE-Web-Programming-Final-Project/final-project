import { createContext, useState } from "react";
import type { User } from "../../../shared/shared_types";

export type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

type Props = {
  children: React.ReactNode;
};

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
