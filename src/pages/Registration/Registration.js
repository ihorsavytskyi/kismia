import React, { useState, useEffect } from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import Text from "../../components/Text/Text";
import Section from "../../components/Section/Section";
import FormField from "../../components/FormField/FormField"
import Input from "../../components/Input/Input";

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [isMatchesRegExp, setMatchesRegExpError] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {

        for (const validation in validations) {
            switch(validation) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                case 'pattern':
                    value.match(validations[validation]) == null ? setMatchesRegExpError(true) : setMatchesRegExpError(false)
                    break;
            }
        }

    }, [value])

    useEffect(() => {
        if(isEmpty || minLengthError || maxLengthError || isMatchesRegExp) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, maxLengthError, isMatchesRegExp])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        isMatchesRegExp,
        inputValid
    }
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}
const Registration = () => {

    const name = useInput('', {
        isEmpty: true,
        minlength: 2,
        maxLength: 80,
        pattern: '^[a-zA-Z ]*$'
    })

    console.log(name)

    return (
        <MainContainer>
            <h1>Создать анкету</h1>
            <Section>
                <Text
                    textAlign={"center"}
                    content={"Бистрая регистрация, чтоби перейти к общению"}/>
            </Section>
            <Section>
                <form className="flex flex-col w-4/5 mx-auto mt-5">
                    <FormField>
                        <Input attr={{
                          type: "text",
                          name: "name",
                          label: "Имя:",
                          placeholder: "Укажите имя"
                        }}/>
                    </FormField>
                </form>
            </Section>
        </MainContainer>
    )
}

export default Registration