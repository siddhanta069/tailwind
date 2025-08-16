import React from 'react'

const Navbar = () => {
  const links = [
    {
      href: "/Founders",
      title: "Founders"
    },
    {
      href: "/guide",
      title: "Guide"
    },
    {
      href: "/pricing",
      title: "Pricing"
    },
    {
      href: "/login",
      title: "Login"
    }
  ];
  return (
    <div className = "flex items-center justify-between px-4 py-4 mx-auto max-w-4xl">
      <img src="/logo-finta.svg" className="h-18 w-18" />
      <div className = "flex items-center gap-6">
        {links.map((link, index) => (
          <a 
            href = {link.href} key={index} className="text-neutral-800 font-medium hover:text-neutral-600 transition duration-200 cursor-pointer">
            {link.title}
          </a>
        ))} 
        <button className= "bg-[#2579f4] px-4 py-2 rounded-lg text-white font-medium shadow-lg text-shadow-md tracking-wide">Start free trial</button>
      </div>

    </div>
  )
}

export default Navbar
