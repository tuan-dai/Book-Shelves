import React from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IoLogoApple, IoLogoGooglePlaystore } from 'react-icons/io5'
import { NavLink } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
    return (
        <footer className='bg-white absolute w-100 mt-2'>
            <div className='w-8/12 row mx-auto py-4'>
                <div className='col-6 col-sm-6 col-md-6 col-lg-3 text-gray-400'>
                    <h6 className='mt-4 footer-title'>Customer Support</h6>
                    <ul className='footer-content'>
                        <li>
                            <NavLink to='#' className='footer-link'>Frequently asked questions</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' className='footer-link'>Order guide</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' className='footer-link'>Return policy</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' className='footer-link'>Instalment guide</NavLink>
                        </li>
                    </ul>
                </div>

                <div className='col-6 col-sm-6 col-md-6 col-lg-3 text-gray-400'>
                    <h6 className='mt-4 footer-title'>About Wanda</h6>
                    <ul className='footer-content'>
                        <li>
                            <NavLink to='#' className='footer-link'>About Wanda</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' className='footer-link'>Payment security policy</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' className='footer-link'>Personal information privacy policy</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' className='footer-link'>Terms of use</NavLink>
                        </li>
                    </ul>
                </div>

                <div className='col-6 col-sm-6 col-md-6 col-lg-3 text-gray-400'>
                    <h6 className='mt-4 footer-title'>Support</h6>
                    <ul className='footer-content'>
                        <li>
                            <NavLink to='#' className='footer-link'>Feedback</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' className='footer-link'>Sale & Services</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' className='footer-link'>Recruit</NavLink>
                        </li>
                    </ul>
                </div>

                <div className='col-6 col-sm-6 col-md-6 col-lg-3 text-gray-400'>
                    <h6 className='mt-4 footer-title'>Connect Wanda</h6>
                    <div className='flex items-center gap-3 footer-icon'>
                        <button><FacebookIcon /></button>
                        <button><YouTubeIcon /></button>
                        <button><InstagramIcon /></button>
                    </div>
                    <h6 className='mt-4 footer-title'>Download App</h6>
                    <div className='flex items-center gap-3'>
                        <button><IoLogoApple style={{ fontSize: '24px' }} /></button>
                        <button><IoLogoGooglePlaystore style={{ fontSize: '24px' }} /></button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
