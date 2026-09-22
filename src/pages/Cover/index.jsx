import cornerFLower from '../../assets/border.png';
import cornerBottom from '../../assets/borderBot.png';
import style from  './style.module.css';

const Cover = ({ setOpenMainPage, name }) => {
  const handleOpenMainPage = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setOpenMainPage(true);
      document.documentElement.requestFullscreen()
    }, 1500)
  }; 

  return (
    <section className={`position-relative text-center ${style.coverBg}`} style={{ height: '100dvh' }}>    
      <div className={`d-flex flex-column justify-content-center align-items-center h-100 textPrime`}>
        <img src={cornerFLower} className="position-absolute top-0 end-0 rotate" style={{width: '8rem'}} alt="initial"  data-aos="fade-up" data-aos-duration="3000" />
        <img src={cornerBottom} className="position-absolute bottom-0 start-0 rotate" style={{width: '8rem'}} alt="initial"  data-aos="fade-up" data-aos-duration="3000" />
        
        <div style={{ zIndex: 2 }} >
          <p className="cormorantGaramond mb-0 fw-semibold philosopher primaryText fs-5">The Wedding of</p>
          <p className="cormorantInfant fw-bold m-0 secondaryText" style={{ fontSize: '2.4rem' }}>
            Anonim & Anonim
          </p>
          <p className="philosopher m-0 primaryText fw-semibold">Sabtu, 31 Februari 2026</p>
        </div>

        <div className={`px-5 mt-5 rounded-3 andada`} style={{ zIndex: 2 }}>
          <div className="">
            <p className="mb-0 primaryText fw-semibold">Kepada yang terhormat</p>
            <p className="mb-0 primaryText fw-semibold">Bapak/Ibu/Saudara/i</p>
            {/* <p className="my-1 mb-0 mt-1 fs-4 py-4">{name}</p> */}
            <p className="cormorantInfant mb-0 fs-5 py-3 fw-bold secondaryText">{ name }</p>
          </div>
        </div>
        
        <button className="shadow-lg buttonPrimary border-0 rounded-2 d-flex flex-row align-items-center gap-2 text-black cormorantG py-2 px-3 text-white button fw-semibold" type="button" style={{ zIndex: 2, fontSize: '0.9rem' }} data-aos="fade-up" data-aos-duration="1800" onClick={ handleOpenMainPage }>
          {/* {isPlaying ? <CiUnlock className='fw-bold'/> : <CiLock className='fw-bold'/>} <p className="mb-0">Buka Undangan</p> */} Buka Undangan
        </button>
      </div>
    </section>
  )
}

export default Cover
