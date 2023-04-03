import Head from 'next/head'
import Button from './componentes/button.js'
import Card from './componentes/card.js'
import fullData from './data/data.js'


export default function Home() {
  return (
    <>
      <Head>
        <title>Trabajo clase 10</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
       hello world
       <br></br>
       <Button></Button>
       <br></br>
      <Card data={fullData}></Card>
      </main>
    </>
  )
}
