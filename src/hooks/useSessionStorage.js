import {useEffect, useState} from "react";

export const useSessionStorage = (initialValue, key) => {

    const [value, setValue] = useState(() => {
        const storageValue = sessionStorage.getItem(key)

        if(storageValue) {
            return JSON.parse(storageValue)
        }

        return initialValue
    })

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}