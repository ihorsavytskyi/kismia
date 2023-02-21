import React, {useState, createContext} from "react";
import {FormField, FormSubField} from "./FormField/FormField";
import Input from "./Input/Input";
import Fieldset from "./Fieldset/Fieldset";
import Container from "../Container/Container";
import Select from "./Select/Select";
import getDropDownList from "../../utils/getDropDownList";
import {getCurrentYear} from "../../utils/getDate";
import Button from "../Button/Button";
import useForm from "../../hooks/useForm";
import {useDaysInMonth} from "../../hooks/useDaysInMonth";
import useUserAge from "../../hooks/useUserAge";

export const FormContext = createContext({})

const Form = () => {

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
        </>
    )
}

export default Form

