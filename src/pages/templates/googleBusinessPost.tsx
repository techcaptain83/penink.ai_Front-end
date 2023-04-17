import React from 'react'
import Textarea from '../../components/units/textarea'
import DropDown from '../../components/units/dropDown'

const GoogleBusinessPost = () => {
    return (

        <>
            <div className='w-full'>
                <label htmlFor="contentToImprove" className="block font-medium leading-6 text-gray-900">
                    Post type
                </label>
                <DropDown fullWidth options={[
                    { label: "Event", value: "event" },
                    { label: "Offer", value: "offer" },
                    { label: "Update", value: "update" }
                ]}
                />

            </div>
            <Textarea
                name='description'
                title='short description'
                rows={2}
            />
        </>
    )
}

export default GoogleBusinessPost