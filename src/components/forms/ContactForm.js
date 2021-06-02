import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Heading from "../layout/Heading";
import Alert from "react-bootstrap/Alert";
import ValidationError from "../forms/ValidationError";
import { MINIMUM_FIRST_NAME_CHARACTERS, MINIMUM_MESSAGE_VALUE } from "../../constants/contactFormElements";


const schema = yup.object().shape({

    name: yup
        .string()
        .required("Please enter your first name!")
        .min(MINIMUM_FIRST_NAME_CHARACTERS, `Your name must be at least ${MINIMUM_FIRST_NAME_CHARACTERS} characters!`),
    email: yup
        .string()
        .required("Please enter an email address!")
        .email("Please enter a valid email address!"),
    website: yup
        .string()
        .required("Please enter your website!")
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            "Enter correct url!"
        ),
    message: yup
        .string()
        .required("Please enter your message!")
        .min(MINIMUM_MESSAGE_VALUE, `The message must be at least ${MINIMUM_MESSAGE_VALUE} characters!`),

});


function ContactForm() {

    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(data) {
        console.log(data);

        setSubmitted(true);

        // reset(DEFAULT_VALUES);
    }

    // console.log(errors);

    return (
        <div className="col-md-6 order-md-1 contact--form">
            <Heading content="Submit your details" />
            {submitted && <Alert variant="success">Your submit was successful!</Alert>}
            <Form onSubmit={handleSubmit(onSubmit)}  className="contact--form__item">
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control {...register("name")} />
                    {errors.name && <ValidationError>{errors.name.message}</ValidationError>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control {...register("email")} />
                    {errors.email && <ValidationError>{errors.email.message}</ValidationError>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Website</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text className="web-text">https://</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control {...register("website")}  className="web"/>
                    </InputGroup>
                    {errors.website && <ValidationError>{errors.website.message}</ValidationError>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control {...register("message")}  as="textarea" rows={6} />
                    {errors.message && <ValidationError>{errors.message.message}</ValidationError>}
                </Form.Group>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
                </Form.Group>

                <Button variant="info" type="submit" className="btn btn-primary">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ContactForm;