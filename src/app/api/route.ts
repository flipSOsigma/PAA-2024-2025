import { formHandler } from "@/lib/services";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
  const req = await request.json()
  const res = await formHandler(req)
  
  return NextResponse.json({status: res.status, message: res.message})
}