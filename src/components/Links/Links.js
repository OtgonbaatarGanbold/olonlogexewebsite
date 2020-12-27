import React from 'react';
import Icon from "../../assets/img/b.png";

export default function Links() {
    return(
        <div className=" bg-blue-500 h-full my-8">
            <div className="">                
                <div className="mx-8 lg:mx-4 text-center pb-10">
                    <div className="flex justify-center">
                        <h1 className="text-2xl font-bold text-white m-8">Чухал холбоос</h1>
                    </div>
                    <div className="grid lg:grid-cols-8 grid-cols-2 gap-4 lg:gap-0">
                        <div>
                            <button className="text-center">
                                <img src={Icon} alt="BookIcon" className="w-12" />
                                <p className="text-white font-sans">Гарчиг</p>
                            </button>
                        </div>
                        <div>
                            <button className="text-center">
                                <img src={Icon} alt="BookIcon" className="w-12" />
                                <p className="text-white font-sans">Гарчиг</p>
                            </button>
                        </div>
                        <div>
                            <button className="text-center">
                                <img src={Icon} alt="BookIcon" className="w-12" />
                                <p className="text-white font-sans">Гарчиг</p>
                            </button>
                        </div>
                        <div>
                            <button className="text-center">
                                <img src={Icon} alt="BookIcon" className="w-12" />
                                <p className="text-white font-sans">Гарчиг</p>
                            </button>
                        </div>
                        <div>
                            <button className="text-center">
                                <img src={Icon} alt="BookIcon" className="w-12" />
                                <p className="text-white font-sans">Гарчиг</p>
                            </button>
                        </div>
                        <div>
                            <button className="text-center">
                                <img src={Icon} alt="BookIcon" className="w-12" />
                                <p className="text-white font-sans">Гарчиг</p>
                            </button>
                        </div>
                        <div>
                            <button className="text-center">
                                <img src={Icon} alt="BookIcon" className="w-12" />
                                <p className="text-white font-sans">Гарчиг</p>
                            </button>
                        </div>
                        <div>
                            <button className="text-center">
                                <img src={Icon} alt="BookIcon" className="w-12" />
                                <p className="text-white font-sans">Гарчиг</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}