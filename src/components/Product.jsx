import airpods1 from '../assets/airpods-3rd-generation.png'
import { PRODUCTS } from '../data/products'
import Button from './Button'
import ShopButton from './ShopButton'
import React, { useState, useEffect } from 'react'

export const Product = () => {
    const [products, setProducts] = useState(PRODUCTS)
    const [currentState, setCurrentState] = useState(products[0])
    const [quantityCount, setQuantityCount] = useState(null)

    const handleProductClick = (clickedProduct) => {
        const updateProducts = products.map((product) =>
            product.name === clickedProduct.name
                ? { ...product, isCurrent: true }
                : { ...product, isCurrent: false }
        )
        setProducts(updateProducts)
        setCurrentState(clickedProduct)
    }
    
    const handleDecrement = () => {
        if (quantityCount > 1) setQuantityCount(quantityCount - 1)
    }

    const handleIncrement = () => {
        if (quantityCount < 10) setQuantityCount(quantityCount + 1)
    }
    
    const handleChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setQuantityCount(value)
    }

    /* 
    useEffect(() => {
        const currentProduct = products.find((product) => product.isCurrent)
        setCurrentState(currentProduct || null)
    }, [products]) */

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

                {currentState && (
                    <div className="flex gap-5">
                        <div className="flex justify-center items-center grow w-full py-10 px-10 shadow-custom-inner-md rounded-lg">
                            <img
                                src={currentState.img}
                                alt={currentState.name}
                                className="aspect-square w-[450px] h-[450px]"
                            />
                        </div>
                        <div className="flex justify-between flex-col grow w-full gap-5">
                            <div className="flex flex-col gap-y-3">
                                <div className="flex justify-between">
                                    <div>
                                        <h1 className="font-poppins font-bold max-sm:text-3xl text-5xl">
                                            {currentState.name}
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
                            <div className="flex flex-col gap-y-3">
                                <div className="flex flex-row gap-x-3 items-center">
                                    <span className="font-medium">QTY: </span>
                                    <Button
                                        text="-"
                                        fontWeight={'medium'}
                                        fontSize={'md'}
                                        onClick={handleDecrement}
                                    />
                                    <input
                                        className="custom-number-input bg-[#EBEBEB] w-32 h-full shadow-custom-inner
                     rounded-md border-none outline-none text-center"
                                        type="number"
                                        placeholder="0"
                                        value={quantityCount}
                                        min="1"
                                        max="10"
                                        onChange={handleChange}
                                    />
                                    <Button
                                        text="+"
                                        fontWeight={'medium'}
                                        fontSize={'md'}
                                        onClick={handleIncrement}
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
                )}

                {/* OTHER PRODUCTS */}
                <div className="flex flex-col gap-y-5">
                    <h2 className="uppercase text-xl font-bold">
                        Other Products:
                    </h2>
                    <div className="flex gap-x-10">
                        {products.map((product, index) => {
                            if (!product.isCurrent) {
                                return (
                                    <li
                                        className="flex list-none flex-col items-center
                                    py-5 px-10 shadow-custom-inner-md rounded-lg max-w-[300px] gap-y-5 cursor-pointer"
                                        key={index}
                                        onClick={() =>
                                            handleProductClick(product)
                                        }
                                    >
                                        <img
                                            className="aspect-square bg-contain w-[200px]"
                                            src={product.img}
                                            alt={product.name}
                                        />
                                        <div className="text-center">
                                            <h1 className="text-2xl font-bold ">
                                                {product.name}
                                            </h1>
                                            <h2 className="text-md font-semibold">
                                                {product.gen}
                                            </h2>
                                        </div>
                                    </li>
                                )
                            }
                            return null
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
