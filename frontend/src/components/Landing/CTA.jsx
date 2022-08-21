import React from "react";
import CTA_IMAGE from "../../assets/images/landing/image_1.png";
function CTA() {
  return (
    <main className="mx-w-5xl mx-auto">
      <div className="py-4 md:py-24 flex flex-col md:flex-row justify-center items-center space-y-20 md:space-y-0 md:space-x-6 lg:space-x-12 text-center md:text-left">
        <div className="relative w-full md:w-5/12 flex flex-col justify-start items-start gap-2">
          <img src={CTA_IMAGE} />
        </div>
        <div className="w-full md:w-5/12 flex flex-col items-center">
          <h1 class="font-extrabold text-4xl md:text-5xl tracking-tight text-center mb-5">
            An <span className="text-yellow-400">intuitive, AI based </span> app
            designed for kids to combat{" "}
            <span className="text-yellow-400">childhood obesity</span>!
          </h1>
          <div class="inline-flex flex-col justify-between items-center my-5 gap-2">
            <a class="btn btn-primary btn-wide" href="/signup">
              Signup
            </a>
            <div class="text-sm opacity-80 text-center">
              <a className="btn btn-ghost" href="/login">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CTA;
