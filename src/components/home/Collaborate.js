import React from "react";

function Collaborate() {
  const handleEmail = () => {
    window.open("mailto:hello@gmail.com?subject=&body=");
  };
  return (
    <>
      <div className="grid md:grid-cols-2 text-[#bebebe] mt-8 py-12 md:py-24 space-y-4">
        <div>
          <h2 className="text-[18px] font-neuton">LET'S COLLABORATE</h2>
        </div>
        <div>
          <p className="text-[33px] md:text-[40px] lg:text-[50px] font-neuton leading-none md:max-w-[485px]">
            &nbsp;&nbsp;&nbsp;&nbsp;Ascot biodiesel ethical, kogi fit tumblr
            literally single-origin coffee letterpress.
          </p>
          <div className="pt-12 md:pt-20 font-neuton space-y-4 md:space-y-8">
            <div>
              <h5 className="text-[16px]">STUDIO</h5>
              <a
                href="https://www.shiftwalk.studio"
                target="_blanck"
                className="text-[28px] md:text-[36px] hover:line-through decoration-1"
              >
                shiftwalk.studio
              </a>
            </div>
            <div>
              <h5 className="text-[16px]">EMAIL</h5>
              <h2
                onClick={handleEmail}
                className="text-[28px] md:text-[36px] hover:line-through decoration-1"
              >
                hello@gmail.com
              </h2>
            </div>

            <div>
              <h5 className="text-[16px]">TYPE SET WITH</h5>
              <h2 className="text-[28px] md:text-[36px] ">
                <a
                  href="https://pangrampangram.com/products/migra"
                  target="_blank"
                  className="hover:line-through decoration-1"
                  rel="noreferrer"
                >
                  Migra
                </a>{" "}
                &{" "}
                <a
                  href="https://pangrampangram.com/products/neue-world"
                  target="_blank"
                  className="hover:line-through decoration-1"
                  rel="noreferrer"
                >
                  Neue World
                </a>
              </h2>
            </div>
            <div>
              <h5 className="text-[16px]">ITE DESIGNED BY</h5>
              <a
                href="https://www.ijpowell.co.uk/"
                target="_blank"
                className="text-[28px] md:text-[36px] hover:line-through decoration-1"
                rel="noreferrer"
              >
                Isaac Powell
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collaborate;
