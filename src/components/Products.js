import React from 'react'
import ProductsCard from './ProductsCard'

function Products() {
    return (
        <div className='py-10'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping everyday!</h1>
                <span className='w-20 h-[3px] bg-black'></span>
                <p className='max-w-[700px] text-gray-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dignissimos ullam sint assumenda quod ipsum quia, consequatur recusandae sapiente cumque excepturi suscipit, atque labore? Alias numquam cum minima illum molestias?</p>
            </div>
            <div className='max-w-screen-xl mx-auto'>
                <ProductsCard></ProductsCard>
            </div>
        </div>
    )
}

export default Products