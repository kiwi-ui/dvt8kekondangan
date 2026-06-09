import { RiArrowDownDoubleLine } from "react-icons/ri";
import style from './style.module.css';
import groom from '../../../assets/1.png';
import bride from '../../../assets/2.png';
import '../../../App.css';
import Reminder from "../../../components/Reminder";
import cornerFLower from '../../../assets/border.png';
import cornerBottom from '../../../assets/borderBot.png';

const Opening = () => {
  return (
    <section className="opening h-100">
      <img src={cornerFLower} className="position-absolute top-0 end-0 rotate" style={{width: '8rem'}} alt="initial"  data-aos="fade-up" data-aos-duration="3000" />
      <img src={cornerBottom} className="position-absolute bottom-0 start-0 rotate" style={{width: '8rem'}} alt="initial"  data-aos="fade-up" data-aos-duration="3000" />
      <div className={`d-flex flex-column justify-content-center align-items-center h-100 textPrime`}>
        <p className="fs-5 fw-normal philosopher">THE WEDDING OF</p>
        {/* <div> */}
          {/* <img className="w-50" src={groom} alt="Groom" />
          <img className="w-50" src={bride} alt="Bride" /> */}
        {/* </div> */}
        <div className="cormorantInfant text-center py-3">
            <p className="text-warning2 fw-semibold mb-0 me-5 secondaryText" data-aos="fade-right" data-aos-duration="2950" style={{fontSize: '3.3rem'}}>Anoni &</p>
            {/* <p className="text-warning2 fw-semibold mb-0 secondaryText" data-aos="fade-right" data-aos-duration="2950" style={{fontSize: '3.3rem'}}>&</p>                 */}
            <p className="text-warning2 fw-semibold ms-5 secondaryText" data-aos="fade-left" data-aos-duration="2950" style={{fontSize: '3.3rem', marginTop:'-1rem'}}>Anonimus</p>
        </div>

        <p className="philosopher pb-1" data-aos="fade-up" data-aos-duration="3000">19.10.2025</p>
        <button type='button' className="btn">
          <Reminder />
        </button>

        <div className="">
          <RiArrowDownDoubleLine className={`${style.scrollLine}`} />
        </div>
      </div>
    </section>
  )
}

export default Opening
