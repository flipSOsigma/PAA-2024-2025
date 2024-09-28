'use client'

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useState } from "react"
import Cookies from "js-cookie"
import { getAdditionalUserInfo, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "@/lib/firebase";

export default function HeaderCard() {
  const [ emailAuth, setEmailAuth ] = useState('')
  const authCookie = Cookies.get('auth')
  if ( authCookie ) {
    setEmailAuth('')
  }
  const provider = new GoogleAuthProvider()
  const makeAuth = async () => {
    const user = await signInWithPopup(auth, provider)
    Cookies.set('auth', JSON.stringify(user))
    getAdditionalUserInfo(user)
  }
  return (
    <Card className="sm:col-span-2 ">
      <CardHeader className="pb-3">
        <CardTitle>Pembekalan Anggota Aktif</CardTitle>
        <CardDescription className="text-balance max-w-lg leading-relaxed">
          Formulir pendaftaran Pembekalan anggota aktif himpunan
          mahasiswa teknik informatika Universitas Dian Nuswantoro
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
