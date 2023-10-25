import React, { useContext } from 'react'
import myContext from '../../../context/data/myContext'
import addProduct from '../../../assets/img/slide3.jpg'



function UpdateProduct() {
    const context = useContext(myContext);
    const { products, setProducts, updateProduct } = context


    return (
        <section className="bg-gray-900">
            <div className="container px-5 mx-auto">
                <div className="flex h-full flex-wrap items-center justify-evenly">
                    <div className="md:mt-0 sm:mt-40">
                        <div className='flex justify-center items-center h-screen'>
                            <div className=' bg-gray-800 px-10 rounded-xl'>
                                <div className="pt-10">
                                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Update Product</h1>
                                </div>
                                <div>
                                    <input type="text"
                                        onChange={(e) => setProducts({ ...products, title: e.target.value })} value={products.title}
                                        name='title'
                                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='Product title'
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                        name='price'
                                        onChange={(e) => setProducts({ ...products, price: e.target.value })} value={products.price}
                                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='Product price'
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                        name='imageurl'
                                        onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })} value={products.imageUrl}
                                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='Product imageUrl'
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                        name='category'
                                        onChange={(e) => setProducts({ ...products, category: e.target.value })} value={products.category}
                                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='Product category'
                                    />
                                </div>
                                <div>
                                    <textarea cols="30" rows="5"
                                        name='description' onChange={(e) => setProducts({ ...products, description: e.target.value })}
                                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                        placeholder='Product Description'>

                                    </textarea>
                                </div>
                                <div className=' flex justify-center mb-10'>
                                    <button
                                        onClick={updateProduct}
                                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                                        Update Product
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="md:pt-0 sm:pt-36">
                        <h1 className='text-white text-3xl font-bold mb-5'>Product Image</h1>
                        {products.imageUrl ? (
                            <img className='w-[350px] h-[400px] border rounded-lg' src={products.imageUrl} alt={products.title} />
                        ) : (
                            <div
                                className='w-[350px] h-[400px] border rounded-lg transition-opacity duration-300'
                                style={{
                                    backgroundColor: 'gray', // Background color for the div
                                    opacity: products.imageUrl ? 0 : 1,
                                    display: products.imageUrl ? 'none' : 'block',
                                }}
                            ></div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UpdateProduct