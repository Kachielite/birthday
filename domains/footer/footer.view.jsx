import Link from "next/link";

const NAV_ITEMS = [
    { label: 'About Dubem', path: '#about' },
    { label: 'Timeline', path: '#timeline' },
    { label: 'RSVP', path: '#rsvp' },
    { label: 'Venue', path: '#venue' },
]

const FooterView = () => {
  return (
      <footer className="w-full px-6 lg:px-20 py-16 text-[#FFFDF2] bg-[#646C64]/[0.9] flex flex-col justify-center items-center space-y-7">
          <div
              className="flex flex-row items-center justify-center space-x-10 w-full">
              {NAV_ITEMS.map((item, index) => <Link className="flex-shrink-0 text-[14px] lg:text-[16px]" key={index}
                                                    href={item.path}>{item.label}</Link>)}
          </div>
          <p className="text-[16px]">Looking forward to celebrating with you!</p>
      </footer>
  );
}

export default FooterView