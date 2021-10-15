import React, { useEffect, useState } from 'react'

function Hello() {
  const [hello, setHello] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/hello')
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })

      .then((jsonResponse) => {
        setHello(jsonResponse.hello)
        console.log(jsonResponse)
      })
  }, [])
  return <div>{hello}</div>
}

export default Hello
