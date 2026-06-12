import Link from "next/link";
const StillQuestions = () => {
  return (
    <div className="bg-tw-blue rounded-xl p-6 min-h-[356px] flex flex-col justify-between">
      <div className="md:text-left text-center">
        <h2 className="text-3xl font-heading font-semibold">
          Still Need Help?
        </h2>
        <p className="text-tw-lightgray py-2 text-xs">
          Our team is available 24/7 to help you with any information that you
          require to get started smoothly or to resolve your ongoing challenges
          with the tool.{" "}
        </p>
      </div>
      <Link href="#">
        <button className="md:w-auto w-full cursor-pointer rounded-full bg-secondary hover:bg-[#047777] px-8 py-3 font-semibold text-white">
        Connect with Agent
        </button>
      </Link>
    </div>
  );
};

export default StillQuestions;

