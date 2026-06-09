import { useState } from "react";
import Cover from "./pages/Cover";
import ".././node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Main from "./pages/Main";
import { useParams } from "react-router-dom";

function App() {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [scrollBehavior, setScrollBehavior] = useState(false);
  const [openMainPage, setOpenMainPage] = useState(false);
  const { name } = useParams();
  const decodedName = decodeURIComponent(name).replace(/\+/g, " ");
  const capitalizedName = decodedName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  // const audioRef = useAudioRefService();
  // const { name } = useParams();
  // const songIndex = randomIndex;
  // const decodedName = decodeURIComponent(name).replace(/\+/g, " ");
  // const capitalizedName = decodedName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  //   useEffect(() => {
  //     Aos.init({
  //       once: false,   
  //       mirror: false,
  //     });

  //   Aos.refresh();
  // }, []);
  
  // const [isPhotoClicked, setisPhotoClicked] = useState()
  // const [clickedPhoto, setClickedPhoto] = useState('')
  return (
    <>
      {
        !openMainPage ? 
        <>
          <Cover setOpenMainPage={setOpenMainPage} name={capitalizedName} />
        </>

        :

        <>
          <Main />
        </>
      }
    </>
  )
}

export default App
