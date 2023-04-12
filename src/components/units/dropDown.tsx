import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface IOption {
    label: string;
    value: string;
}

interface IProps {
    color?: string;
    fullWidth?: boolean;
    options: IOption[];
    onTop?: boolean;
}

const DropDown = ({ options, fullWidth = false, color ,onTop}: IProps) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(false)


    return (
        <div className="mt-2 relative">
            <button onClick={() => setShowDropdown(!showDropdown)}
                data-dropdown-toggle="dropdown" className={`focus:outline-none focus:ring-inset space-x-3 font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center justify-between ring-1 ${fullWidth && "w-full"} ring-gray-300`} type='button'
                style={color ? { color: color } : {}}
            >
                <span>
                    {selectedOption.label}
                </span>
                {showDropdown ? <FaChevronUp className="text-gray-600"
                    style={color ? { color: color } : {}}

                /> : <FaChevronDown className="text-gray-600"
                    style={color ? { color: color } : {}}

                />}
            </button>

            {showDropdown && <div id="dropdown" className={`z-20 bg-blackish absolute right-0  text-black divide-y divide-gray-100 rounded-md shadow min-w-[3.5rem] ${onTop && "bottom-10"}`}
            >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {
                        options.map((option, i) => (
                            <li key={i}>
                                <div role="button" onClick={() => {
                                    setSelectedOption(option)
                                    setShowDropdown(false)
                                }}
                                    className="block px-4 py-2 hover:bg-gray-800 hover:text-white">{option.label}</div>
                            </li>
                        ))
                    }
                </ul>
            </div>}
        </div>
    )
}

export default DropDown