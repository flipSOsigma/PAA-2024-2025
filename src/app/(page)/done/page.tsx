import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'

const page = () => {
  return (
    <div className="p-4">
      <Card className="sm:col-span-2 ">
        <CardHeader className="pb-3">
          <CardTitle>Selamat, Formulir telah terkirim</CardTitle>
          <CardDescription className="text-balance max-w-lg leading-relaxed">
            siilahkan masuk whatsapp group untuk mendapatkan info lebih lanjut
          </CardDescription>
          <a href='https://chat.whatsapp.com/FEMjJ1BTGoO6r3eg6QGmSK' className="flex items-center gap-1 text-balance max-w-lg leading-relaxed underline italic">
            <FaWhatsapp /> PESERTA PAA 2024/2025
          </a>
        </CardHeader>
      </Card>
    </div>
  )
}

export default page
