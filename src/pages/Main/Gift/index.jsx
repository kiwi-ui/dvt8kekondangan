import { cards } from "../../../utils/cards";
import { useState } from "react";

const Gift = () => {
  const [showBar, setShowBar] = useState(false);
  const handleShowBar = () => {
    setShowBar(!showBar);
  }
  return (
    <section className="bgCouple position-relative py-5 d-flex justify-content-center" id="gift">
        <div className="mx-4 p-4 rounded-4 sectionContainer" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <div className={`bgGallery text-center container rounded-4 mx-auto`} style={{ backgroundSize: '130%' }}>
                <div>
                    <p className="vidaloka fs-1 fst-italic cormorantInfant fw-bold secondaryText mb-0" data-aos="zoom-in-up" data-aos-duration="3000">Wedding Gift</p>
                    <p className="caudex" data-aos="zoom-in-down" data-aos-duration="3000">Doa restu Anda merupakan karunia yang sangat berarti bagi kami, dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara cashless.</p>
                    <button className="buttonPrimary text-white btn"  onClick={handleShowBar} data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500">
                        <span className="mb-1 fw-semibold">Klik Disini</span>
                    </button>
                </div>

                {showBar &&
                    <div>
                        {
                            cards.map((card, index) => (
                                <div key={index} className="text-center my-4 cards px-3 py-4 rounded-4 shadow-lg" style={{ backgroundColor: 'rgba(197, 186, 186, 0.6)' }} data-aos="zoom-in" data-aos-duration="2500" data-aos-delay={index * 200}>
                                    <div className="d-flex justify-content-end">    
                                        <img className="w-25" src={card.img} alt="" />
                                    </div>
                                    <div className="d-flex flex-column py-2 text-start">
                                        <img className="" style={{ width: '30px' }} src={card.img} alt="" />
                                        <p  className="mb-0">{card.owner}</p>
                                        <p>{card.number}</p>
                                    </div>
                                    <button className="text-white rounded-2 px-2 border-0  bg-secondary d-flex flex-row justify-content-center align-items-center gap-2" type="button" onClick={() => {navigator.clipboard.writeText(card.number)}}>
                                        <p className="mb-1">copy</p>
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    </section>
  )
}

export default Gift
