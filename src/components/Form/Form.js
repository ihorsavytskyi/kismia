import React, {useContext, useRef} from "react";
import {FormContext} from "../../context/FormContext";

import {useDaysInMonth} from "../../hooks/useDaysInMonth";
import useUserAgeValid from "../../hooks/useUserAgeValid";

import getDropDownList from "../../utils/getDropDownList";
import {getCurrentYear} from "../../utils/getDate";

import Container from "../Container/Container";
import {FormField, FormSubField} from "./FormField/FormField";
import Fieldset from "./Fieldset/Fieldset";
import Select from "./Select/Select";
import Button from "../Button/Button";
import InputText from "./InputText/InputText";
import InputPassword from "./InputPassword/InputPassword";

import Checkbox from "./Checkbox/Checkbox";

const Form = () => {
    const {isFieldsValid, isFormValid, fieldsValue} = useContext(FormContext)

    const dayInMonth = useDaysInMonth(31, fieldsValue.monthOfBirth, fieldsValue.yearOfBirth)
    const dateOfBirth = useUserAgeValid(fieldsValue.dayOfBirth, fieldsValue.monthOfBirth, fieldsValue.yearOfBirth, 18, 80)
    const formRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(isFormValid) {
            formRef.current.submit()
        } else {
            for(let key in isFieldsValid) {
                if(!isFieldsValid[key]) {
                    const el = document.getElementById(key)
                    if(el) el.focus()
                }
            }
        }
    }

    return (
        <form ref={formRef} className="register-form" action="" method="" onSubmit={(e) => handleSubmit(e)}>
            <FormField>
                <InputText
                    attr={{
                    type: "text",
                    name: "name",
                    label: "Имя:",
                    placeholder: "Укажите имя"}}
                />
            </FormField>
            <FormField>
                <Fieldset legend={"Дата рождения:"} id={"dateOfBirth"} dateOfBirth={dateOfBirth} >
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
                                    options: getDropDownList(getCurrentYear(), 90, "ГГГГ", 4, true)}}
                            />
                        </FormSubField>
                    </Container>
                </Fieldset>
            </FormField>
            <FormField>
                <InputPassword
                    attr={{
                    // type: "password",
                    // name: "password",
                    label: "Придумайте пароль:",
                    placeholder: "Минимум 8 символов",
                    // autoComplete: "off"
                }}/>
            </FormField>
            <FormField>
                <InputText
                    attr={{
                    type: "email",
                    name: "email",
                    label: "Email:",
                    placeholder: "Введите свою почту"
                }}/>
            </FormField>
            <Button type={"submit"} text={"СОЗДАТЬ"} onClick={(e) => handleSubmit(e)}/>
            <FormField>
                <Checkbox
                    attr={{
                    type: "checkbox",
                    name: "consent",
                    label: "Регистрируясь, я подтверждаю что мне исполнилось 18 лет. Я принимаю условия <a href=''>лицензионного соглашения</a>, <a href=''>политики конфиденциальности</a>, <a href=''>обработки персональных данных</a>."
                }}/>
            </FormField>
        </form>
    )
}

export default Form

