import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Credits = () => {
  return (
    <section className='py-4 bgSecondary h-25 d-flex align-items-center' id='credits'>
      <div className="mx-4 px-4 d-flex flex-column align-items-center">
        <p className="philosopher text-white fw-semibold">Designed and Developed by: Your Name</p>
        <div className="logos d-flex gap-3 mt-2">
            <IoLogoWhatsapp size={30} color="white" />
            <RiInstagramFill size={30} color="white" />
        </div>
      </div>
    </section>
  )
}

export default Credits
