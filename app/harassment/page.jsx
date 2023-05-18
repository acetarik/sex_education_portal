"use client";
import React, { useContext, useEffect,useRef } from "react";
import { useRouter } from "next/navigation";
import Navbarharassment from "../../components/navbarharassment";
import Image from "next/image";
import image0 from "../../assets/safety.png";
import image1 from "../../assets/verbal2.png";
import image2 from "../../assets/physcial.png";
import image3 from "../../assets/cyber.png";
import image4 from "../../assets/toxic.png";
import image5 from "../../assets/report.png";
import image6 from "../../assets/prevention.png";
import image7 from "../../assets/online.png";

export default function gender() {
  const introRef=useRef(null);
  const typesRef=useRef(null);
  const reportRef=useRef(null);
  const preventRef=useRef(null);
  const safeRef=useRef(null);
  const router = useRouter();
  // intro,types,report,prevent,safe
  useEffect(() => {
    if (localStorage.getItem("pocketbase_auth") == null)
      router.push(`/mainpage`);
  }, []);
  return (
    <div>
      <div className="flex flex-col flex-wrap justify-center">
        <Navbarharassment intro={introRef}
        types={typesRef}
        report={reportRef}
        prevent={preventRef}
        safe={safeRef}        
        />
        <div className="bg-[#fcfaf4] h-auto w-screen text-center safetybg"
        ref={introRef}>
          <h1 className="infopagetitle text-[#eae9ec]">HARASSMENT</h1>
          <div className="flex flex-row mt-[6.3rem] mb-10">
            <Image src={image0} className="scale-[0.7] mt-14"></Image>
            <div className="bg-[#f6f6e9] w-screen h-auto t-0 right-0 text-center rounded-3xl mb-10">
              <h1 className="mainpageheadings text-[#272727] text-[60px]">
                IMPORTANT
              </h1>
              <h1 className="mainpagep ga text-[#272727] text-[30px]">
                Harassment is a serious issue that everyone should be aware of,
                especially during adolescence. It's important to understand what
                harassment is and how to prevent it. Harassment refers to any
                unwelcome behavior, such as unwanted advances, comments, or
                physical contact, that makes someone feel uncomfortable, scared,
                or violated.
              </h1>
            </div>
            <Image src={image0} className="scale-[0.7] mt-14"></Image>
          </div>
        </div>
        <div className="bg-[#272727] w-screen h-auto text-center">
          <h1 className="mainpageheadings text-[#fcfaf4] text-[60px]"
          ref={typesRef}>
            Forms of Harassment
          </h1>
          <h1 className="mainpagep ga text-[#fcfaf4] text-[30px] mt-4">
            Harassment comes in different forms and can be a distressing
            experience. It's important to be aware of the various types of
            harassment that exist, as this knowledge empowers individuals to
            recognize and address such behavior.
          </h1>
          <div className="flex flex-row justify-center gap-14 mb-10">
            <div className="cardui cardgender har i1">
              <Image src={image1} className="rounded-3xl"></Image>
            </div>
            <div className="cardui cardgender har i2">
              <Image src={image2} className="rounded-3xl"></Image>
            </div>
            <div className="cardui cardgender har i3">
              <Image src={image3} className="rounded-3xl"></Image>
            </div>
            <div className="cardui cardgender har i4">
              <Image src={image4} className="rounded-3xl"></Image>
            </div>
          </div>
          <p className="text-white text-[20px] mb-10">
            Hover to flip these cards!
          </p>
        </div>

        <div className="bg-[#7d9b76] w-screen h-auto text-center justify-center">
          <div className="flex flex-row mt-[2rem] mb-[2rem]">
            <div className="bg-[#272727] w-auto h-fit text-center rounded-3xl mt-10 ml-8">
              <h1 className="mainpageheadings text-[#f6f6e9] text-[30px]"
              ref={reportRef}>
                Recognizing and Responding to Harassment
              </h1>
              <h1 className="mainpagep ga text-[#f6f6e9] text-[27px]">
                It's crucial to be able to recognize harassment and know how to
                respond to it. If you or someone you know is experiencing
                harassment, trust your instincts and take it seriously. Speak up
                and assertively communicate your boundaries. It's essential to
                document incidents and seek support from a trusted adult, such
                as a parent, teacher, or counselor. Together, they can explore
                ways to address the situation and ensure your safety.
              </h1>
            </div>
            <Image src={image5} className="scale-[0.9]"></Image>
          </div>
        </div>
        <div className="bg-[#272727] w-screen h-auto text-center justify-center">
          <div className="flex flex-row mt-[2rem] mb-[2rem]">
            <Image src={image6} className="scale-[0.9]"></Image>
            <div className="bg-[#457d58] w-auto h-fit text-center rounded-3xl mt-10 mr-8"
            
            ref={preventRef}>
              <h1 className="mainpageheadings text-[#f6f6e9] text-[30px]">
                Prevention Strategies
              </h1>
              <h1 className="mainpagep ga text-[#f6f6e9] text-[27px]">
                Preventing harassment starts with creating a culture of respect
                and empathy. Treat others with kindness and empathy, and speak
                up if you witness harassment happening to someone else. Respect
                personal boundaries and always seek clear and enthusiastic
                consent before engaging in any physical or sexual activity.
                Remember, no one is ever entitled to someone else's body or
                personal space.
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-[#7d9b76] w-screen h-auto text-center justify-center">
          <div className="flex flex-row mt-[2rem] mb-[2rem]">
            <div className="bg-[#272727] w-auto h-fit text-center rounded-3xl mt-10 ml-8"
            ref={safeRef}>
              <h1 className="mainpageheadings text-[#f6f6e9] text-[30px]">
                Online Safety
              </h1>
              <h1 className="mainpagep ga text-[#f6f6e9] text-[27px]">
                In the digital age, it's crucial to understand online safety and
                prevent cyberbullying. Be mindful of the content you share
                online and the impact it can have on others. Keep personal
                information private and avoid engaging in or spreading harmful
                online behavior. If you experience online harassment, block the
                person and report the incident to the appropriate platform.
              </h1>
            </div>
            <Image src={image7} className="scale-[0.9]"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
