import React from "react";
import Logo from  "../../assets/img/logo.png";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-600 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start lg:border-b-0 border-b p-3 lg:p-0">
            {/* <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="#pablo"
            >
              indigo Tailwind Starter Kit
            </a> */}
            
            <img src={Logo} alt="Logo" className="w-10"/>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ml-auto items-end">
              <li className="nav-item">
                    <a href="@" className="px-3 py-4 lg:py-2 flex text-xs uppercase font-bold text-white hover:opacity-75">Мэдээлэл</a>
              </li>
              <li className="nav-item">
                    <a href="@" className="px-3 py-4 lg:py-2 flex text-xs uppercase font-bold text-white hover:opacity-75">Сургалт</a>
              </li>
              <li className="nav-item">
                    <a href="@" className="px-3 py-4 lg:py-2 flex text-xs uppercase font-bold text-white hover:opacity-75">Бидний тухай</a>
              </li>
              <li className="nav-item">
                    <a href="@" className="px-3 py-4 lg:py-2 flex text-xs uppercase font-bold text-white hover:opacity-75">Багш нар</a>
              </li>
              <li className="nav-item">
                    <a href="@" className="px-3 py-4 lg:py-2 flex text-xs uppercase font-bold text-white hover:opacity-75">Сэтгэгдэл</a>
              </li>
              <li className="nav-item">
                    <a href="@" className="px-3 py-4 lg:py-2 flex text-xs uppercase font-bold text-white hover:opacity-75">Видео</a>
              </li>
              <li className="nav-item">
                    <a href="@" className="px-4 py-2 flex text-xs uppercase font-bold lg:py-2 text-blue-600 hover:opacity-75 bg-white rounded-full">Чухал холбоос</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}