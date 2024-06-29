import airpods1 from '../assets/airpods-3rd-generation.png'
import { PRODUCTS } from '../data/products'
import Button from './Button'
import ShopButton from './ShopButton'
import React, { useState, useEffect } from 'react'

export const Product = () => {
    const [products, setProduct] = useState(PRODUCTS)
    const [currentState, setCurrentState] = useState(null)

    useEffect(() => {
        const currentProduct = products.find((product) => product.isCurrent)
        if (currentProduct) {
            setCurrentState(currentProduct)
        }
    }, [products])
    useEffect(() => {
        if (currentState) {
            console.log(currentState.name)
        }
    }, [currentState])

    return (
        <div className="container max-w-[1500px] mx-auto pt-12 px-5">
            <div
                className="flex flex-col bg-[#f5f5f5] text-primary-black py-8 px-10 max-sm:px-5 rounded-lg shadow-[4px_5px_6px_0_rgba(0,0,0,.4)]
            gap-y-8"
            >
                {/*  PRODUCT HEADER  */}
                <div className="">
                    <h2 className="uppercase font-poppins font-semibold text-upperHeader">
                        Choose your NanoPods
                    </h2>
                    <h1 className="font-poppins font-bold max-sm:text-3xl text-5xl">
                        Which AirPods do you want?
                    </h1>
                </div>
                {/* BUYING SECTION */}
                <div className="flex gap-5">
                    <div className="flex justify-center items-center grow w-full py-10 px-10 shadow-custom-inner-md rounded-lg">
                        <img
                            src={airpods1}
                            alt="AirPods 3rd Generation"
                            className="aspect-square max-w-[450px]"
                        />
                    </div>
                    <div className="flex justify-between flex-col grow w-full gap-5">
                        { currentState ? (
                            <div className="flex flex-col gap-y-3">
                                <div className="flex justify-between">
                                    <div>
                                        <h1 className="font-poppins font-bold max-sm:text-3xl text-5xl">
                                            { currentState.name }
                                        </h1>
                                        <h2 className="uppercase font-poppins font-semibold text-upperHeader">
                                            {currentState.gen}
                                        </h2>
                                    </div>
                                    <div className="flex font-medium gap-x-1">
                                        <span className="align-top text-2xl align-text-top">
                                            ₱
                                        </span>
                                        <h3 className="text-4xl font-poppins">
                                            {currentState.price}
                                        </h3>
                                    </div>
                                </div>
                                <ul
                                    role="list"
                                    className="list-disc ml-8 text-lg"
                                >
                                    {currentState.feature.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p>No Current product selected</p>
                        ) }
                        <div className="flex flex-col gap-y-3">
                            <div className="flex flex-row gap-x-3 items-center">
                                <span className="font-medium">QTY: </span>
                                <Button
                                    text="-"
                                    fontWeight={'medium'}
                                    fontSize={'md'}
                                />
                                <input
                                    className="custom-number-input bg-[#EBEBEB] w-32 h-full shadow-custom-inner
                     rounded-md border-none outline-none text-center"
                                    type="number"
                                    placeholder="00"
                                    min="1"
                                    max="10"
                                />
                                <Button
                                    text="+"
                                    fontWeight={'medium'}
                                    fontSize={'md'}
                                />
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <ShopButton
                                    text="Buy Now"
                                    bgColor={'primary-yellow'}
                                    border={''}
                                    bgHover={'color-hover'}
                                />
                                <ShopButton
                                    text="Add to Cart"
                                    bgColor={'transparent'}
                                    border={'border-2 border-black'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* OTHER PRODUCTS */}
                <div>
                    <h2 className="uppercase">Other Products: </h2>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
