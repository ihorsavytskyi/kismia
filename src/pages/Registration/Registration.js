import React, {createContext, useEffect, useState} from "react";
import MainContainer from "../../components/Layout/MainContainer/MainContainer";
import HeadlineContainer from "../../components/HeadlineContainer/HeadlineContainer";
import headerBg from "../../images/bg.png";
import Section from "../../components/Section/Section";
import { FormField, FormSubField} from "../../components/FormField/FormField"
import Text from "../../components/Text/Text";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Fieldset from "../../components/Fieldset/Fieldset";
import Container from "../../components/Container/Container";
import {getCurrentYear, getUserAge} from "../../utils/getDate";
import getDropDownList from "../../utils/getDropDownList";
import {useDaysInMonth} from "../../hooks/useDaysInMonth";

import "./Registration.scss"

export const FormContext = createContext({})

const useUserAge = (day, month, year, numberOfFullYears) => {
    const [isUserAgeValid, setUserAgeValid]  = useState(null)

    useEffect(() => {

        if(!!day && !!month && !!year) {
            setUserAgeValid(getUserAge(day, month, year, numberOfFullYears))
        }
    }, [day, month, year])

    return {
        isUserAgeValid
    }
}

const Registration = () => {

    // const [fieldsValue, setFieldsValue] = useState({
    //             name: {
    //                 value: '',
    //                 isValid: false
    //             },
    //             dayOfBirth: '',
    //             monthOfBirth: '',
    //             yearOfBirth: '',
    //             password: {
    //                 value: '',
    //                 isValid: false
    //             },
    //             email: {
    //                 value: '',
    //                 isValid: false
    //             },
    //             consent: {
    //                 value: ''
    //             }
    // })

    const [fieldsValue, setFieldsValue] = useState(() => ({
        name: '',
        dayOfBirth: '',
        monthOfBirth: '',
        yearOfBirth: '',
        password: '',
        email: '',
        consent: null
    }))

    const [isFieldsValid, setFieldsValid] = useState(() => ({
        name: '',
        dayOfBirth: '',
        monthOfBirth: '',
        yearOfBirth: '',
        dateOfBirth: '',
        password: '',
        email: ''
    }))

    const [isFormValid, setFormValid] = useState(false)

    useEffect(() => {
        console.log(Object.values(isFieldsValid))
        console.log(Object.values(isFieldsValid).every(el => el === true))

        if(Object.values(isFieldsValid).every(el => el === true)) {
            setFormValid(true)
        }

    }, [isFieldsValid])

    const dayInMonth = useDaysInMonth(31, fieldsValue.monthOfBirth, fieldsValue.yearOfBirth)
    const dateOfBirth = useUserAge(fieldsValue.dayOfBirth, fieldsValue.monthOfBirth, fieldsValue.yearOfBirth, 16)


    return (
        <MainContainer pageName={"registration-page"}>
            <HeadlineContainer>
                <img className="image" src={headerBg} alt="Headline background"/>
            </HeadlineContainer>
            <Section classes={["column", "title"]}>
                <h1 className="title">Создать анкету</h1>
                <Text
                    textAlign={"center"}
                    content={"Бистрая регистрация, чтоби перейти к общению"}/>
            </Section>
            <Section classes={["column", "register-form"]}>
                <FormContext.Provider value={{ fieldsValue, setFieldsValue, isFieldsValid, setFieldsValid }}>
                    <form className="register-form" action="/kismia/registration" method="GET">
                        <FormField>
                            <Input attr={{
                                type: "text",
                                name: "name",
                                label: "Имя:",
                                placeholder: "Укажите имя",
                                error: "Ім'я має містити лише символи"
                            }}/>
                        </FormField>
                        <FormField>
                            <Fieldset legend={"Дата рождения:"} error={dateOfBirth.isUserAgeValid}>
                                <Container classes={["flex","row","space-between"]}>
                                    <FormSubField flex={[1, 0, "auto"]}>
                                        <Select
                                            attr={{
                                            name: "dayOfBirth",
                                            label: "",
                                            placeholder: "ДД",
                                            options: getDropDownList(1, dayInMonth, "ДД", 2)}}
                                        />
                                    </FormSubField>
                                    <FormSubField flex={[1, 0, "auto"]}>
                                        <Select
                                            attr={{
                                            name: "monthOfBirth",
                                            label: "",
                                            placeholder: "MM",
                                            options: getDropDownList(1, 12, "ММ", 2)}}
                                        />
                                    </FormSubField>
                                    <FormSubField flex={[1.12, 0, "auto"]}>
                                        <Select
                                            attr={{
                                            name: "yearOfBirth",
                                            label: "",
                                            placeholder: "РРРР",
                                            options: getDropDownList(getCurrentYear(), 50, "ГГГГ", 4, true)}}
                                        />
                                    </FormSubField>
                                </Container>
                            </Fieldset>
                        </FormField>
                        <FormField>
                            <Input attr={{
                                type: "password",
                                name: "password",
                                label: "Придумайте пароль:",
                                placeholder: "Минимум 8 символов",
                                error: "Пароль не может быть меньше 8 символов",
                                autoComplete: "off"
                            }}/>
                        </FormField>
                        <FormField>
                            <Input attr={{
                                type: "email",
                                name: "email",
                                label: "Email:",
                                placeholder: "Введите свою почту",
                                error: "Некорретно указана почта"
                            }}/>
                        </FormField>
                        <Button type={"submit"} text={"СОЗДАТЬ"} disabled={!isFormValid}/>
                        <FormField>
                            <Input attr={{
                                type: "checkbox",
                                name: "consent",
                                label: "Регистрируясь, я подтверждаю что мне исполнилось 18 лет. Я принимаю условия лицензионного соглашения, политики конфиденциальности, обработки персональных данных."
                            }}/>
                        </FormField>
                    </form>
                </FormContext.Provider>
            </Section>
        </MainContainer>
    )
}

export default Registration