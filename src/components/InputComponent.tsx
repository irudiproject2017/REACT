import React, { useEffect, useRef } from 'react'
interface MethodProp {
    settingId: () => void
}
// function component
const InputComponent: React.FC<MethodProp> = (props) => {
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        inputRef.current.focus({})
    }, [inputRef])

    return (
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
