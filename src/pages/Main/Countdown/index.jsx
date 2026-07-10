import React, { useEffect, useState } from 'react'

const Countdown = () => {
  const [event, setEvent] = useState({
        days: null,
        hours: null,
        minutes: null,
        seconds: null
    })
    const [isEventOver, setIsEventOver] = useState(false)

    useEffect(() => {
        const targetDate = new Date('2029-09-28T19:00:00');

        setInterval(() => {
            const currentDate = new Date();
            const timeDifference = targetDate - currentDate;
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            setEvent({ days, hours, minutes, seconds })

            if (timeDifference <= 0) {
                return (setIsEventOver(true));
            }
        }, 1000)
        // return () => clearInterval();
    }, [])

    return (
        <section id="date" className="border-0 position-relative bgCouple">
            <div className="rounded-4 mx-4 p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <div className="row">
                    <p className="col-6 mb-4 fs-1 mt-2 fst-italic cormorantInfant fw-bold secondaryText" style={{ textAlign: 'start' }}>Wedding Events</p>
                    <div className="col-6 d-flex flex-column">
                        <span className="text-center m-0 h-50"></span>
                        <p className="text-center border-3 border-top border-1 border-prime mt-4 p-0 h-50 w-100"></p>
                    </div>
                </div>

                <div className="justify-content-start">
                    {!isEventOver ?
                        <div className="row text-white">
                            <div className="col-3" data-aos="zoom-in-left" data-aos-delay="800" data-aos-duration="2600">
                                <div className={`philoshoper text-center d-flex align-items-center flex-column rounded-2 shadow-sm buttonPrimary`}>
                                    <p className={` fs-5 pt-1 fw-semibold mb-0`}>{event.days}</p>
                                    <p className={`m-0 pb-1`} style={{fontSize:'0.7rem'}}>Hari</p>
                                </div>
                            </div>
                            <div className="col-3" data-aos="zoom-in-left" data-aos-delay="500" data-aos-duration="3000">
                                <div className={`philoshoper text-center d-flex align-items-center flex-column rounded-2 shadow-sm buttonPrimary`}>
                                    <p className={` fs-5 pt-1 fw-semibold mb-0`}>{event.hours}</p>
                                    <p className={`m-0 pb-1`} style={{fontSize:'0.7rem'}}>Jam</p>
                                </div>
                            </div>
                            <div className="col-3" data-aos="zoom-in-right" data-aos-delay="500" data-aos-duration="3000">
                                <div className={`philoshoper text-center d-flex align-items-center flex-column rounded-2 shadow-sm buttonPrimary`}>
                                    <p className={` fs-5 pt-1 fw-semibold mb-0`}>{event.minutes}</p>
                                    <p className={`m-0 pb-1`} style={{fontSize:'0.7rem'}}>Menit</p>
                                </div>
                            </div>
                            <div className="col-3" data-aos="zoom-in-right" data-aos-delay="800" data-aos-duration="2600">
                                <div className={`philoshoper text-center d-flex align-items-center flex-column rounded-2 shadow-sm buttonPrimary`}>
                                    <p className={` fs-5 pt-1 fw-semibold mb-0`}>{event.seconds}</p>
                                    <p className={`m-0 pb-1`} style={{fontSize:'0.7rem'}}>Detik</p>
                                </div>
                            </div>
                        </div>
                        :
                        <p>Acara Sudah Selesai</p>
                    }
                </div>
            </div>
        </section>
    )
}

export default Countdown

