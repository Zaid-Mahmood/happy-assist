import IndustriesCards from "./IndustriesCards/IndustriesCards"
const IndustriesText = () => {
  return (
    <div className='bg-tw-blue md:py-13 md:px-16 px-5 py-8'>
      <small className="text-primary font-body text-[13px] font-bold">Top Industries We Serve</small>
      <div className="pb-8 md:pb-13 flex md:flex-row md:justify-between flex-col justify-center gap-x-36">
        <h2 className="md:text-left text-center pt-3 w-fit font-heading font-semibold text-tw-black text-xl md:text-3xl leading-[150%]">Designed for Service Businesses That Can’t Afford to Miss Calls</h2>
        <p className="md:text-left text-center w-full md:w-[90%] font-body text-base text-tw-lightgray ">HappyAssist ensures every interaction is captured and handled professionally. It is perfect for businesses that want to scale without increasing operational workload. The AI agent that answers every call, qualifies customers, captures job details, and books appointments automatically, all tailored to your industry needs.</p>
      </div>
      <div>
        <IndustriesCards />
      </div>
    </div>
  )
}

export default IndustriesText
