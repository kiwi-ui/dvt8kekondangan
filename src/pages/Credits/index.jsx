import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Credits = () => {
  return (
    <section className='py-4 bgSecondary h-25 d-flex justify-content-center align-items-center' id='credits'>
      <div className="d-flex flex-column align-items-center sectionContainer">
        <p className="philosopher text-white fw-semibold">Designed and Developed by: divition</p>
        <div className="logos d-flex gap-3 mt-2">
            <a href="https://wa.link/0gd2cu" target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp size={30} color="white" />
            </a>
            <a href="https://www.instagram.com/divit.ion/" target="_blank" rel="noopener noreferrer">
                <RiInstagramFill size={30} color="white" />
            </a>
        </div>
      </div>
    </section>
  )
}

export default Credits
