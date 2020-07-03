import React from 'react'
interface MethodProp {
    settingId: () => void
}
export default function InputComponent({settingId}:MethodProp){
    return (
        // To replace the Addional enclosing div tag in DOM tree we use Fragment 
        // which will prevent the extra node adding to DOM
        
            <form name="login" className="search-form">
                <input
                    type="text"
                    placeholder="Search by id"
                    name="username"
                    id="search"
                    required
                    autoComplete="off"
                    onChange={settingId}
                />
            </form>
    )
}
