import { cn } from "@/lib/utils";

import type { FC } from "react";

type props = {
  isCollapsed?: boolean;
  size?: "large" | "small";
  name: string;
  username: string;
};
const UserCard: FC<props> = ({
  isCollapsed,
  size = "large",
  name,
  username,
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-[14px] hover:bg-neutral-50 rounded-lg p-2 cursor-pointer"
      )}
    >
      <div
        className={cn(
          "rounded-full overflow-hidden border",
          size === "small" ? "min-w-[40px] h-[40px]" : "min-w-[55px] h-[55px]"
        )}
      >
        <img
          src={`https://eu.ui-avatars.com/api/?name=${name}&size=${250}`}
          width={size === "small" ? 40 : 55}
          height={size === "small" ? 40 : 55}
          alt="finderImage"
          className="w-full h-full object-cover"
        />
      </div>
      {!isCollapsed && (
        <div className="flex flex-col gap-1">
          <h2 className="text-sm font-semibold leading-[16px] text-dark-navy whitespace-nowrap">
            {name}
          </h2>
          <p className="text-secondary-gray text-xs font-medium">@{username}</p>
        </div>
      )}
    </div>
  );
};

export default UserCard;
