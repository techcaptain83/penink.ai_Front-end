import React from 'react'

interface Props {
    children: React.ReactNode
}
const TemplatesLayout = ({ children }: Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default TemplatesLayout