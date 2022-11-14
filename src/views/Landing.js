import React from "react";

import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";
import GrowthImage from '../assets/img/growth-framework.png'
import GrowthAcedemy from '../assets/img/growth-academy.png'
import GrowthClub from '../assets/img/growth-club.png'
import Karen from '../assets/img/karen.png'
import Carousel from "components/SingleCarousel/Carousel";
import MultiCarousel from "components/MultiCarousel/MultiCarousel";
import '../components/styles.css'

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      {/* Start of section 1  */}
      {/* Slider images not available */}
      <Carousel />
      {/* End of section 1  */}

      <main>
        {/* Start of section 2  */}
        <section className="section-2 pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className=" text-gray-900"
                points="0 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">

            <div className="flex flex-wrap items-center ">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">


                <h1 className="font-large font-light leading-relaxed mt-4 mb-4 bg-white w-full mb-6 px-12 py-16 mt-32 bg-white-600">
                  For those who know they can be more <span className="underline-yellow">successful,</span>the time is now.
                </h1>

              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto ">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  mt-32 bg-white-600 px-12">
                  <p className="text-lg font-dark leading-relaxed mt-4 mb-4 text-gray-700  font-semibold">
                    The Growth Academy gives business leaders the tools to implement a blueprint for attaining growth. Using a unique and proven methodology, we enable you to create a healthier and efficient team that will transform sales and break through barriers to let your business thrive.


                  </p>
                  <div class="decorative-space">
                    <button class="purple-button">
                      <span class="purple-button__text">WHAT WE OFFER</span>
                    </button>
                  </div>
                </div>

              </div>


            </div>
          </div>

        </section>
        {/* End of section 2 */}

        {/* Start of section 3 */}
        <section className="pb-20 relative block bg-gray-900 color-theme-purple">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden "
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current color-theme-purple"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-12">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-8/12 px-4">
                <h2 className="font-xxxl text-4xl font-semibold text-white">
                  It’s time to make your business <span className="underline-green"> awesome.</span>
                </h2>
                <p className="font-xl text-lg leading-relaxed mt-4 mb-4 text-gray-500 my-6">
                  We are the only company in the UK to offer this completely unique system of business assessment and transformation.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-left">

                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg">
                  <div className="px-12 py-5 flex-auto justify-left">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="0 75 583 95 0 583"
                        className="text-white fill-current"
                      ></polygon>
                    </svg>
                    <div className="text-white">
                      <img
                        alt="..."
                        src={GrowthImage}
                        className="max-w-full mx-auto"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                    {/* <h6 className="text-xl font-semibold">Awarded Agency</h6> */}
                    <p className="mt-6 mb-0 text-gray-600 font-bold">
                      The Business Growth Framework is our full consultancy approach programme.
                    </p>
                    <h3 className="text-left py-4 font-semibold">Perfect for your business if you:</h3>
                    <ul className="list-disc">
                      <li>SME </li>
                      <li>Turnover in excess of £5 million </li>
                      <li>Sales team of 10+ people </li>
                      <li>Ambitious growth plans </li>
                      <li>Available budget to invest </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-left">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg ">
                  <div className="px-12 py-5 flex-auto justify-left">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="0 75 583 95 0 583"
                        className="text-white fill-current"
                      ></polygon>
                    </svg>
                    <div className="text-white">
                      <img
                        alt="..."
                        src={GrowthAcedemy}
                        className="max-w-full mx-auto"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                    {/* <h6 className="text-xl font-semibold">Awarded Agency</h6> */}
                    <p className="mt-6 mb-0 text-gray-600 font-bold">
                      The Business Growth Framework is our full consultancy approach programme.
                    </p>
                    <h3 className="text-left py-4 font-semibold">Perfect for your business if you:</h3>
                    <ul className="list-disc">
                      <li>SME </li>
                      <li>Turnover in excess of £5 million </li>
                      <li>Sales team of 10+ people </li>
                      <li>Ambitious growth plans </li>
                      <li>Available budget to invest </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-left">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg ">
                  <div className="px-12 py-5 flex-auto justify-left">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="0 75 583 95 0 583"
                        className="text-white fill-current"
                      ></polygon>
                    </svg>
                    <div className="text-white">
                      <img
                        alt="..."
                        src={GrowthClub}
                        className="max-w-full mx-auto"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                    {/* <h6 className="text-xl font-semibold">Awarded Agency</h6> */}
                    <p className="mt-6 mb-0 text-gray-600 font-bold">
                      The Business Growth Framework is our full consultancy approach programme.
                    </p>
                    <h3 className="text-left py-4 font-semibold">Perfect for your business if you:</h3>
                    <ul className="list-disc">
                      <li>SME </li>
                      <li>Turnover in excess of £5 million </li>
                      <li>Sales team of 10+ people </li>
                      <li>Ambitious growth plans </li>
                      <li>Available budget to invest </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>





          </div>

        </section>
        {/* End of section 3 */}

        {/* Start of section 4  */}
        <section className="section-2 pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "80px", margin: "-1rem" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className=" text-gray-900 fill-current color-theme-purple"
                points="2560 0 2560 100 0 0"
              ></polygon>
            </svg>
          </div>

          <div className="mx-auto px-4">

            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <img
                  alt="..."
                  src={Karen}
                  className="max-w-full mx-auto"
                  style={{ maxWidth: "100%" }}
                />


              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto ">
                <div className="relative flex flex-col min-w-0 break-words  w-full mt-24 px-12" style={{ backgroundColor: "#0CCE6B" }}>
                  <h1 className="font-large font-light leading-relaxed mt-4 mb-4  w-full mb-6 bg-white-600" style={{ color: "white" }}>
                    <span className="underline-yellow">Passionate</span>about success & growth.
                  </h1>
                  <p className="text-md font-light mt-2 text-white">
                    Our expertise is delivered by people who are passionate about success and growth. We’ve been there. We know about success and failure, but now we use that knowledge to your advantage.
                  </p>
                  <div class="decorative-space">
                    <button class="white-button purple-button ">
                      <span class="white-button__text purple-button__text ">ABOUT US</span>
                    </button>
                  </div>
                </div>

              </div>


            </div>
          </div>

        </section>
        {/* End of section 4 */}

        {/* Start of section 5 */}


        {/* End of section 5 */}

        {/* Start of section 6  */}
        <section className="section-5 pb-20 relative block bg-gray-900 ">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden "
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current color-theme-purple"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4" style={{ background: "#f2dc5d", padding: "3rem" }}>

                <p className="font-xl text-lg leading-relaxed mt-4 mb-4 text-gray-500 my-6 px-6" style={{ color: "#390049" }}>
                  There’s never been a better time to start.
                </p>
                <h1 className="font-large font-light leading-relaxed mt-4 mb-4  w-full mb-6 bg-white-600" style={{ color: "#390049" }}>
                  The time is <span className="underline-green">now</span>
                </h1>
                <div class="decorative-space">
                  <button class="purple-button">
                    <span class="purple-button__text">TALK TO US</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </section>
        {/* End of section 6 */}
{/* Get images logos from api */}
        <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
          <MultiCarousel />
        </div>
      </main>
      <Footer />
    </>
  );
}
