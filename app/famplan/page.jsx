"use client";
import React, { useEffect} from "react";
import { useRouter } from "next/navigation";
import Navfam from "../../components/navfam";
import Image from "next/image";
import image1 from "../../assets/fa.png";
import image2 from "../../assets/prego.png";
import image4 from "../../assets/bc.png";
import image5 from "../../assets/fin.png";
import image6 from "../../assets/iud.png";
import image7 from "../../assets/horm.png";
import image8 from "../../assets/bar.png";
import image9 from "../../assets/ster.png";
import image10 from "../../assets/nfp.png";
import image11 from "../../assets/ec.png";
import image12 from "../../assets/parent.png";
import image13 from "../../assets/adopt.png";
import image14 from "../../assets/abort.png";
import image15 from "../../assets/prenatal.png";
import image16 from "../../assets/childb.png";
import image17 from "../../assets/oe.png";
import image18 from "../../assets/cc.png";
import image19 from "../../assets/li.png";
import { useRef } from "react";
import Link from "next/link";

// intro,fert,fin,bc,p
export default async function Famplan() {
  const intro = useRef(null);
  const fert = useRef(null);
  const fin = useRef(null);
  const bc = useRef(null);
  const p = useRef(null);

  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("pocketbase_auth") == null)
      router.push(`/mainpage`);
  }, []);
  return (
    <>
      <div className="flex flex-col h-auto w-auto flex-wrap justify-center">
        <Navfam intro={intro} fert={fert} fin={fin} bc={bc} p={p}/>
        <div className="bg-[#570a34] h-auto w-screen text-center p-20 pb-5">
          <h1 className="infopagetitle text-[#f3c2d0]">FAMILY PLANNING</h1>
          <div className="flex flex-row mt-[3rem]">
            <div className="bg-[#b97a9feb] w-auto left-12 h-auto right-0 text-center rounded-3xl mr-[7rem] mb-10 p-20 relative" ref={intro}>
              <h1 className="mainpageheadings text-[#ffeaf0] text-[65px]">
                What is it?
              </h1>
              <h1 className="mainpagep ga text-[#ffeaf0] text-[35px]">
                The practice of controlling the number and spacing of children a
                couple has and the methods used to achieve this. It involves
                making decisions about when to have children, how many to have,
                and the spacing between them.
                <br />
                <br />
                The goal of family planning is to help individuals and couples
                to plan their families and achieve their desired family size,
                while promoting the health and well-being of both parents and
                children. It can also help to reduce the risks of unintended
                pregnancy and unsafe abortion, and can contribute to the overall
                development of individuals, families, and communities.
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-[#570a34] w-screen h-auto text-center">
          <h1 className=" text-[#f3c2d0] text-[40px] mb-10 ">
            Tap to learn more
          </h1>

          <div className="flex flex-row justify-center p-20 gap-14 mb-10">
            <Link href="famplan/fertilityops">
              <div className="cardui cardgender cardmbk1 fa bg-[#2a601d]">
                <Image src={image1} className="rounded-3xl"></Image>
              </div>
            </Link>

            <Link href="famplan/pregnancyops">
              <div className="cardui cardgender cardmbk1 preg bg-[#2a601d]">
                <Image src={image2} className="rounded-3xl"></Image>
              </div>
            </Link>

            <Link href="famplan/birthcontrol">
              <div className="cardui cardgender cardmbk1 bc bg-[#2a601d]">
                <Image src={image4} className="rounded-3xl"></Image>
              </div>
            </Link>

            <Link href="famplan/finances">
              <div className="cardui cardgender cardmbk1 fin bg-[#2a601d]">
                <Image src={image5} className="rounded-3xl"></Image>
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-[#692c19e8] text-center relative h-[140vh] fabg top-[50%]" ref={fert}>
          <h1 className="infopagetitle text-center text-[#f7d2c8] w-[auto] font-extrabold bg-[#BB7757]">
            Fertility Awareness
          </h1>
          <div className="bg-[#4b1e11]  w-[90%] h-[110vh] p-20 opacity-[100%] ml-auto text-center rounded-3xl mr-[7rem] mb-10">
            <h1 className="mainpagep ga text-[#fcfaf4] text-[35px] p-10 text-justify">
              Fertility awareness is a method of family planning that involves
              tracking changes in a woman's menstrual cycle to identify the most
              fertile days when she is most likely to conceive. <br></br>
              <br></br>
              <div className="pr-10 text-justify">
                Fertility awareness involves tracking various signs and symptoms
                of:
                <li className="pr-10">ovulation</li>
                <li className="pr-10">changes in basal body temperature</li>
                <li className="pr-10">cervical mucus</li>
                <li className="pr-10">position of the cervix</li>
              </div>
              <br></br>
              It is a non-hormonal and non-invasive method of birth control, and
              it can be used in combination with other methods, such as condoms
              or withdrawal. It is not as reliable as other forms of
              contraception, and it does not protect against sexually
              transmitted infections.
            </h1>
          </div>
        </div>

        <div className="bg-[#1a1a4d] h-[600vh] w-screen text-center" ref={fin}>
          <h1 className="infopagetitle text-[#d5b7e2]">Financial Impact</h1>
          <div className="flex flex-row mt-[3rem]">
            <div className="bg-[#373057]  w-[90%] text-justify h-[560vh] ml-auto p-20 rounded-3xl mr-[7rem] ">
              <h1 className="mainpagep ga text-[#fcfaf4] text-[35px]">
                Having a baby can have a significant financial impact on a
                family. Some basic costs to consider are those of:
                <li>pregnancy and childbirth</li>
                <li>raising a child</li>
                <li>childcare</li>
                <li>education</li>
                <li>healthcare</li>
                <li>housing</li>
                <li>transportation</li>
                <li>food</li>
                <li>clothing</li>
              </h1>

              <div className="flex flex-row mt-[3rem]">
                <div className="bg-[#1a1a4d] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#fcfaf4] ml-12 mb-10 text-center text-[65px]">
                    Prenatal care
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-20 text-[#fcfaf4] mt-[20%] text-justify text-[35px]">
                    <Image src={image15} className="rounded-3xl mr-10"></Image>
                    Regular prenatal check-ups and tests can add up quickly,
                    especially if you do not have health insurance.
                  </h1>
                </div>
              </div>

              <div className="flex flex-row mt-[3rem]">
                <div className="bg-[#1a1a4d] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#fcfaf4] ml-12 mb-10 text-center text-[65px]">
                    Child Birth
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-10 text-[#fcfaf4] text-justify text-[35px]">
                    <Image src={image16} className="rounded-3xl mr-10"></Image>
                    The cost of childbirth can vary widely depending on the
                    location and type of birth. If you need a c-section or have
                    other complications, the costs can increase significantly.
                  </h1>
                </div>
              </div>

              <div className="flex flex-row mt-[3rem]">
                <div className="bg-[#1a1a4d] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#fcfaf4] ml-12 mb-10 text-center text-[65px]">
                    Ongoing Expenses
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-10 text-[#fcfaf4] text-justify text-[35px]">
                    <Image src={image17} className="rounded-3xl mr-10"></Image>
                    Once the baby is born, there are ongoing expenses such as
                    food, clothing, diapers, and healthcare. These costs can add
                    up quickly, and it's important to budget accordingly.
                  </h1>
                </div>
              </div>

              <div className="flex flex-row mt-[3rem]">
                <div className="bg-[#1a1a4d] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#fcfaf4] ml-12 mb-10 text-center text-[65px]">
                    Child Care
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-10 text-[#fcfaf4] text-justify text-[35px]">
                    <Image src={image18} className="rounded-3xl mr-10"></Image>
                    If you plan to go back to work after having a baby, you may
                    need to pay for child care. Child care costs can be
                    significant, and it's important to research your options and
                    budget accordingly.
                  </h1>
                </div>
              </div>

              <div className="flex flex-row mt-[3rem]">
                <div className="bg-[#1a1a4d] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#fcfaf4] ml-12 mb-10 text-center text-[65px]">
                    Lost Income
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-10 text-[#fcfaf4] text-justify text-[35px]">
                    <Image src={image19} className="rounded-3xl mr-10"></Image>
                    If one parent plans to stay home to care for the child,
                    there may be a loss of income. It's important to consider
                    how this loss of income will impact your finances.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#77558ae8] h-[650vh] w-screen text-center" ref={bc}>
          <h1 className="infopagetitle text-[#421455]">Birth Control</h1>
          <div className="flex flex-row mt-[3rem]">
            <div className="bg-[#2f1c4dfd] p-20 w-[90%] h-[620vh] t-0 ml-auto text-center rounded-3xl mr-[7rem] mb-10 ">
              <h1 className="mainpageheadings text-[#fcfaf4] text-[65px]">
                What is it?
              </h1>
              <h1 className="mainpagep ga text-[#fcfaf4] text-[35px]">
                Birth control refers to methods or techniques used to prevent
                pregnancy. There are several types of birth control methods:
                <br></br>
                <br></br>
              </h1>

              <div className="flex flex-row mt-[3rem]">
                <div className="bg-[#906ca5e8] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#fcfaf4] ml-12 mb-10 text-center text-[65px]">
                    Hormonal Methods
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-10 text-[#fcfaf4] text-justify text-[35px]">
                    <Image
                      src={image7}
                      className="rounded-3xl mt-[-2vh] mr-10"
                    ></Image>
                    Includes the birth control pill, patch, injection, and
                    vaginal ring. They work by preventing ovulation, thickening
                    cervical mucus to prevent sperm from entering the uterus,
                    and thinning the uterine lining to make it less hospitable
                    to fertilized eggs. Hormonal methods are usually reversible.
                  </h1>
                </div>
              </div>

              <div className="flex flex-row mt-[3rem]">
                <div className="bg-[#906ca5e8] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#fcfaf4] ml-12 mb-10 text-center text-[65px]">
                    Barrier Methods
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-10 text-[#fcfaf4] text-justify text-[35px]">
                    <Image
                      src={image8}
                      className="rounded-3xl mt-[-2vh] mr-10"
                    ></Image>
                    These include condoms, diaphragms, and cervical caps. They
                    work by physically blocking sperm from entering the uterus.
                    Barrier methods are generally reversible.
                  </h1>
                </div>
              </div>

              <div className="flex flex-row mt-[3rem]">
                <div className="bg-[#906ca5e8] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#fcfaf4] ml-12 mb-10 text-center text-[65px]">
                    Intra Uterine Devices
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-10 text-[#fcfaf4] text-justify text-[35px]">
                    <Image
                      src={image6}
                      className="rounded-3xl mt-[-2vh] mr-10"
                    ></Image>
                    Small, T-shaped devices that are inserted into the uterus by
                    a healthcare provider. They work by preventing fertilization
                    or implantation of a fertilized egg. IUDs can be either
                    hormonal or non-hormonal and can be either reversible or
                    permanent.
                  </h1>
                </div>
              </div>

              <div className="flex flex-row mt-[3rem]">
                <div className="bg-[#906ca5e8] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#fcfaf4] ml-12 mb-10 text-center text-[65px]">
                    Sterilization
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-10 text-[#fcfaf4] text-justify text-[35px]">
                    <Image
                      src={image9}
                      className="rounded-3xl mt-[-2vh] mr-10"
                    ></Image>
                    Includes surgical methods like tubal ligation for women and
                    vasectomy for men. These are permanent methods of birth
                    control and are intended to be irreversible.{" "}
                  </h1>
                </div>
              </div>

              <div className="flex flex-row mt-[3rem]">
                <div className="bg-[#906ca5e8] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#fcfaf4] ml-12 mb-10 text-center text-[65px]">
                    Natural Family Planning
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-10 text-[#fcfaf4] text-justify text-[35px]">
                    <Image
                      src={image10}
                      className="rounded-3xl mt-[-2vh] mr-10"
                    ></Image>
                    Involves tracking your menstrual cycle and identifying the
                    days when you are most likely to conceive. This can be done
                    through various methods, such as tracking basal body
                    temperature, cervical mucus, or using ovulation prediction
                    kits. Natural family planning methods can be either
                    reversible or permanent.{" "}
                  </h1>
                </div>
              </div>

              <div className="flex flex-row mt-[3rem]">
                <div className="bg-[#906ca5e8] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#fcfaf4] ml-12 mb-10 text-center text-[65px]">
                    Emergency Contraception
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-10 text-[#fcfaf4] text-justify text-[35px]">
                    <Image
                      src={image11}
                      className="rounded-3xl mt-[-2vh] mr-10"
                    ></Image>
                    Emergency contraceptive pills prevent pregnancy by
                    preventing or delaying ovulation and they do not induce an
                    abortion. The copper-bearing IUD prevents fertilization by
                    causing a chemical change in sperm and egg before they meet.{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#53143e] h-[390vh] w-screen pobg text-center" ref={p}>
          <h1 className="infopagetitle p-10 bg-[#53143e] text-[#d9bce6]">
            Pregnancy Options
          </h1>
          <div className="flex flex-row mt-[3rem]">
            <div className="bg-[#d178a5]  p-[10vh] w-[90%] h-[350vh] ml-auto text-center rounded-3xl mr-[7rem] mb-10">
              <h1 className="mainpagep  text-[#fcfaf4] text-[45px]">
                When facing an unplanned pregnancy, there are several pregnancy
                options available to women. It's important to note that every
                woman's situation is unique, and what works best for one woman
                may not work for another. Some common pregnancy options include:
              </h1>

              <div className="flex flex-row mt-[3rem]">
                <div className="bg-[#53143e] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#fcfaf4] ml-12 mb-10 text-center text-[65px]">
                    Parenting
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-10 text-[#fcfaf4] text-justify text-[35px]">
                    <Image
                      src={image12}
                      className="rounded-3xl mt-[-2vh] mr-10"
                    ></Image>
                    To carry the pregnancy to term and raising the child as a
                    parent. While parenting can be a rewarding experience, it
                    can also be challenging and requires a significant amount of
                    time, energy, and resources.
                  </h1>
                </div>
              </div>

              <div className="flex flex-row mt-[3rem]">
                <div className="bg-[#53143e] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#fcfaf4] ml-12 mb-10 text-center text-[65px]">
                    Adoption
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-10 text-[#fcfaf4] text-justify text-[35px]">
                    <Image
                      src={image13}
                      className="rounded-3xl h-[50vh] mt-[5vh] mr-10"
                    ></Image>
                    This option involves carrying the pregnancy to term and
                    placing the child for adoption. There are several types of
                    adoptions like open adoption (where the birth parents
                    maintain contact with the adoptive family) & closed adoption
                    (where the birth parents have no contact with the adoptive
                    family). Adoption can be a good option for women who are not
                    ready or able to parent a child.
                  </h1>
                </div>
              </div>

              <div className="flex flex-row mt-[3rem]">
                <div className="bg-[#53143e] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#fcfaf4] ml-12 mb-10 text-center text-[65px]">
                    Abortion
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-10 text-[#fcfaf4] text-justify text-[35px]">
                    <Image src={image14} className="rounded-3xl mr-10"></Image>
                    This option involves ending the pregnancy through medical or
                    surgical means. Abortion is a safe and legal option in many
                    countries, and it can be a good option for women who are not
                    ready or able to parent a child. It's important to note that
                    access to abortion can vary widely depending on where you
                    live.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
