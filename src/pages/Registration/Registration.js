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
import Container from "../../components/Container/Container";


// const useValidation = (value, validations) => {
//     const [isEmpty, setEmpty] = useState(true)
//     const [minLengthError, setMinLengthError] = useState(false)
//     const [maxLengthError, setMaxLengthError] = useState(false)
//     const [isMatchesRegExp, setMatchesRegExpError] = useState(false)
//     const [inputValid, setInputValid] = useState(false)
//
//     useEffect(() => {
//
//         for (const validation in validations) {
//             switch(validation) {
//                 case 'isEmpty':
//                     value ? setEmpty(false) : setEmpty(true)
//                     break;
//                 case 'minLength':
//                     value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
//                     break;
//                 case 'maxLength':
//                     value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
//                     break;
//                 case 'pattern':
//                     value.match(validations[validation]) == null ? setMatchesRegExpError(true) : setMatchesRegExpError(false)
//                     break;
//             }
//         }
//
//     }, [value])
//
//     useEffect(() => {
//         if(isEmpty || minLengthError || maxLengthError || isMatchesRegExp) {
//             setInputValid(false)
//         } else {
//             setInputValid(true)
//         }
//     }, [isEmpty, minLengthError, maxLengthError, isMatchesRegExp])
//
//     return {
//         isEmpty,
//         minLengthError,
//         maxLengthError,
//         isMatchesRegExp,
//         inputValid
//     }
// }
//
// const useInput = (initialValue, validations) => {
//     const [value, setValue] = useState(initialValue)
//     const [isDirty, setDirty] = useState(false)
//     const valid = useValidation(value, validations)
//
//     const onChange = (e) => {
//         setValue(e.target.value)
//     }
//
//     const onBlur = (e) => {
//         setDirty(true)
//     }
//
//     return {
//         value,
//         onChange,
//         onBlur,
//         isDirty,
//         ...valid
//     }
// }
const Registration = () => {

    // const name = useInput('', {
    //     isEmpty: true,
    //     minlength: 2,
    //     maxLength: 80,
    //     pattern: '^[a-zA-Z ]*$'
    // })
    //
    // console.log(name)

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
                                        name: "dayOfBirthday",
                                        label: "",
                                        placeholder: "ДД"}}
                                    />
                                </FormSubField>
                                <FormSubField flex={[1, 0, "auto"]}>
                                    <Select attr={{
                                        name: "monthOfBirthday",
                                        label: "",
                                        placeholder: "MM"}}
                                    />
                                </FormSubField>
                                <FormSubField flex={[1.12, 0, "auto"]}>
                                    <Select attr={{
                                        name: "yearOfBirthday",
                                        label: "",
                                        placeholder: "РРРР"}}
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
            </Section>
        </MainContainer>
    )
}

export default Registration