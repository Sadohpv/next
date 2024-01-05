"use client";
import { useAppSelector } from "@/hooks/hooks";
import InforSlotPage from "@/components/slots/friends/";
import FriendRequestSlotPage from "@/components/slots/friends/request";
import FriendResponseSlotPage from "@/components/slots/friends/response";

function FriendPage() {
  const slot = useAppSelector((state) => state.slot.slot_left);
  return (
    <div>
      {slot === 1 && <InforSlotPage />}
      {slot === 3 && <FriendRequestSlotPage />}
      {slot === 2 && <FriendResponseSlotPage />}
    </div>
  );
}

export default FriendPage;
