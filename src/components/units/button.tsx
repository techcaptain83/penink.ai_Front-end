import React from 'react'


interface IProps {
    text: string;
    clickHandler: () => void;
    fullWidth?: boolean;
}
const Button = ({ text, clickHandler, fullWidth = true }: IProps) => {
    return (
        <button
            onClick={clickHandler}
            type="button"
            className={`rounded-md bg-primary px-3 py-2 font-medium text-white shadow-sm 
            capitalize 
            hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
            ${fullWidth && "w-full"}
            `}
        >
            {text}
        </button>
    )
}

export default Button