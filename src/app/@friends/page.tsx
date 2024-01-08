"use client";
import { useAppSelector } from "@/hooks/hooks";
import InforSlotPage from "@/components/slots/friends/";
import FriendRequestSlotPage from "@/components/slots/friends/request";
import FriendResponseSlotPage from "@/components/slots/friends/response";
import DefaultFriendPage from "./default";

function FriendPage() {
  const slot = useAppSelector((state) => state.slot.slot_left);
  return (
    <>
      {slot === 1 ? (
        <InforSlotPage />
      ) : slot === 2 ? (
        <FriendResponseSlotPage />
      ) : slot === 3 ? (
        <FriendRequestSlotPage />
      ) : (
        <DefaultFriendPage />
      )}
    </>
  );
}

export default FriendPage;
