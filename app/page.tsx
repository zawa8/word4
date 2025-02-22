import Image from "next/image";
import Tiptap from "@/components/Tiptap";
import FontPicker from "@/components/lifonts/lifp";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <FontPicker/>
        <Tiptap/>
    </div>
  );
}
