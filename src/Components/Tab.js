import React from 'react'

export default function TabComponent(props) {
  
  return (
    <div className="flex flex-wrap">
    <div className="w-full">
      <ul className="flex justify-center list-none flex-wrap flex-row lg:mt-7 mt-4 lg:mb-14 mb-8" role="tablist">
        {props.tabData.map((item, index)=> (
              <li key={index} className="mr-4 rounded-lg sm:mt-0 mt-4">
              <a className={"lg:text-lg text-sm font-medium px-5 py-1.5 inline-block border rounded-md " + (props.openTab === index ? "bg-primary border-primary text-white" : "text-[#484848] border-[#B9B9B9]")} 
                onClick={e => {e.preventDefault();props.setOpenTab(index);}}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {item}
              </a>
            </li>
        ))}
      </ul>
      <div>
        <div>
            {props.children}
        </div>
      </div>
    </div>
  </div>
  )
}
