'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectDetails from './ProjectDetails'
import { event } from '../lib/gtag'

const Project = ({ cat }) => {

    const [isHovered, setIsHovered] = useState(false)
    const descRef = useRef(null)
    const [descHeight, setDescHeight] = useState(0)
    const [showDetails, setShowDetails] = useState(false)

    useEffect(() => {
        if (descRef.current) {
            setDescHeight(descRef.current.scrollHeight > 500 ? 500 : descRef.current.scrollHeight)
        }
    }, [cat.description, cat.link, isHovered])

    const handleLiveDemoClick = () => {
        event({
            action: 'click',
            category: 'Project',
            label: 'Live Demo',
            value: cat.title,
        })
    }

    const handleDetailsClick = () => {
        setShowDetails(true)
        event({
            action: 'click',
            category: 'Project',
            label: 'See Project Details',
            value: cat.title,
        })
    }

    const handleCloseModal = () => {
        setShowDetails(false)
    }

    return (
        <>
            <div
                className="relative w-full h-[500px] xl:h-[670px] rounded-[8px] overflow-hidden group"
                key={cat.id}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}

            >
                <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black from-5% via-black/40 via-90% to-transparent" />

                {/* Fixed container with title always visible */}
                <div
                    className="absolute left-0 px-9 z-[3] space-y-4 bottom-10 "
                    style={{ bottom: '40px' }}
                >
                    <p className="font-bold text-[20px] md:text-[26px] xl:text-[34px] text-white leading-[30px] xl:leading-[44px] line-clamp-2">
                        {cat.title}
                    </p>

                    {/* Animated description + button */}
                    <div
                        ref={descRef}
                        style={{
                            maxHeight: isHovered ? `${descHeight}px` : '0px',
                            opacity: isHovered ? 1 : 0,
                            transition: 'max-height 0.7s ease, opacity 0.5s ease 0.2s',
                            overflowY: 'scroll',
                            scrollbar: 'none'
                        }}
                        className='scrollbar-hide'
                    >
                        <p className="text-base md:text-lg text-gray-300 mt-2 ">
                            {cat.description}

                        </p>
                        <h1 className="text-lg font-semibold mb-2">
                            Role:{" "}
                            <span className="bg-[#1D283A] px-2.5 py-1 m-1 rounded dark:bg-blue-900 dark:text-blue-300">
                                {cat.role}
                            </span>
                        </h1>
                        <div className="flex justify-between px-1 py-2 gap-4">
                            {cat.live && (
                                <Link
                                    href={cat.live}
                                    target="_blank"
                                    onClick={handleLiveDemoClick}
                                    className="flex-1"
                                >
                                    <div className="gradient-border font-semibold text-center">LIVE DEMO</div>
                                </Link>
                            )}
                            <button
                                type="button"
                                className="gradient-border font-semibold px-4 py-2"
                                onClick={handleDetailsClick}
                            >
                                DETAILS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectDetails show={showDetails} onClose={handleCloseModal} project={cat} />
        </>
    )
}

export default Project