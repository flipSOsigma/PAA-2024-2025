import FormCard from "@/components/content/FormCard";
import HeaderCard from "@/components/content/HeaderCard";
import udinus from '@/app/image/Logo_UDINUS.png';
import hmti from '@/app/image/Logo_HMTI.png';
import Image from "next/image";
import { FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="w-full mb-20 p-4 flex flex-col items-center gap-4">
      <div className="w-full max-w-md gap-4 flex flex-col min-h-screen">
        <HeaderCard/>
        <FormCard/>
        <div className="w-full justify-end flex text-muted-foreground flex-col text-sm items-center">
          <div className="flex gap-8 my-4">
            <div className="w-14 aspect-square"><Image className="grayscale-[75%]" src={udinus} alt="" /></div>
            <div className="w-14 aspect-square"><Image className="grayscale-[75%]" src={hmti} alt="" /></div>
          </div>
          <b className="font-semibold text-lg">
            Form Pembekalah Anggota Aktif
          </b>
          <span className='font-normal'>Himpunan Mahasiswa Teknik Informatika</span>
          <div className="flex gap-4 mt-2">
            <a href="https://www.instagram.com/hmtiudinus/" className="flex italic items-center gap-1 underline"><FaInstagram /> hmti udinus</a>
            <a href="https://www.instagram.com/lf.mhndr/" className="flex italic items-center gap-1 underline"><FaInstagram /> alif mahendra</a>
            <a href="https://www.instagram.com/udinusofficial/" className="flex italic items-center gap-1 underline"><FaInstagram /> udinus</a>
          </div>
        </div>
      </div>
    </div>
  );
}
