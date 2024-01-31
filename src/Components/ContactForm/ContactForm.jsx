import React from "react";
import { useState } from "react";
import Loading from "../Loading/Loading";
import styled from "styled-components";
import styles from "./contact.module.css";

const ContactForm = () => {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [extra, setExtra] = useState("");
    const [isPending, setIsPending] = useState(false);

    function validate(regex, value) {
        return regex.test(value);
    }

    const inputDetails = [
        {
            placeholder: "Full Name",
            type: "text",
            isOption: false,
            props: {
                value: fullName,
                func: setFullName,
            },
            regex: /^[a-zA-Z\s]+$/,
        },
        {
            placeholder: "Phone Number",
            type: "number",
            isOption: false,
            props: {
                value: phone,
                func: setPhone,
            },
            regex: /^(?:\+91)?[0-9]{10}$/,
        },
        {
            placeholder: "Email",
            type: "email",
            isOption: false,
            props: {
                value: email,
                func: setEmail,
            },
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        },
    ];

    return (
        <Container
            style={{
                backgroundColor: "deepskyblue",
                padding: "4rem 0",
                margin: "2rem 0",
            }}
        >
            <BoxArea>
                <FormArea>
                    <MessageArea>
                        <Contact>Lets talk about everything!</Contact>
                        <h3>
                            Whether you have a question, want to start a project
                            or simply want to connect.
                        </h3>
                        <h3>
                            Feel free to send me a message in the contact form.
                        </h3>
                        <dotlottie-player
                            src="https://lottie.host/fa0ada2d-665e-4fe6-8cdc-8937a021b4e8/8TERrC0Roo.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                            style={{width:"min(500px,100%)"}}
                        ></dotlottie-player>
                    </MessageArea>
                    <FormGroupComponent
                        inputDetails={inputDetails}
                        validate={validate}
                        extra={extra}
                        setExtra={setExtra}
                        isPending={isPending}
                        // sendDataToServer={sendDataToServer}
                    />
                </FormArea>
            </BoxArea>
        </Container>
    );
};

const FormGroupComponent = ({
    inputDetails,
    validate,
    extra,
    setExtra,
    isPending,
    sendDataToServer,
}) => {
    return (
        <FormGroup>
            <Contact>Contact</Contact>
            {inputDetails.map((oneInputDetail, idx) => (
                <Input
                    key={idx}
                    borderColor={`${
                        validate(
                            oneInputDetail.regex,
                            oneInputDetail?.props?.value
                        )
                            ? "green"
                            : "red"
                    }`}
                    value={oneInputDetail?.props?.value}
                    onChange={(e) =>
                        oneInputDetail?.props?.func(e.target.value)
                    }
                    type={oneInputDetail.type}
                    placeholder={oneInputDetail.placeholder}
                />
            ))}
            <TextArea
                value={extra}
                onChange={(e) => setExtra(e.target.value)}
                rows="5"
                placeholder="Message Or Comment"
            ></TextArea>
            {isPending ? <Loading /> : <Button>Send Message</Button>}
        </FormGroup>
    );
};

const Container = styled.div`
    width: 100%;
    border-radius: 1rem;
    @media (max-width: 768px) {
        padding: 0.5rem;
    }
`;

const BoxArea = styled.div`
    width: 100%;
    /* filter: drop-shadow(0 0 5px rgb(0 0 0 / 0.6)); */
    padding: 0 1rem;
`;

const FormArea = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    gap: 2rem;
    @media (max-width: 768px) {
        width: 100%;
        padding: 0;
        flex-direction: column;
    }
`;
const MessageArea = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    flex: 1;
`;
const FormGroup = styled.div`
    padding: 1rem;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 1;
    @media (max-width: 768px) {
        height: max-content;
    }
`;

const Input = styled.input`
    padding: 5px 8px;
    height: 3rem;
    margin-top: 1rem;
    width: 100%;
    border: 2px solid transparent;
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
    background-color: var(--color-contact-background);
    -webkit-transition: 0.1s;
    transition: 0.1s;
    color: var(--color-text);
    &:focus {
        border: 2px solid ${({ borderColor }) => borderColor};
    }
`;

const TextArea = styled.textarea`
    background-color: var(--color-contact-background);
    color: var(--color-text);
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    resize: vertical;
    border: 2px solid transparent;
    outline: none;
    margin-top: 1rem;
    &:focus {
        border: 2px solid green;
    }
`;

const Button = styled.button`
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    color: white;
    font-size: 1rem;
    margin-top: 1rem;
    align-self: flex-start;
    background: var(--color-active);
    &:hover {
        background: var(--color-active-hover);
    }
`;

const Contact = styled.h1`
    font-size: 2.5em;
    align-self: center;
`;

export default ContactForm;
