import { Component } from "react";
import Slider from "react-slick";
import "../../css/slick.css"
import "../../css/slick-theme.css";
import img from '../../assets/img/champions.jpg'
import img1 from '../../assets/img/logo.png'

export default class MultipleItems extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              autoplay: true,
              autoplaySpeed: 2000,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              autoplay: true,
              autoplaySpeed: 2000,
              dots: true
            }
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows: false
            }
          }
        ]
      };
    return (
      <div className="mt-5 w-full flex justify-center bg-blue-600">
        <Slider {...settings} className="m-6 w-full gap-2 md:w-5/6 md:gap-8">
        
            <div className="flex">
                <a href="https://exe.mn" className="relative group block mx-2 ">
                    <div className="absolute inset-0 bg-black hidden p-4 opacity-75 group-hover:flex flex-col justify-end text-white cursor-pointer">
                        <h3 className="text-lg mb-2">Teacher</h3>
                        <p className="leading-normal select-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est assumenda quod libero tempore corrupti harum sint nihil rem doloremque a.</p>
                    </div>
                    <img src={img} alt={"allo"} className="w-64 h-128 rounded-3x"/>
                </a>
            </div>
            <div className="flex">
                <a href="https://exe.mn" className="relative group block mx-2">
                    <div className="absolute inset-0 bg-black hidden p-4 opacity-75 group-hover:flex flex-col justify-end text-white cursor-pointer">
                        <h3 className="text-lg mb-2">Teacher</h3>
                        <p className="leading-normal select-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est assumenda quod libero tempore corrupti harum sint nihil rem doloremque a.</p>
                    </div>
                    <img src={img1} alt={"allo"} className="w-64 h-128 rounded-3xl"/>
                </a>
            </div>
            <div className="flex">
                <a href="https://exe.mn" className="relative group block mx-2">
                    <div className="absolute inset-0 bg-black hidden p-4 opacity-75 group-hover:flex flex-col justify-end text-white cursor-pointer">
                        <h3 className="text-lg mb-2">Teacher</h3>
                        <p className="leading-normal select-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est assumenda quod libero tempore corrupti harum sint nihil rem doloremque a.</p>
                    </div>
                    <img src={img} alt={"allo"} className="w-64 h-128 rounded-3xl"/>
                </a>
            </div>
            <div className="flex">
                <a href="https://exe.mn" className="relative group block mx-2">
                    <div className="absolute inset-0 bg-black hidden p-4 opacity-75 group-hover:flex flex-col justify-end text-white cursor-pointer">
                        <h3 className="text-lg mb-2">Teacher</h3>
                        <p className="leading-normal select-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est assumenda quod libero tempore corrupti harum sint nihil rem doloremque a.</p>
                    </div>
                    <img src={img1} alt={"allo"} className="w-64 h-128 rounded-3xl"/>
                </a>
            </div>
            <div className="flex">
                <a href="https://exe.mn" className="relative group block mx-2">
                    <div className="absolute inset-0 bg-black hidden p-4 opacity-75 group-hover:flex flex-col justify-end text-white cursor-pointer">
                        <h3 className="text-lg mb-2">Teacher</h3>
                        <p className="leading-normal select-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est assumenda quod libero tempore corrupti harum sint nihil rem doloremque a.</p>
                    </div>
                    <img src={img} alt={"allo"} className="w-64 h-128 rounded-3xl"/>
                </a>
            </div>
        </Slider>
      </div>
    );
  }
}