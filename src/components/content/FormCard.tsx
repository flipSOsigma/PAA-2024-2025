'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { useRouter } from 'next/navigation'
import LoadingModal from './LoadingModal'

const FormCard = () => {
  const [errormsg, setErrormsg] = useState('')
  const [loading, setLoading] = useState(false)

  const push = useRouter()

  interface inputFieldConfig {
    id : number,
    field : string,
    label : string,
    option?: undefined | string[]
  }

  const inputField: inputFieldConfig[] = [
    {
      id : 1, 
      field: 'nama', 
      label: 'nama lengkap',
    },
    {
      id : 2, 
      field: 'kelamin', 
      label: 'jenis kelamin',
      option : ['laki laki','perempuan'],
    },
    {
      id : 3, 
      field: 'usia',
      label: 'usia',
    },
    {
      id : 4, 
      field: 'semester',
      label: 'semester( tulis angka saja)',
    },
    
  ]

  const formHandling = async (e: any) => {
    e.preventDefault()
    setErrormsg('')
    
    const fullname = e.target.nama.value
    const gender = e.target.kelamin.value
    const age = e.target.usia.value
    const semester = e.target.semester.value

    if ( age < 17 ) {
      setErrormsg('mohon maaf anda belum cukup umur')
    }

    if ( semester > 1 ) {
      setErrormsg('mohon maaf hanya untuk semester 1')
    }

    if ( gender == "" ) {
      setErrormsg('mohon isi jenis kelamin anda')
    }

    if( errormsg == '' ) {
      setLoading(true)
      await fetch('./api/', {
        method: 'POST',
        body: JSON.stringify({
          fullname,
          gender,
          age,
          semester,
        })
      })
      .then((res) => res.status != 200 ? setErrormsg('sedang dalam masalah, coba ulaang beberapa kali') : push.push('/done'))
    }
  }
  return (
    <form onSubmit={(e) => formHandling(e)} className='flex flex-col gap-4'>
    {errormsg != '' ? (
      <Alert variant='destructive'>
        <AlertTitle>error</AlertTitle>
        <AlertDescription>{errormsg}</AlertDescription>
      </Alert>
    ) : (null)}
    { loading ? (
      <LoadingModal/>
    ) : null}
    <Card>
      {/* <CardHeader>
        <CardTitle>Formulir</CardTitle>
        <CardDescription>
          lengkapi formulir untuk melanjutkan
        </CardDescription>
      </CardHeader> */}
      
      <CardContent className='grid grid-cols-2 gap-2 mt-4'>
        { inputField?.map((doc) => (
          <div className={ doc.field == 'nama' || doc.field == 'semester' ? 'col-span-2 flex flex-col gap-2 mt-4' : 'flex flex-col gap-2 mt-4 w-full' } key={doc.id}>
            <Label htmlFor={doc.field} className={'capitalize'}>{doc.label}</Label>
            {doc.option ? (
              <Select name={doc.field} required>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="pilih jenis kelamin" />
                </SelectTrigger>
                <SelectContent>
                  {doc.option?.map((opt: string) => (
                    <SelectItem value={opt} key={opt}>{opt}</SelectItem>  
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Input name={doc.field} id={doc.field} type='text'></Input>
            )}
          </div>
        ))}
      </CardContent>
      
      <hr />
      <CardFooter className='mt-4 flex pb-4 justify-end gap-2'>
        <Button type='submit'>kirim formulir</Button>
      </CardFooter>
    </Card>
    </form>
  )
}

export default FormCard
