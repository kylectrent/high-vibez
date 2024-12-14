"use client";
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()

    /*useEffect(() => {
        fetch('api/data')
            .then((response) => {
                setData()
            })
    });*/
  return (
    <div>{pathname}</div>
  )
}
