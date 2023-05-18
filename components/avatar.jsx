"use client";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import image1 from "../assets/avatars/1.png";
import image2 from "../assets/avatars/2.png";
import image3 from "../assets/avatars/3.png";
import image4 from "../assets/avatars/4.png";
import image5 from "../assets/avatars/5.png";
import image6 from "../assets/avatars/6.png";
import image7 from "../assets/avatars/7.png";
import image8 from "../assets/avatars/8.png";
import image9 from "../assets/avatars/9.png";
import image10 from "../assets/avatars/10.png";
import image11 from "../assets/avatars/11.png";
import image12 from "../assets/avatars/12.png";
import image13 from "../assets/avatars/13.png";
import image14 from "../assets/avatars/14.png";
import image15 from "../assets/avatars/15.png";
import image16 from "../assets/avatars/16.png";
import GlobalContext from "../app/api/contexts/GlobalContetxts";
const AvatarSelection = () => {
  const { gavatar, setgavatar } = useContext(GlobalContext);
  const [rbutton, setrbutton] = useState(1);
  const [lbutton, setlbutton] = useState(1);
  const avatArray = [
    image16,
    image16,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
  ];

  const [selectedAvatar, setSelectedAvatar] = useState(1);
  const handleDec = () => {
    setSelectedAvatar(selectedAvatar - 1);
  };
  const handleInc = () => {
    setSelectedAvatar(selectedAvatar + 1);
  };
  useEffect(() => {
    setSelectedAvatar((prevCounter) => {
      const newCounter = prevCounter - 1;
      return newCounter < 1 ? 18 : newCounter;
    });
  }, [lbutton]);
  useEffect(() => {
    setSelectedAvatar((prevcounter) => (prevcounter % 18) + 1);
    setgavatar(selectedAvatar);
  }, [rbutton]);

  return (
    <div className="flex flex-row justify-center items-center place-content-center place-items-center text-[2rem] ">
      <div className="hover:text-[#dbb844]">
        <FaAngleLeft
          onClick={() => {
            setlbutton(lbutton - 1);
          }}
        ></FaAngleLeft>
      </div>
      <div className="h-40 w-40">
        <Image src={avatArray[selectedAvatar - 1]} />
      </div>
      <div className="hover:text-[#dbb844]">
        <FaAngleRight
          onClick={() => {
            setrbutton(rbutton + 1);
          }}
        ></FaAngleRight>
      </div>
    </div>
  );
};

export default AvatarSelection;
//   const [selectedAvatar, setSelectedAvatar] = useState("");

//   const generateAvatar = () => {
//     const avatar = createAvatar(style, {
//       seed: Math.random().toString(),
//     });
//     setSelectedAvatar(avatar);
//   };

//   const handleSelect = () => {
//     onSelect(selectedAvatar);
//   };

//   return (
//     <div>
//       <h2>Select Your Avatar</h2>
//       <div dangerouslySetInnerHTML={{ __html: selectedAvatar }} />
//       <button onClick={generateAvatar}>Generate Random Avatar</button>
//       <button onClick={handleSelect}>Select Avatar</button>
//     </div>
//   );
// };
