'use client'
import { redirect } from 'next/navigation';

export default function Home() {
    const token = localStorage.getItem("auth")
    if (!token) (
        redirect('/signup')
    )
    return (
        <div className='' style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "30px" }}>Dashboard</h1>
            <p className='mt-5'>You are on dashboard Page</p>
        </div>
    )
}
