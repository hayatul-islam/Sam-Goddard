import React from "react";
// fake data
const data = [
  {
    id: 1,
    name: "Cssda",
    title: "Developer Of The Year (Special Kudos)",
    items: "",
    years: 2021,
  },
  {
    id: 2,
    name: "Cssda",
    title: "Site Of The Day",
    items: 3,
    years: 2021,
  },
  {
    id: 3,
    name: "Cssda",
    title: "Public UI Award",
    items: 4,
    years: "2019 — 21",
  },
  {
    id: 4,
    name: "Cssda",
    title: "Public Innovation Award",
    items: 4,
    years: "2019 — 21",
  },
  {
    id: 5,
    name: "Cssda",
    title: " Public UX Award",
    items: 4,
    years: "2019 — 21",
  },
  {
    id: 6,
    name: "Awwwards",
    title: "Site Of The Day",
    items: "",
    years: "2021",
  },
  {
    id: 7,
    name: "Awwwards",
    title: "Ecommerce Of The Year (Nominee)",
    items: "",
    years: "2021",
  },
  {
    id: 8,
    name: "Awwwards",
    title: "Developer Award",
    items: 2,
    years: "2021",
  },
  {
    id: 9,
    name: "Awwwards",
    title: "Honors",
    items: 2,
    years: "2020 — 21",
  },
  {
    id: 10,
    name: "Awwwards",
    title: "Mobile Excellence",
    items: 2,
    years: "2020 — 21",
  },
  {
    id: 11,
    name: "Awwwards",
    title: "Mobile Of The Week",
    items: "",
    years: "2020 — 21",
  },
];

function FeaturesAwards() {
  return (
    <>
      <div className="py-20">
        <div className="border-b border-[#262525]">
          <h4 className="text-[#262525] text-[16px] font-neuton mb-2 ">
            FEATURES & AWARDS
          </h4>
        </div>
        <div>
          {data?.map((feature) => (
            <div
              key={feature?.id}
              className="grid grid-cols-[20%_40%_20%_20%] border-b border-[#262525] items-center py-2"
            >
              <h4 className="text-[#262525] text-[30px] font-neue opacity-80 ">
                {feature?.name}
              </h4>
              <p className="text-[#262525] text-[24px] font-neuton opacity-70">
                {feature?.title}
              </p>
              <p>
                {feature?.items !== "" && (
                  <p className="text-[#262525] text-[24px] font-neuton opacity-70">
                    ({feature?.items}times)
                  </p>
                )}
              </p>
              <p className="text-[#262525] text-[24px] font-neuton opacity-70 text-end">
                {feature?.years}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeaturesAwards;
