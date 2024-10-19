import React, { useState } from 'react';
import { ddbLinks } from "../permanent";


const Buttondr = ({label}) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev); // Toggle the dropdown state
      };
  return (
    <div>
        <div class="relative inline-block text-left ">
            <button type="button" class="max-lg:hidden inline-flex w-full justify-center gap-1.5 rounded-3xl bg-mint-300 px-4 py-2 text-sm font-semibold text-white-smoke shadow-sm hover:bg-mint-400 transition-colors" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={toggleDropdown}>
                {label}
                <svg class="-mr-1 h-5 w-5 text-white-smoke" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
            </button>

            {isOpen && (
            <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-6">Silas Ejimonye</a>
                </div>
                <ul class="py-1" role="none">
                    {ddbLinks.map ((item) => (
                        <li key={item.label}>
                            <a href={item.href} 
                            id={item.id} 
                            className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>         
            </div>
            )}
        </div>

    </div>
  )
}

export default Buttondr

 {/* <!--
Dropdown menu, show/hide based on menu state.

Entering: "transition ease-out duration-100"
    From: "transform opacity-0 scale-95"
    To: "transform opacity-100 scale-100"
Leaving: "transition ease-in duration-75"
    From: "transform opacity-100 scale-100"
    To: "transform opacity-0 scale-95"
--> */}