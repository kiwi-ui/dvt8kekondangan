import { useEffect, useState } from "react";
import Cover from "./pages/Cover";
import ".././node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Main from "./pages/Main";
import { useParams } from "react-router-dom";
import Aos from "aos";
import { useAudioRefService } from "./utils/audioRefService";
import { Toaster } from "react-hot-toast";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [openMainPage, setOpenMainPage] = useState(false);
  const { name } = useParams();
  const decodedName = decodeURIComponent(name).replace(/\+/g, " ");
  const capitalizedName = decodedName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const audioRef = useAudioRefService();
    useEffect(() => {
      Aos.init({
        once: false,   
        mirror: false,
      });

    Aos.refresh();
  }, []);
  
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
      {
        !openMainPage ? 
        <>
          <Cover setOpenMainPage={setOpenMainPage} name={capitalizedName} />
        </>

        :

        <>
          <Main audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </>
      }
    </>
  )
}

export default App
