import {useEffect, useState} from "react";

const useForm = (formFields) => {
    const [isFormValid, setFormValid] = useState(null)

    useEffect(() => {
        Object.values(formFields).every(el => el === true) ? setFormValid(true) : setFormValid(false)
    }, [formFields])

    return isFormValid
}

export default useForm