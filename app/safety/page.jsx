"use client";
import React, { useContext, useEffect } from "react";
import Navbarsafety from "../../components/navbarsafety";
import Image from "next/image";
import image0 from "../../assets/safety.png";
import image1 from "../../assets/ticsross.png";
import image2 from "../../assets/personalspace.png";
import image3 from "../../assets/safe.png";
import Link from "next/link";
import { useRef } from "react";
// intro, conc, pb, kp

export default function gender() 
{
    const iRef=useRef(null);
    const cRef=useRef(null);
    const pRef=useRef(null);
    const kRef=useRef(null);

    return(
    <div>
        <div className="flex flex-col flex-wrap justify-center">
        <Navbarsafety intro={iRef} conc={cRef} pb={pRef} kp={kRef} />
                <div className="bg-[#fcfaf4] h-auto w-screen text-center safetybg">
                    <h1 className="infopagetitle text-[#eae9ec]">SAFETY</h1>
                    <div className="flex flex-row mt-[6.3rem] mb-10">
                    <Image src={image0} className="scale-[0.7] mt-14"></Image>
                    <div className="bg-[#f6f6e9] w-screen h-auto t-0 right-0 text-center rounded-3xl mb-10" ref={iRef}>
                        <h1 className="mainpageheadings text-[#272727] text-[60px]">WELCOME!</h1>
                        <h1 className="mainpagep ga text-[#272727] text-[30px]">
                        Dear young readers, welcome to an important topic that empowers you to understand your rights and 
                        ensure your safety—consent and boundaries. In this blog post, we will explore what consent means, 
                        why it's essential, and how to establish and respect personal boundaries. 
                        Remember, your body is yours, and it's important to feel comfortable and respected at all times.
                        </h1>
                    </div>
                    <Image src={image0} className="scale-[0.7] mt-14"></Image>
                    </div>
                </div>
                <div className="bg-[#272727] w-screen h-auto text-center justify-center">
                    <div className="flex flex-row mt-[2rem] mb-[2rem]">
                        <Image src={image1} className="scale-[0.7]"></Image>
                        <div className="bg-[#f6f6e9] w-auto h-fit text-center rounded-3xl mt-14 mr-8" ref={cRef}>
                            <h1 className="mainpageheadings text-[#42573d] text-[30px]">What is Consent?</h1>
                            <h1 className="mainpagep ga text-[#272727] text-[27px]">
                            <b className="text-[#42573d] text-[30px]">Consent</b> means giving permission or agreeing to something 
                            willingly. It is crucial in all areas of life, especially when it comes to personal boundaries and 
                            physical touch. Consent should always be enthusiastic, clear, and ongoing. It's essential to
                             remember that you have the right to say "yes" or "no" to any physical contact or situation.
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="bg-[#7d9b76] w-screen h-auto text-center justify-center">
                    <div className="flex flex-row mt-[2rem] mb-[2rem]">
                        <div className="bg-[#272727] w-auto h-fit text-center rounded-3xl mt-14 ml-8" ref={pRef}>
                            <h1 className="mainpageheadings text-[#f6f6e9] text-[30px]">Respecting Personal Boundaries</h1>
                            <h1 className="mainpagep ga text-[#f6f6e9] text-[27px]">
                            Personal boundaries are like invisible lines that define your physical and emotional space.
                            They help you establish limits on what is acceptable or comfortable for you. Boundaries vary
                            from person to person, and it's important to understand and respect both your own boundaries 
                            and those of others.
                            </h1>
                        </div>
                        <Image src={image2} className="scale-[0.9]"></Image>
                    </div>
                </div>
                <div className="bg-[#e9eaec] w-screen h-auto text-center justify-center safetybg" ref={kRef}>
                    <h1 className="mainpageheadings ga text-[#f6f6e9] text-[60px] mt-14">KEY POINTS TO REMEMBER</h1>
                    <div className="w-[60%] h-auto p-4 bg-[#e9eaec] rounded-2xl mx-auto mt-8 mb-4">
                    <h1 className="heading text-[#272727] text-[34px]">Your Body, Your Decision</h1>
                        <p className="text-[26px] text-[#272727] font-medium">
                        You have the right to decide what happens to your body. 
                        No one should touch you without your permission. It doesn't matter if the person is a friend, 
                        family member, or even an adult—your body is yours to control.
                        </p>
                    </div>
                    <div className="w-[60%] h-auto p-4 bg-[#272727] rounded-2xl mx-auto mt-4 mb-4">
                    <h1 className="heading text-[#e9eaec] text-[34px]">Trust Your Feelings</h1>
                        <p className="text-[26px] text-[#e9eaec] font-medium">
                        Always trust your feelings and instincts. If something doesn't feel right, it probably isn't. 
                        Your body has a way of telling you when something is uncomfortable or inappropriate. 
                        Listen to those signals and act accordingly.
                        </p>
                    </div>
                    <div className="w-[60%] h-auto p-4 bg-[#e9eaec] rounded-2xl mx-auto mt-4 mb-4">
                    <h1 className="heading text-[#272727] text-[34px]">Emotional Well-being</h1>
                        <p className="text-[26px] text-[#272727] font-medium">
                        Puberty can bring a rollercoaster of emotions! It's important to take care of your emotional well-being. 
                        Find healthy ways to manage stress, such as engaging in hobbies, practicing deep breathing or meditation, 
                        and spending time with supportive friends and family. Building self-esteem is key – focus on your strengths 
                        and achievements. Remember, it's okay to seek help if you're feeling overwhelmed or experiencing persistent 
                        emotional difficulties.
                        </p>
                    </div>
                    <div className="w-[60%] h-auto p-4 bg-[#272727] rounded-2xl mx-auto mt-4 mb-4">
                    <h1 className="heading text-[#e9eaec] text-[34px]">Boundaries Apply to Others Too</h1>
                        <p className="text-[26px] text-[#e9eaec] font-medium">
                        Just as you have boundaries, others have them too. Always ask for permission before touching someone else,
                        even if it seems harmless. Respect their personal space and listen to their answer.
                        </p>
                    </div>
                </div>
                <div className="bg-[#272727] w-screen h-auto text-center justify-center">
                    <div className="flex flex-row mt-[2rem] mb-[2rem]">
                        <Image src={image3}></Image>
                        <div className="bg-[#f6f6e9] w-auto h-fit text-center rounded-3xl mt-14 mr-8">
                            <h1 className="mainpageheadings text-[#42573d] text-[30px]">Note</h1>
                            <h1 className="mainpagep ga text-[#272727] text-[27px]">
                            Understanding consent and respecting personal boundaries is vital for your well-being and safety. 
                            By learning to set boundaries and respecting those of others, you are creating a world where 
                            everyone feels safe, valued, and in control of their bodies. Remember, you have the right to make 
                            decisions about your body, and your voice matters. Together, we can foster a culture of consent 
                            and respect. Stay empowered and always prioritize your personal space and well-being.
                            </h1>
                        </div>
                    </div>
                    </div>
        </div>
    </div>
    );
}