import React from 'react'

interface page{
    params : {item:string}
}

export default function page({params}:page) {
  return (
    <div>item no.{params.item}</div>
  )
}
