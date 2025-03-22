import { Link } from "react-router-dom";

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="w-48">
    <div className="text-[#271813] text-[22px] font-bold leading-none tracking-[0px]">
      {title}
    </div>
    {links.map((link, index) => (
      <div
        key={index}
        className="mt-2 text-sm text-[#5B4138] font-medium tracking-[0.1px] leading-none"
      >
        <Link to="#" className="hover:text-[#AA3700]">
          {link}
        </Link>
      </div>
    ))}
  </div>
);

export const Footer = () => {
  return (
    <footer className="bg-[#FFE2D9] flex min-h-[381px] w-full items-stretch gap-[40px_48px] flex-wrap p-16 max-md:max-w-full max-md:px-5">
      <div className="flex min-w-60 flex-col justify-between flex-1 shrink basis-[0%] max-md:max-w-full">
        <Link
          to="/"
          className="flex min-h-[69px] items-center gap-[9px] text-[52px] text-[#AA3700] font-bold whitespace-nowrap tracking-[-2.07px] leading-none max-md:max-w-full max-md:text-[40px]"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/94886cb363af6ce8004717e41d413c478895cb98?placeholderIfAbsent=true"
            alt="1000XRewards Logo"
            className="aspect-[1] object-contain w-[69px] self-stretch shrink-0 my-auto"
          />
          <div className="self-stretch my-auto max-md:text-[40px]">
            1000XRewards
          </div>
        </Link>

        <div className="flex gap-3 mt-[140px] max-md:mt-10">
          <a href="#" aria-label="Social Media Link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/765eba5b97ad23313de388adc14437c234e56070?placeholderIfAbsent=true"
              alt="Social Icon 1"
              className="aspect-[1] object-contain w-11 shrink-0"
            />
          </a>
          <a href="#" aria-label="Social Media Link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/789a7c8ffd9c6918dd8f43e9b0b5032a3081f860?placeholderIfAbsent=true"
              alt="Social Icon 2"
              className="aspect-[1.02] object-contain w-[45px] shrink-0"
            />
          </a>
        </div>
      </div>

      <div className="flex min-w-60 items-stretch gap-6 text-sm text-[#5B4138] font-medium tracking-[0.1px] leading-none flex-wrap h-full max-md:max-w-full">
        <FooterColumn title="Company" links={["About Us", "Careers"]} />
        <FooterColumn title="Support" links={["Help Center", "Contact Us"]} />
        <FooterColumn
          title="Legal"
          links={[
            "Terms of Condition",
            "Privacy Policy",
            "Security",
            "Guidelines",
            "Community guidelines",
          ]}
        />
      </div>
    </footer>
  );
};
