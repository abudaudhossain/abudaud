import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-[#000222] text-white font-bold p-4" style={{ boxShadow: "0px 11px 21px -19px #054365" }}>
            <div className="container mx-auto flex justify-between items-center transition ">
                <div className="text-2xl">
                    <a href="#" className="text-[#05C89A]">Ad.</a>
                </div>
                <div className="space-x-4 text-lg">
                    <a href="#" className="hover:text-[#05C89A] transition-colors duration-300">Home</a>
                    <a href="#tech" className="hover:text-[#05C89A] transition-colors duration-300">About</a>
                    <a href="#projects" className="hover:text-[#05C89A] transition-colors duration-300">Projects</a>
                    <a href="#contact" className="hover:text-[#05C89A] transition-colors duration-300">Contact</a>

                </div>
            </div>
        </nav>
    )
}

export default Navbar