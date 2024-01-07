"use client"
import SettingSlotPage from "@/components/slots/settings";
import { useAppSelector } from "@/hooks/hooks";

function SettingPage() {
  const slot = useAppSelector((state) => state.slot.slot_right);

  return (
    <>
      {slot === 1 && <SettingSlotPage />}
     
    </>
  );
}

export default SettingPage;
 