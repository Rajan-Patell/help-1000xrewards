export const HeroSection = () => {
  return (
    <header className="z-0 flex w-full flex-col items-stretch justify-center pt-[260px] pb-20 px-60 max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <h1 className="flex w-full flex-col items-stretch text-[80px] font-bold whitespace-nowrap tracking-[-1.6px] justify-center max-md:max-w-full max-md:text-[40px]">
        <div className="bg-clip-text text-transparent bg-[linear-gradient(90deg,var(--1000x-On-Surface,#271813)_22.05%,var(--1000x-Primary,#AA3700)_76.53%)] max-md:text-[40px]">
          Help
        </div>
      </h1>
      <p className="text-[#5B4138] text-base font-normal leading-6 tracking-[0.5px] mt-8 max-md:max-w-full">
        Need help or have questions? Our dedicated support team is available to
        assist you. Get in touch with us using any of the contact options below,
        and we'll respond promptly to address your concerns.
      </p>
    </header>
  );
};
