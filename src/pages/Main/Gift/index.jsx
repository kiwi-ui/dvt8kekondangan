import { cards } from "../../../utils/cards";
import { useState } from "react";

const Gift = () => {
  const [showBar, setShowBar] = useState(false);
  const handleShowBar = () => {
    setShowBar(!showBar);
  }
  return (
    <section className="bgCouple position-relative py-5 " id="gift">
        <div className="mx-4 p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <div className={`bgGallery text-center container rounded-4 p-4 mx-auto`} style={{ backgroundSize: '130%' }}>
                <div>
                    <p className="vidaloka fs-1" data-aos="zoom-in-up" data-aos-duration="3000">Wedding Gift</p>
                    <p className="caudex" data-aos="zoom-in-down" data-aos-duration="3000">Doa restu Anda merupakan karunia yang sangat berarti bagi kami, dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara cashless.</p>
                    <button className=" text-white bgButtonPrime rounded-pill px-4 d-flex justify-content-center align-items-center mx-auto" onClick={handleShowBar} data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500">
                        <span>Klik Disini</span>
                    </button>
                </div>

                {showBar &&
                    <div>
                        {
                            cards.map((card, index) => (
                                <div key={index} className="text-center my-4 cards px-3 py-4 rounded-4" data-aos="zoom-in" data-aos-duration="2500" data-aos-delay={index * 200}>
                                    <div className="d-flex justify-content-end">    
                                        <img className="w-25" src={card.img} alt="" />
                                    </div>
                                    <div className="d-flex flex-column py-2 text-start">
                                        <img className="" style={{ width: '30px' }} src={card.img} alt="" />
                                        <p  className="mb-0">{card.owner}</p>
                                        <p>{card.number}</p>
                                    </div>
                                    <button role="button" className="d-flex flex-row gap-1 justify-content-center btn border border-2 w-50 ms-auto shadow bgButton">
                                        copy
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