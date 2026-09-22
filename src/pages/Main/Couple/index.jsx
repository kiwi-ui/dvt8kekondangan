import React from 'react';
import groom from '../../../assets/5.png';
import bride from '../../../assets/6.png';
import { CgInstagram } from 'react-icons/cg';
import '../../../App.css';

const Couple = () => {
  return (
    <section style={{ zIndex: 5, position: 'relative' }} className='py-4 bgCouple' id='couple'>
        <div className="container">
            <div className="px-1">
                {/* <p className="bohemeFloral text-center w-100 mx-auto textPrime" data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="2000">
                    Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami:
                </p> */}

                <div className="d-flex flex-column justify-content-center align-items-center py-4">
                    <div className="bride pb-4">
                        <img className='imgCouple' src={bride} alt="bride"   data-aos="zoom-in" data-aos-duration="3000"/>
                        
                        <div>
                            {/* <p className="bohemeFloral mb-0 fw-semibold ps-5 pb-3 textPrime" style={{ fontSize: '2.6rem', marginTop: '-1.5rem' }}>Anom</p> */}
                            <p className="fraunces mb-0 secondaryText fw-bold py-3 cormorantInfant" style={{ lineHeight: '1', fontSize: '2.3rem' }}>Anomnim A ininimnin</p>
                            
                            <div className="montserrat fw-normal" style={{ fontSize: '0.87rem' }}>
                                <p className="mb-1  philosopher" data-aos="fade-up" data-aos-duration="3000">Putri ke-21 dari:</p>
                                <p className="mb-0 fw-semibold philosopher" data-aos="fade-up" data-aos-duration="3000">Bapak Micky Ahmad</p>
                                <p className="mb-0 fw-semibold mb-3" data-aos="fade-up" data-aos-duration="3000">& Ibu Hanifah</p>
                                <a href='https://www.instagram.com/yusnianggara/' target='__blank'  className="p-2 secondaryText" data-aos="fade-left" data-aos-duration="2800" style={{ width: '40px', height: '40px' }}>
                                    <CgInstagram className="fs-3 m-0 p-0 shadow-lg"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <div className="my-5 text-center bohemeFloral fw-semibold">
                        <img height={50} src={ dan } alt="&" srcset="" data-aos="flip-up" data-aos-duration="2100"/>
                    </div> */}

                    <div className="groom">
                        <img className="imgCouple" src={groom} alt="bride" style={{ borderRadius: '0.6rem 0.6rem 4rem 0.6rem ' }} data-aos="zoom-in" data-aos-duration="2000"/>
                        <div>
                            {/* <p className="bohemeFloral mb-0 fw-semibold pe-5 pb-3 textPrime" style={{ fontSize: '2.6rem', marginTop: '-1.5rem' }}>Anom</p> */}
                            <p className="fraunces mb-0 secondaryText fw-bold py-3 cormorantInfant" style={{ lineHeight: '1', fontSize: '2.3rem' }}>Anomnim A ininimnin</p>
                            
                            <div className="montserrat fw-normal" style={{ fontSize: '0.87rem' }}>
                                <p className="mb-0 philosopher" data-aos="fade-up" data-aos-duration="3000">Putri ke-21 dari:</p>
                                <p className="mb-0 fw-semibold philosopher" data-aos="fade-up" data-aos-duration="3000">Bapak Micky Ahmad</p>
                                <p className="mb-0 fw-semibold mb-3 philosopher" data-aos="fade-up" data-aos-duration="3000">& Ibu Hanifah</p>
                                <a href='https://www.instagram.com/yusnianggara/' target='__blank'  className="p-2 fw-bolder" data-aos="fade-right" data-aos-duration="2800" style={{ width: '40px', height: '40px' }} >
                                    <CgInstagram className="fs-3 m-0 p-0 shadow-lg secondaryText"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>  )
}

export default Couple