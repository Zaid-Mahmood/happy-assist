import IndustriesCards from "./IndustriesCards/IndustriesCards"
const IndustriesText = () => {
  return (
    <div className='bg-tw-blue py-13 px-16'>
      <small className="text-primary font-body text-[13px] font-bold">Top Industries We Serve</small>
      <div className="flex justify-between gap-x-36">
        <h2 className="pt-3 pb-11 w-fit font-heading font-semibold text-tw-black text-3xl">Designed for Service Businesses That Can’t Afford to Miss Calls</h2>
        <p className="w-[90%] font-body text-base text-tw-lightgray">HappyAssist ensures every interaction is captured and handled professionally. It is perfect for businesses that want to scale without increasing operational workload. The AI agent that answers every call, qualifies customers, captures job details, and books appointments automatically, all tailored to your industry needs.</p>

      </div>
      <div>
        <IndustriesCards />
      </div>
    </div>
  )
}

export default IndustriesText
