import React from 'react'
import Head from 'next/head'

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>My new website</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <div className="h-screen flex overflow-hidden bg-gray-100">
                <div className="flex flex-col w-0 flex-1 overflow-hidden">
                    <main className="flex-1 relative overflow-y-auto focus:outline-none">Hello, world !</main>
                </div>
            </div>
        </div>
    )
}

export default Home
