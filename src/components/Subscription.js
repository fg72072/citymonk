import { Container, Form, Row,Col } from "react-bootstrap"
import { arrow } from "./Images"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { memo, useMemo, useState } from "react";
import CustomForm from "./MailForm";

const url = process.env.REACT_APP_MAILCHIP;


function Subscription() {
    return <>
        <section className="section bottom-padding">
            <div className="secondary-shadow subscription-shadow">
                .
            </div>
            <Container fluid>
                <h2 className="section-title">
                    SUBSCRIBE
                </h2>
          
                <MailchimpSubscribe
                    url={url}
                    render={({ subscribe, status, message,onValidated }) => (
                        <CustomForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                />
            )}
        />
                    {/* <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
        <div>
            <SimpleForm onSubmitted={formData => subscribe(formData)} />
            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
            {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
        </div>
        )}
    /> */}
            </Container>
            <div className="bottom-padding mobile-padding">

            </div>
        </section>
    </>
}

export default memo(Subscription)