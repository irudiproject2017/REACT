import React, { useEffect, useRef } from 'react'
interface MethodProp {
    settingId: () => void
}
// functional component
const InputComponent: React.FC<MethodProp> = (props) => {
    // to access DOM nodes directly for Functional component
    // useRef used here to focus input field once loaded 
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        inputRef.current.focus({})
    }, [inputRef])

    return (
        // To replace the Addional enclosing div tag in DOM tree we use Fragment 
        // which will prevent the extra node adding to DOM
        <React.Fragment> 
            <form name="login" className="search-form">
                <input
                    type="text"
                    placeholder="Search by id"
                    name="username"
                    id="search"
                    required
                    autoComplete="off"
                    onChange={props.settingId}
                    ref={inputRef}
                />
            </form>
        </React.Fragment>
    )
}

export default InputComponent
