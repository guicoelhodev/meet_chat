import React from "react";

interface IUsersRoom {
  users: IUser[];
}

export interface IUser {
  id: string;
  status: "active" | "inactive";
  username: string;
}
export const UsersRoom: React.FC<IUsersRoom> = ({ users }) => {
  return (
    <section className="p-4 flex flex-col">
      <aside className="w-full mb-6 pb-2 border-b-2">
        <p className="font-bold text-end">ACTIVE NOW</p>
      </aside>
      <ul className="flex flex-col gap-2 items-end">
        {users.map((user) => (
          <li key={user.id} className="flex items-center gap-4">
            <p className="overflow-hidden text-ellipsis">{user.username}</p>
            <span
              className={`w-3 h-3 rounded-full ${
                user.status === "active" ? "bg-primary-cyan" : "bg-red-500"
              }
            `}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
