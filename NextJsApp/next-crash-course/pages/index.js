import Head from 'next/head'
//custom titles / meta tags ^^

export default function Home() {
  return (
    <div>
        <Head>
          <title>Web Dev News</title>
          <meta name="keywords" content='web development, programming'/>
        </Head>
        <h1>Welcome to Next</h1>
    </div>
  )
}