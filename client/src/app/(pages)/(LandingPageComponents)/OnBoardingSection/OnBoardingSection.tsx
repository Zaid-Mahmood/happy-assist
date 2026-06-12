import Image from "next/image";
import img1 from "@/assets/onboarding/img-1.png";
import img2 from "@/assets/onboarding/img-2.png";
import img3 from "@/assets/onboarding/main-img.png";

const OnBoardingSection = () => {
  const boardingSteps = [
    {
      name: "Step 1",
      img: img1,
      title: "AI Setup and Business Data Training",
    },
    {
      name: "Step 2",
      img: img2,
      title: "Call Control with Your Existing Number",
    },
    {
      name: "Step 3",
      img: img1,
      title: "Call Forwarding Activation and Live AI Handling",
    },
  ];

  return (
    <section className="w-full px-5 pt-8 md:px-16">
      <div className="relative overflow-hidden rounded-[30px] bg-white">
        <div className="relative z-20 rounded-[30px] bg-tw-bannerBlack px-5 pt-8 pb-20 text-center md:pt-13 md:pb-24">
          <small className="font-body text-[13px] font-bold text-white">
            Onboarding
          </small>

          <h2 className="mx-auto max-w-2xl pt-3 font-heading text-xl font-semibold leading-[150%] text-white md:text-3xl">
            A Simple 5-minute Easy Head Start
          </h2>
        </div>

        <div className="-mt-14 bg-white px-4 md:-mt-28 md:px-8">
          <div className="flex justify-center gap-x-3 md:gap-x-6 pb-13 md:pb-[103px]">
            {boardingSteps.map((item, index) => {
              if (index !== 1) {
                return (
                  <div
                    key={index}
                    className="w-full md:w-fit relative overflow-hidden rounded-xl md:rounded-[30px] border border-[#E5E5E5] bg-white pt-5 text-center md:mt-8 z-50"
                  >
                    <p className="font-body text-xs text-[#8C8C8C]">
                      {item.name}
                    </p>
                    <h3 className="mx-auto mt-3 max-w-[240px] font-body font-bold leading-[150%] text-[#262626] px-2 sm:px-0 text-xs md:text-base">
                      {item.title}
                    </h3>

                    <div className="mt-8 flex justify-center">
                      <Image
                        src={item.img}
                        alt={item.title}
                        className="absolute bottom-0 md:static h-auto w-full"
                      />
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className="w-full md:w-fit relative overflow-hidden rounded-xl md:rounded-[30px] border border-[#E5E5E5] bg-white pb-5 text-center md:mt-8 z-50"
                >
                  <div className="flex justify-center">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="h-auto w-full"
                    />
                  </div>
                  <div className="mt-8">
                    <p className="font-body text-xs text-[#8C8C8C]">
                      {item.name}
                    </p>
                    <h3 className="mt-3 mx-auto max-w-[240px] font-body font-bold leading-[150%] text-[#262626] px-2 sm:px-0 text-xs  md:text-base">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mx-auto w-fit overflow-hidden h-[200px] md:h-[500px]">
            <Image src={img3} alt="main-img" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnBoardingSection;

