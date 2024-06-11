"use client"
import { CheckIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const freePointers = [
    "Feature 1",
    "Feature 2"
]

const advancePointers = [
    "Feature 1",
    "Feature 2",
    "Advance Feature 1",
    "Advance Feature 2",
    "Advance Feature 3",
    "Advance Feature 4",
]

const professionalPointers = [
    "Feature 1",
    "Feature 2",
    "Advance Feature 1",
    "Advance Feature 2",
    "Advance Feature 3",
    "Professional Feature 1",
    "Professional Feature 2",
    "Professional Feature 3",
    "Professional Feature 4",
]


function PricingPlans() {
    const [price, setPrice] = useState("yearly")


    return (
        <>
            <div className="flex justify-center" >
                <div className="flex gap-4">
                    <button className={`hover:bg-slate-200 p-2 rounded-lg font-medium text-[18px] min-w-24 ${price === "yearly" && 'border bg-slate-100'}`} onClick={() => setPrice("yearly")}>Yearly</button>
                    <button className={`hover:bg-slate-200 p-2 rounded-lg font-medium text-[18px] min-w-24 ${price === "monthly" && 'border bg-slate-100'}`} onClick={() => setPrice("monthly")}>Monthly</button>
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 mt-2 w-full gap-8'>
                <div className="rounded-md w-full mt-6 bg-white px-4 shadow-xl hover:shadow-2xl">
                    <div className="pt-12 pb-16 items-center">
                        <h2 className="text-xl">Free</h2>
                        <h2 className="font-bold mt-4 text-4xl">$0</h2>
                        <Link href='/' className="w-full"><button className="mt-8 w-full border rounded-lg py-2 bg-slate-100 normal-case ">Start Your Project</button></Link>
                        <div className="w-full mt-4">
                            <ul>
                                {
                                    freePointers.map((p, k) => {
                                        return <li key={k} className="mt-2"><CheckIcon className="w-4 h-4 text-green-500 inline-block" />  {p}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="rounded-md w-full mt-6 bg-white px-4 shadow-xl hover:shadow-2xl">
                    <div className="pt-12 pb-16 items-center  ">
                        <h2 className="text-xl text-center">Advance </h2>
                        <h2 className="font-bold mt-4 text-4xl text-center inline-block">{price === "yearly" ? `$5` : `$8`} {price === "yearly" && <span className="text-xl line-through text-yellow align-middle mr-2">$8</span>}<span className="text-xs align-middle font-light text-slate-500">/monthly</span></h2>
                        <button className="mt-8 bg-primary text-white hover:text-yellow rounded-lg py-2 normal-case w-full">Subscribe</button>
                        <div className="w-full mt-4">
                            <ul>
                                {
                                    advancePointers.map((p, k) => {
                                        return <li key={k} className="mt-2"><CheckIcon className="w-4 h-4 text-green-500 inline-block" /> {p}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="rounded-md w-full mt-6 bg-white px-4 shadow-xl hover:shadow-2xl">
                    <div className="pt-12 pb-16 items-center  ">
                        <h2 className="text-xl text-center">Professional </h2>
                        <h2 className="font-bold mt-4 text-4xl text-center inline-block">{price === "yearly" ? `$12` : `$15`} {price === "yearly" && <span className="text-xl line-through text-yellow align-middle mr-2">$15</span>}<span className="text-xs align-middle font-light text-slate-500">/monthly</span></h2>
                        <button className="mt-8 normal-case w-full border rounded-lg py-2 bg-slate-100">Subscribe</button>
                        <div className="w-full mt-4">
                            <ul>
                                {
                                    professionalPointers.map((p, k) => {
                                        return <li key={k} className="mt-2"><CheckIcon className="w-4 h-4 text-green-500 inline-block" /> {p}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


export default PricingPlans