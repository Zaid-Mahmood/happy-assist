
const AvailabilitySection = () => {
      const availabilityStats = [
    { value: "24/7", label: "Responsive around the clock" },
    { value: "840+", label: "Calls answered and businesses protected" },
    { value: "5 min", label: "Live in a couple of minutes" },
    { value: "100%", label: "Completely automated handling" },
  ];
  return (
    <section className="w-full py-8 px-4 sm:px-6 md:px-10 lg:px-16 lg:py-13">
      <div className="grid grid-cols-2 gap-4 lg:flex lg:justify-between">
        {availabilityStats.map((item, index) => {
          return (
            <div className='flex flex-col items-center' key={index} >
              <h3 className="font-heading text-xl md:text-5xl font-semibold leading-none text-tw-black">{item.value}</h3>
              <p className="font-body mt-3 text-[8px] md:text-base text-tw-lightgray w-[200px] text-center">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default AvailabilitySection
