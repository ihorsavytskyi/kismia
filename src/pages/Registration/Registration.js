import React, {createContext, useState} from "react";
import MainContainer from "../../components/Layout/MainContainer/MainContainer";
import Footer from "../../components/Layout/Footer/Footer";
import HeadlineContainer from "../../components/HeadlineContainer/HeadlineContainer";
import Section from "../../components/Section/Section";
import { FormField, FormSubField} from "../../components/Form/FormField/FormField"
import Input from "../../components/Form/Input/Input";
import Text from "../../components/Text/Text";
import Select from "../../components/Form/Select/Select";
import Button from "../../components/Button/Button";
import Fieldset from "../../components/Form/Fieldset/Fieldset";
import Container from "../../components/Container/Container";

import headerBg from "../../images/bg.png";

import {getCurrentYear} from "../../utils/getDate";
import getDropDownList from "../../utils/getDropDownList";

import {useDaysInMonth} from "../../hooks/useDaysInMonth";
import useUserAge from "../../hooks/useUserAge";
import useForm from "../../hooks/useForm";

import "./Registration.scss"

export const FormContext = createContext({})

const Registration = () => {

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
        dateOfBirth: true,
        password: '',
        email: ''
    }))

    const isFormValid = useForm(isFieldsValid)
    const dayInMonth = useDaysInMonth(31, fieldsValue.monthOfBirth, fieldsValue.yearOfBirth)
    const dateOfBirth = useUserAge(fieldsValue.dayOfBirth, fieldsValue.monthOfBirth, fieldsValue.yearOfBirth, 16)

    return (
        <>
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
                    <FormContext.Provider value={{ isFormValid, fieldsValue, setFieldsValue, isFieldsValid, setFieldsValid }}>
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
                                <Fieldset legend={"Дата рождения:"} id={"dateOfBirth"} error={dateOfBirth.isUserAgeValid}>
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
                            {/*<Button type={"submit"} text={"СОЗДАТЬ"} disabled={!isFormValid}/>*/}
                            <Button type={"submit"} text={"СОЗДАТЬ"}/>
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
            <Footer/>
        </>

    )
}

export default Registration