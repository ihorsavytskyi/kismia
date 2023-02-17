import React, {createContext, useEffect, useState} from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
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

const useUserAge = (day, month, year) => {
    const [userAge, setUserAge] = useState(null)
    const [isUserAgeValid, setUserAgeValid]  = useState(false)

    useEffect(() => {
        if(!!day && !!month && !!year) {
            getUserAge(day, month, year)
        }
    }, [day, month, year])

    return {
        userAge,
        isUserAgeValid
    }
}

const Registration = () => {

    const [fieldsValue, setFieldsValue] = useState(() => ({
            name: '',
            dayOfBirth: '',
            monthOfBirth: '',
            yearOfBirth: '',
            password: '',
            email: '',
            consent: null
        })
    )

    const dayInMonth = useDaysInMonth(31, fieldsValue.monthOfBirth, fieldsValue.yearOfBirth)
    const dateOfBirth = useUserAge(fieldsValue.dayOfBirth, fieldsValue.monthOfBirth, fieldsValue.yearOfBirth)

    return (
        <MainContainer pageName={"fast-register"}>
            <HeadlineContainer>
                <img className="image" src={headerBg} alt="Headline background"/>
            </HeadlineContainer>
            <Section>
                <h1 className="title">Створити анкету</h1>
            </Section>
            <Section>
                <Text
                    textAlign={"center"}
                    content={"Швидка реєстрація, для того щоб перейти до спілкування"}/>
            </Section>
            <Section>
                <FormContext.Provider value={{ fieldsValue, setFieldsValue }}>
                    <form className="flex flex-col w-4/5 mx-auto mt-5">
                        <FormField>
                            <Input attr={{
                                type: "text",
                                name: "name",
                                label: "Ім'я:",
                                placeholder: "Зазначте ім'я",
                                error: "Ім'я має містити лише символи"
                            }}/>
                        </FormField>
                        <FormField>
                            <Fieldset legend={"Дата народження:"} error={true}>
                                <Container classes={["flex","row","space-between"]}>
                                    <FormSubField flex={[1, 0, "auto"]}>
                                        <Select attr={{
                                            name: "dayOfBirth",
                                            label: "",
                                            placeholder: "ДД",
                                            options: getDropDownList(1, dayInMonth, "ДД", 2)}}
                                        />
                                    </FormSubField>
                                    <FormSubField flex={[1, 0, "auto"]}>
                                        <Select attr={{
                                            name: "monthOfBirth",
                                            label: "",
                                            placeholder: "MM",
                                            options: getDropDownList(1, 12, "ММ", 2)}}
                                        />
                                    </FormSubField>
                                    <FormSubField flex={[1.12, 0, "auto"]}>
                                        <Select attr={{
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
                                placeholder: "Мінімум 8 символів",
                                error: "Пароль має бути задовжки 8 символів",
                                autoComplete: "off"
                            }}/>
                        </FormField>
                        <FormField>
                            <Input attr={{
                                type: "email",
                                name: "email",
                                label: "Email:",
                                placeholder: "Email користувача",
                                error: "Некоректно зазначено email користувача"
                            }}/>
                        </FormField>
                        <Button type={"submit"} text={"Створити анкету"}>Створити анкету</Button>
                        <FormField>
                            <Input attr={{
                                type: "checkbox",
                                name: "consent",
                                label: "Реєструючись, я підтверджую, що мені виповнилося 18 років. Я приймаю умови ліцензійної угоди, політики конфіденційності та обробки персональних даних.",
                                placeholder: "",
                                error: ""
                            }}/>
                        </FormField>
                    </form>
                </FormContext.Provider>
            </Section>
        </MainContainer>
    )
}

export default Registration