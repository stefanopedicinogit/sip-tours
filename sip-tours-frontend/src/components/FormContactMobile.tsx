import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Layout from "./Layout";
import ThemeColor from "./ThemeColor";
import emailjs from 'emailjs-com';

export default function FormContactMobile() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [nameFieldRequired, setNameFieldRequired] = useState<boolean>(false);
    const [emailFieldRequired, setEmailFieldRequired] = useState<boolean>(false);
    const form = useRef<any>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() === '' && email.trim() === '') {
            setNameFieldRequired(true);
            setEmailFieldRequired(true);
        }
        else if (name.trim() === '') {
            setNameFieldRequired(true);
            return;
        }

        else if (email.trim() === '') {
            setEmailFieldRequired(true);
            return;
        }
        else {
            setEmailFieldRequired(false);
            setNameFieldRequired(false);
        }
        // Handle form submission logic here
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "service_gn19734", process.env.REACT_APP_EMAILJS_TEMPLATE_ID_FORM ?? "template_tdczgjf", form.current, process.env.REACT_APP_EMAILJS_SECRET_KEY ?? "FGINqgCQYdQdhPMaX")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };
    return (
        <>
            <Layout backgroundColor={ThemeColor.pinkHome} backgroundStyle={{ padding: "4vh 0" }}>
                <form ref={form} onSubmit={handleSubmit}>
                    <label>
                        <p style={{ color: 'white' }}>Name *</p>
                        <input
                            style={{ borderBottom: nameFieldRequired ? '2px solid red' : '2px solid white' }}
                            className="form-contact-mobile"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="name"
                            id="name"
                        />
                    </label><br /><br />

                    <label>
                        <p style={{ color: 'white' }}>Email *</p>
                        <input
                            style={{ borderBottom: emailFieldRequired ? '2px solid red' : '2px solid white' }}
                            className="form-contact-mobile"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            id="email"
                        />
                    </label><br /><br />
                    <label>
                        <p style={{ color: 'white' }}>Phone</p>
                        <input
                            className="form-contact-mobile"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            name="phone"
                            id="phone"
                        />
                    </label><br /><br />

                    <label>
                        <p style={{ color: 'white' }}>Type your message here..</p>
                        <textarea 
                        className="form-contact-mobile"
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        rows={4} 
                        cols={50} 
                        name="message"
                        id="message"
                        />
                    </label><br /><br />
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <Button className="button-rounded-black-mobile clickable" type="submit">Submit</Button>
                    </div>
                </form>
            </Layout>
        </>
    )
}
