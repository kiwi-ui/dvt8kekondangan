import { BsInstagram } from "react-icons/bs"

const Schedule = () => {
  return (
    <section style={{ zIndex: 5, position: 'relative' }} className='py-4 bgCouple d-flex justify-content-center' id='couple'>
        <div className="rounded-4 m-4 p-4 sectionContainer" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <div className="row">
                <p className="col-6 mb-4 fs-1 mt-2 fst-italic cormorantInfant fw-bold secondaryText" style={{ textAlign: 'start' }}>Wedding Events</p>
                <div className="col-6 d-flex flex-column">
                    <span className="text-center m-0 h-50"></span>
                    <p className="text-center border-3 border-top border-1 border-prime mt-4 p-0 h-50 w-100"></p>
                </div>
            </div>

            <div>
                <p className="mb-4 philosopher" style={{ fontSize: '0.84rem' }}>Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami:</p>
                <div className="container akadnikah my-5">
                    <p className="fw-bold fs-3 cormorantInfant secondaryText">Akad Nikah</p>
                    <div className="row mt-4">
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <p className="m-0 p-0 fs-4 cormorantInfant secondaryText fw-bold">Sabtu</p>
                        </div>
                        <div className="col-4 border-end border-start border-4 border-prime justify-content-center align-items-center">
                            <p className="fw-bold fs-1 m-0 cormorantInfant secondaryText">01</p>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <p className="m-0 p-0 fs-5 cormorantInfant secondaryText fw-bold">Januari</p>
                        </div>
                        <p className="mt-3 cormorantInfant secondaryText fw-bold fs-3">2027</p>
                    </div>

                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <p className="cormorantInfant">Pukul 09.00 WIB</p>
                        <p className="fw-bold cormorantInfant secondaryText">Di Rumah Mempelai Wanita</p>
                        <p className="cormorantInfant secondaryText">Jl. Alun Alun, Curug Kulon, Kec. Curug, Kabupaten Jakarta Pusat, Banten 15810</p>
                        <a href="instagram.com" className="btn buttonPrimary d-flex flex-row justify-content-center align-items-center gap-2" type="button" target="_blank" rel="noopener noreferrer">
                            <p className="badge text-white fs-5 p-1 col-2 m-0"><BsInstagram /></p>
                            <p className="text-white col-10 m-0">Instagram</p>
                        </a>
                    </div>
                </div>

                <div className="container akadnikah my-5">
                    <p className="fw-bold fs-3 cormorantInfant secondaryText">Resepsi</p>
                    <div className="row mt-4">
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <p className="m-0 p-0 fs-4 cormorantInfant secondaryText fw-bold">Sabtu</p>
                        </div>
                        <div className="col-4 border-end border-start border-4 border-prime justify-content-center align-items-center">
                            <p className="fw-bold fs-1 m-0 cormorantInfant secondaryText">01</p>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <p className="m-0 p-0 fs-5 cormorantInfant secondaryText fw-bold">Januari</p>
                        </div>
                        <p className="mt-3 cormorantInfant secondaryText fw-bold fs-3">2027</p>
                    </div>

                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <p className="cormorantInfant">Pukul 09.00 WIB</p>
                        <p className="fw-bold cormorantInfant secondaryText">Di Rumah Mempelai Wanita</p>
                        <p className="cormorantInfant secondaryText">Jl. Alun Alun, Curug Kulon, Kec. Curug, Kabupaten Jakarta Pusat, Banten 15810</p>
                        <a href="instagram.com" className="btn buttonPrimary d-flex flex-row justify-content-center align-items-center gap-2" type="button" target="_blank" rel="noopener noreferrer">
                            <p className="badge text-white fs-5 p-1 col-2 m-0"><BsInstagram /></p>
                            <p className="text-white col-10 m-0">Instagram</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Schedule
