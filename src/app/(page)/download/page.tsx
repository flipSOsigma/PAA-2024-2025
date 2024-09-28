'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { db } from '@/lib/firebase'
import { collection, getDocs, Timestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { saveAs } from 'file-saver';

const page = () => {
  
  const fetchData = async () => {
    let rawData: any = []
    const data = await getDocs(collection(db, 'formulir'))
    data.forEach((doc) => {
      rawData.push(doc.data());
      console.log(rawData);
    })

    const formatCSV = () => {
      const header  = ['nama mahasiswa', 'umur', 'gender', 'semester']
      const content = [
        header,
        ...rawData.map((row: any) => [
          row.fullname, 
          row.age,
          row.gender,
          row.semester,
        ]),
        
      ]
      console.log(content);
      const csvContent = content.map((row) => row.join(', ')).join('\n');
      return csvContent;
    }
    const csvContent: any = formatCSV()
    console.log(csvContent);
    
    const fileName = "Formulir PAA 2024/2025, download on " + Timestamp.now()
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, fileName + '.csv');
  }
  return (
    <div className='p-4'>
      <Card>
        <CardHeader>
          <CardTitle>Download data pendaftar PAA 2024/2025</CardTitle>
        </CardHeader>
        <hr />
        <CardContent className='pt-4'>
          <CardDescription>klick tombol di bawah untuk menggenerate data mahaiswa pendaftar PAA 2024/2025</CardDescription>
        </CardContent>
        <CardFooter className='flex justify-end'>
          <Button onClick={fetchData}>download data</Button>
          </CardFooter>
      </Card>
    </div>
  )
}

export default page
