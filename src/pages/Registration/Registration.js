import React, { useState, useEffect } from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import Text from "../../components/Text/Text";
import Section from "../../components/Section/Section";
import { FormField, FormSubField} from "../../components/FormField/FormField"
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import HeadlineContainer from "../../components/HeadlineContainer/HeadlineContainer";
import headerBg from "../../images/bg.png";
import "./Registration.scss"
import Button from "../../components/Button/Button";
import Fieldset from "../../components/Fieldset/Fieldset";
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
        <MainContainer pageName={"fast-register"}>
            <HeadlineContainer>
                <img className="image" src={headerBg} alt="Headline background"/>
            </HeadlineContainer>
            <Section>
                <h1>Создать анкету</h1>
            </Section>
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
                    <FormField>
                        <Fieldset legend={"Дата рождения:"} error={true}>
                            <FormSubField attr={{
                               name: "dayOfBirthday",
                               label: "",
                               placeholder: "ДД"}}
                            />
                            <FormSubField attr={{
                                name: "monthOfBirthday",
                                label: "",
                                placeholder: "MM"}}
                            />
                            <FormSubField attr={{
                                name: "yearOfBirthday",
                                label: "",
                                placeholder: "ГГГГ"}}
                            />
                        </Fieldset>
                    </FormField>
                    <FormField>
                        <Input attr={{
                            type: "password",
                            name: "password",
                            label: "Придумайте пароль:",
                            placeholder: "Минимум 8 символов"
                        }}/>
                    </FormField>

                    <FormField>

                    </FormField>
                    <Button></Button>
                    <FormField>

                    </FormField>
                </form>
            </Section>
        </MainContainer>
    )
}

export default Registration