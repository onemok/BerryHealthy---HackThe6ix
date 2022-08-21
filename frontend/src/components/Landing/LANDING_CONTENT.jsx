import React from "react";

import image_2 from "../../assets/images/landing/image_2.png";
import image_3 from "../../assets/images/landing/image_3.png";
import image_4 from "../../assets/images/landing/image_4.png";

function LANDING_CONTENT() {
  return (
    <section className="mx-w-5xl mx-auto">
      {/* Banner 1 */}
      <div className="py-4 md:py-24 flex flex-col md:flex-row justify-center items-center space-y-20 md:space-y-0 md:space-x-6 lg:space-x-12 text-center md:text-left">
        <div className="w-full md:w-5/12 flex flex-col items-center">
          <h1 class="font-semibold text-md md:text-5xl tracking-tight text-center mb-5">
            Simplified <span className="text-yellow-400">health score</span>,
            based on extracted calories, exercise, weight and height!
          </h1>
        </div>
        <div className="relative w-full md:w-5/12 flex flex-col justify-start items-start gap-2">
          <img src={image_2} />
        </div>
      </div>
      {/* Banner 2 */}

      <div className="py-4 md:py-24 flex flex-col md:flex-row justify-center items-center space-y-20 md:space-y-0 md:space-x-6 lg:space-x-12 text-center md:text-left">
        <div className="relative w-full md:w-5/12 flex flex-col justify-start items-start gap-2">
          <img src={image_3} />
        </div>
        <div className="w-full md:w-5/12 flex flex-col items-center">
          <h1 class="font-semibold  text-md md:text-5xl tracking-tight text-center mb-5">
            <span className="text-yellow-400">Gamified</span> platform to
            encourage consistent habits, including{" "}
            <span className="text-yellow-400">leaderboards</span> and{" "}
            <span className="text-yellow-400">fun characters</span>!
          </h1>
        </div>
      </div>
      {/* Banner 3 */}
      <div className="py-4 md:py-24 flex flex-col md:flex-row justify-center items-center space-y-20 md:space-y-0 md:space-x-6 lg:space-x-12 text-center md:text-left">
        <div className="w-full md:w-5/12 flex flex-col items-center">
          <h1 class="font-semibold text-md md:text-5xl tracking-tight text-center mb-5">
            Instant <span className="text-yellow-400">connection</span> to{" "}
            <span className="text-yellow-400">parents’ </span>phones!
          </h1>
        </div>
        <div className="relative w-full md:w-5/12 flex flex-col justify-start items-start gap-2">
          <img src={image_4} />
        </div>
      </div>
    </section>
  );
}

export default LANDING_CONTENT;
