const data = {
    posts: [
        {
            _id: "1",
            authors: [
                {
                    name: 'Лиля',
                    imgSrc: "./src/images/users/lilia.png"
                },
                {
                    name: "Игорь",
                    imgSrc: "./src/images/users/ihor.png"
                }
            ],
            publishDate: "2023-01-22",
            postText: "Хочу поделиться своей историей. Познакомилась с Игорем на вашем сайте, совпали интересы - мы вдвоем обожаем путешествия и новые страны. Так начали обсуждать всякое и решили: а почему бы не провести отпуск вдвоем? Выбрали Занзибар и впервые увидели друг друга только в аэропорту ✈ Было волнительно, но все совпало! Мы не пара, но друзья по путешествиям. А там, кто знает... 😎"
        },
        {
            _id: "2",
            authors: [
                {
                    name: "Анна",
                    imgSrc: "./src/images/users/hanna.png"
                },
                {
                    name: "Андрей",
                    imgSrc: "./src/images/users/andrey.png"
                }
            ],
            publishDate: "2022-01-05",
            postText: "...нашел на KISMIA не просто интересную знакомую, а по-настоящему СВОЕГО человека. несмотря на разницу в возрасте - сразу вспыхнули чувства и не угасают вот уже два года!!! с Анечкой мы будто созданы друг для друга и знаете... ну не встретились бы мы в обычной жизни, я бы постеснялся подойти к такой красавице!!! но в онлайне - все проще)))"
        },
        {
            _id: "3",
            authors: [
                {
                    name: "Аля",
                    imgSrc: "./src/images/users/mihail.png"
                },
                {
                    name: "Михаил",
                    imgSrc: "./src/images/users/mihail.png"
                }
            ],
            publishDate: "2022-12-05",
            postText: "Скажу правду: я уже отчаялась найти кого-то. Вроде бы и молодая, и общительная, но... Начинаешь общаться c человеком и скучно становиться. Ни планов,ни амбиций. Повезло, что пересеклась на Кисмиа с Мишей - интереснейший мужчина, кинолог. В первый день знакомства болтали до утра, устроили видеосвидание, на следующий - уже гуляли в парке. Сейчас не хочу и представляю свою жизнь без него"
        },
        {
            _id: "4",
            authors: [
                {
                    name: "Екатерина",
                    imgSrc: "./src/images/users/ekaterina.png"
                },
                {
                    name: "Олег",
                    imgSrc: "./src/images/users/oleh.png"
                }
            ],
            publishDate: "2022-11-05",
            postText: "никогда не воспринимала сайты знакомств всерьез, думала, это только для одиноких женщин 40+. а зря! 😜 зарегистрировалась и пропала! это так захватывающе, искать мужчин по интересам, смотреть, кто поблизости, писать первой и с трепетом ждать ответа. так и встретила Женю — я сама ему написала, он тут же ответил, начали общаться и встречаться. мы вместе уже 3 года и это лучшее время в моей жизни ❤️🚀"
        },
        {
            _id: "5",
            authors: [
                {
                    name: "Ирина",
                    imgSrc: "./src/images/users/irina.png"
                },
                {
                    name: "Александр",
                    imgSrc: "./src/images/users/olexandr.png"
                }
            ],
            publishDate: "2022-10-05",
            postText: "Попала на Кисима по рекомендации подруги, начала общаться с мужчинами. Понравилось, что здесь нет рекламы и мало неадекватов... Встречаются, конечно, но не так много, не критично... C Cашей познакомилась где-то через пару недель и сразу поняла: это тот самый..."
        },
        {
            _id: "6",
            authors: [
                {
                    name: "Маша",
                    imgSrc: "./src/images/users/masha.png"
                },
                {
                    name: "Иван",
                    imgSrc: "./src/images/users/ivan.png"
                }
            ],
            publishDate: "2022-09-22",
            postText: "Зашел на сайтец просто для развлечения: фото женщин посмотреть, максимум - пообщаться по переписке. но судьба как-то так сложилась, что встретил тут Марию — очаровательную женщину! мы из соседних городов, но это не помеха. она уже приезжала ко мне несколько раз на выходные, было очень легко и свободно, никакой неловкости, будто бы 100 лет знакомы :)"
        }
    ],
    questions: [
        {
            id: 1,
            question: "Цель знакомства",
            answers: [
                "дружба и общение",
                "серьезные отношения",
                "создание семьи",
                "романтика и свидания"
            ]
        },
        {
            id: 2,
            question: "Цель знакомства 2",
            answers: [
                "дружба и общение",
                "серьезные отношения",
                "создание семьи",
                "романтика и свидания"
            ]
        },
        {
            id: 3,
            question: "Цель знакомства 3",
            answers: [
                "дружба и общение",
                "серьезные отношения",
                "создание семьи",
                "романтика и свидания"
            ]
        },
        {
            id: 4,
            question: "Цель знакомства 4",
            answers: [
                "дружба и общение",
                "серьезные отношения",
                "создание семьи",
                "романтика и свидания"
            ]
        },
        {
            id: 5,
            question: "Цель знакомства 5",
            answers: [
                "дружба и общение",
                "серьезные отношения",
                "создание семьи",
                "романтика и свидания"
            ]
        }
    ],
    fields: [
        {
            tag: "input",
            type: "text",
            name: "name",
            placeholder: "",
            validationParams: [
                {
                    required: {
                        value: true,
                        errorMessage: "Поле обязательно к заполнению"
                    },
                    pattern: {
                        value: "",
                        errorMessage: "Поле содержит недопустимые символы"
                    },
                    minLength: {
                        value: 2,
                        errorMessage: "Минимально допустимое 2 символа"
                    },
                    maxLength: {
                        value: 80,
                        errorMessage: "Максимально допустимо 80 символов"
                    }
                }
            ]
        },
        {
            tag: "select",
            name: "dayOfBirthday",
            defaultSelected: "ДД",
            validationParams: []
        },
        {
            tag: "select",
            name: "monthOfBirthday",
            defaultSelected: "ММ",
            validationParams: []
        },
        {
            tag: "select",
            name: "yearOfBirthday",
            defaultSelected: "ГГГГ",
            validationParams: []
        },
        {
            tag: "input",
            type: "password",
            name: "password",
            validationParams: [
                {
                    required: {
                        value: true,
                        errorMessage: "Поле обязательно к заполнению"
                    },
                    minLength: {
                        value: 8,
                        errorMessage: "Минимально допустимое 8 символа"
                    }
                }
            ]
        },
        {
            tag: "input",
            type: "email",
            name: "email",
            validationParams: [
                {
                    required: {
                        value: true,
                        errorMessage: "Поле обязательно к заполнению"
                    },
                    pattern: {
                        value: "",
                        errorMessage: "Поле содержит недопустимые символы"
                    }
                }
            ]
        },
        {
            tag: "input",
            type: "checkbox",
            name: "consent",
            validationParams: []
        },
        {
            tag: "button",
            type: "submit",
            name: "submitForm",
            validationParams: []
        }
    ],
    validationRules: {
        name: {
            required: {
                value: true,
                errorMessage: "Поле обязательно к заполнению"
            },
            pattern: {
                value: "^[a-zA-Z ]*$",
                errorMessage: "Поле содержит недопустимые символы"
            },
            minLength: {
                value: 2,
                errorMessage: "Минимально допустимое 2 символа"
            },
            maxLength: {
                value: 80,
                errorMessage: "Максимально допустимо 80 символов"
            }
        },
        password: {
            required: {
                value: true,
                errorMessage: "Поле обязательно к заполнению"
            },
            minLength: {
                value: 8,
                errorMessage: "Минимальное количество символов не должо быть меньше "
            }
        },
        email: {
            required: {
                value: true,
                errorMessage: "Поле обязательно к заполнению"
            },
            pattern: {
                value: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
                errorMessage: "Некорректно указан email"
            }
        },
        dayOfBirthday: {
            required: {
                value: true,
                errorMessage: "Поле обязательно к заполнению"
            },
            minLength: {
                value: 0,
                errorMessage: "Минимально допустимое значение 1"
            },
            maxLength: {
                value: 31,
                errorMessage: "Превышено максимально допустимое значение"
            }
        },
        monthOfBirthday: {
            required: {
                value: true,
                errorMessage: "Поле обязательно к заполнению"
            },
            Number: {
                value: true,
                errorMessage: "Не может быть символьно значение"
            },
            minLength: {
                value: 0,
                errorMessage: "Минимально допустимое значение 1"
            },
            maxLength: {
                value: 12,
                errorMessage: "Превышено максимально допустимое значение"
            }
        },
        yearOfBirthday: {
            required: {
                value: true,
                errorMessage: "Поле обязательно к заполнению"
            },
            minLength: {
                value: 8,
                errorMessage: ""
            }
        },
        consent: {
            required: true
        }
    }
}

export default data