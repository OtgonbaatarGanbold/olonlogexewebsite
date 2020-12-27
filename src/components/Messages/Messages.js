import React from 'react';

export default function Messages() {
    return(
        <div>
            <div className="flex justify-center">
                <h1 className="text-2xl font-bold text-gray-600">Сэтгэгдэл</h1>
            </div>
            <div className="flex flex-col items-stretch gap-4 my-6 mx-14 md:items-end">
                <div className="bg-gray-100 w-full md:w-1/2 rounded-l-full rounded-br-full shadow-xl">
                    <div className="flex flex-row items-center justify-between mx-8">
                        <div className="w-8/12 m-4">
                            <h1 className="text-blue-600 font-bold">Title</h1>
                            <p className="font-bold text-xs lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias ut architecto tempore</p>
                        </div>
                        <div className="bg-blue-400 rounded-full w-16 h-16 text-center">
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 w-full md:w-1/2 rounded-r-full rounded-bl-full shadow-xl self-start">
                    <div className="flex flex-row items-center justify-between mx-8">
                        <div className="w-8/12 m-4">
                            <h1 className="text-blue-600 font-bold">Title</h1>
                            <p className="font-bold text-xs lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias ut architecto tempore</p>
                        </div>
                        <div className="bg-blue-400 rounded-full w-16 h-16 text-center">
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 w-full md:w-1/2 rounded-l-full rounded-br-full shadow-xl">
                    <div className="flex flex-row items-center justify-between mx-8">
                        <div className="w-8/12 m-4">
                            <h1 className="text-blue-600 font-bold">Title</h1>
                            <p className="font-bold text-xs lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias ut architecto tempore</p>
                        </div>
                        <div className="bg-blue-400 rounded-full w-16 h-16 text-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}