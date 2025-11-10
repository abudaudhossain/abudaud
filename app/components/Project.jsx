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

    const expandedDetailHeight = isHovered ? `${descHeight > 300 ? 300 : descHeight}px` : '0px'

    return (
        <>
            <div
                className="relative w-full h-[520px] xl:h-[680px] rounded-2xl overflow-hidden group shadow-[0_30px_80px_-45px_rgba(5,200,154,0.65)] transition-transform duration-500 mt-6"
                key={cat.id}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover object-center w-full h-full transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020913] via-[#020913b3] to-transparent pointer-events-none" />

                <div className="absolute inset-0 flex items-end px-6 md:px-8 pb-8 sm:pb-10">
                    <div className={`relative z-[3] w-full max-h-[${descHeight}px] overflow-hidden`}>
                        <div className="flex h-full flex-col justify-end mb-6">
                            <div className="relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-[6px] transition-all duration-500 ease-out">
                                <div className="space-y-3 header-content">
                                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#90F0D6]">
                                        Featured Project
                                    </span>
                                    <h3 className="text-[22px] md:text-[28px] xl:text-[34px] font-semibold text-white leading-tight drop-shadow-[0_10px_45px_rgba(0,0,0,0.65)]">
                                        {cat.title}
                                    </h3>
                                    {cat.shortDescription && (
                                        <p className="text-sm md:text-base text-gray-300/80 line-clamp-3 transition-colors duration-300">
                                            {cat.shortDescription}
                                        </p>
                                    )}
                                </div>

                                <div
                                    ref={descRef}
                                    style={{
                                        maxHeight: expandedDetailHeight,
                                        opacity: isHovered ? 1 : 0,
                                        transition: 'max-height 0.7s ease, opacity 0.45s ease',
                                        overflowY: 'scroll',
                                        scrollbar: 'none'
                                    }}
                                    className='scrollbar-hide space-y-4 text-gray-200/95 text-sm md:text-base leading-relaxed transition-all duration-500 body-content'
                                >
                                    {cat.description && (
                                        <p className="text-gray-200/90">{cat.description}</p>
                                    )}

                                    {cat.role && (
                                        <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-white/90">
                                            <span className="uppercase tracking-[0.25em] text-[11px] text-gray-400">
                                                Role
                                            </span>
                                            <span className="inline-flex items-center rounded-full bg-[#142033]/90 px-3 py-1 text-sm text-[#9ADDC9] ring-1 ring-white/10">
                                                {cat.role}
                                            </span>
                                        </div>
                                    )}

                                    {Array.isArray(cat.tools) && cat.tools.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {cat.tools.map((tool) => (
                                                <span
                                                    key={tool}
                                                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[12px] uppercase tracking-[0.12em] text-gray-100/90"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col  xl:flex-row xl:items-center gap-3 pt-1 footer-content">
                                    {cat.live && (
                                        <Link
                                            href={cat.live}
                                            target="_blank"
                                            onClick={handleLiveDemoClick}
                                            className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#05C89A] bg-[#05C89A]/90 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-[#04151E] transition duration-300 hover:bg-[#05C89A] hover:shadow-[0_12px_40px_-18px_rgba(5,200,154,0.9)]"
                                        >
                                            Live Demo
                                        </Link>
                                    )}
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-white/40 hover:bg-white/15"
                                        onClick={handleDetailsClick}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectDetails show={showDetails} onClose={handleCloseModal} project={cat} />
        </>
    )
}

export default Project