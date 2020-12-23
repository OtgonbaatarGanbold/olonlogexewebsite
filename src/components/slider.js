import { Component, createRef } from 'react';
import img from '../assets/46277591_347018672770622_4188517072734519296_n.jpg'

class Slider extends Component {
    constructor(props) {
        super(props);

        this.scroll = createRef();
    }
    
    handleRightClick = () => {
        console.log(this.scroll);
        var i = 0;
        var slide = setInterval(
            () => {if (i < 15) {
                if (this.scroll) (this.scroll.current.scrollLeft += 20);
                else this.scroll = null;
                i++;
            } else {
                clearInterval(slide);
            }}
            , 20);
        
    }
    handleLeftClick = () => {
        console.log(this.scroll);
        var i = 0;
        var slide = setInterval(
            () => {if (i < 15) {
                if (this.scroll) (this.scroll.current.scrollLeft -= 20);
                else this.scroll = null;
                i++;
            } else {
                clearInterval(slide);
            }}
            , 20);
        
    }

    render() {
        return (   
        <div className="flex items-center bg-blue-900" >
            <button href="#" className="mx-12 h-16 w-16 text-gray-300 hidden md:block" onClick={() => this.handleLeftClick()} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            </button>
            <div className="mx-auto" >
                <div className="flex flex-row items-stretch justify-start space-y-6 md:overflow-hidden md:flex-nowrap md:space-y-0 py-5" ref={this.scroll}>
                    <div className="flex flex-shrink-0">
                        <a href="https://exe.mn" className="relative group block mx-2">
                            <div className="absolute inset-0 bg-black hidden p-4 opacity-75 group-hover:flex flex-col justify-end text-white cursor-pointer">
                                <h3 className="text-lg mb-2">Teacher</h3>
                                <p className="leading-normal select-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est assumenda quod libero tempore corrupti harum sint nihil rem doloremque a.</p>
                            </div>
                            <img src={img} alt={"allo"} className="w-full h-full rounded-3xl"/>
                        </a>
                    </div>
                    <div className="flex flex-shrink-0">
                        <a href="https://exe.mn" className="relative group block mx-2">
                            <div className="absolute inset-0 bg-black hidden p-4 opacity-75 group-hover:flex flex-col justify-end text-white cursor-pointer">
                                <h3 className="text-lg mb-2">Teacher</h3>
                                <p className="leading-normal select-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est assumenda quod libero tempore corrupti harum sint nihil rem doloremque a.</p>
                            </div>
                            <img src={img} alt={"allo"} className="w-full h-full rounded-3xl"/>
                        </a>
                    </div>
                    <div className="flex flex-shrink-0">
                        <a href="https://exe.mn" className="relative group block mx-2">
                            <div className="absolute inset-0 bg-black hidden p-4 opacity-75 group-hover:flex flex-col justify-end text-white cursor-pointer">
                                <h3 className="text-lg mb-2">Teacher</h3>
                                <p className="leading-normal select-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est assumenda quod libero tempore corrupti harum sint nihil rem doloremque a.</p>
                            </div>
                            <img src={img} alt={"allo"} className="w-full h-full rounded-3xl"/>
                        </a>
                    </div>
                    <div className="flex flex-shrink-0">
                        <a href="https://exe.mn" className="relative group block mx-2">
                            <div className="absolute inset-0 bg-black hidden p-4 opacity-75 group-hover:flex flex-col justify-end text-white cursor-pointer">
                                <h3 className="text-lg mb-2">Teacher</h3>
                                <p className="leading-normal select-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est assumenda quod libero tempore corrupti harum sint nihil rem doloremque a.</p>
                            </div>
                            <img src={img} alt={"allo"} className="w-full h-full rounded-3xl"/>
                        </a>
                    </div>
                    <div className="flex flex-shrink-0">
                        <a href="https://exe.mn" className="relative group block mx-2">
                            <div className="absolute inset-0 bg-black hidden p-4 opacity-75 group-hover:flex flex-col justify-end text-white cursor-pointer">
                                <h3 className="text-lg mb-2">Teacher</h3>
                                <p className="leading-normal select-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est assumenda quod libero tempore corrupti harum sint nihil rem doloremque a.</p>
                            </div>
                            <img src={img} alt={"allo"} className="w-full h-full rounded-3xl"/>
                        </a>
                    </div>
                </div>
            </div>
            <button href="#" className="mx-12 h-16 w-16 text-gray-300 hidden md:block" onClick={() => this.handleRightClick()} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            </button>
        </div>
        );
    }
}

export default Slider;