/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import Accordion from "components/accordion/accordion";
import { Label, Input, Select, Textarea, Radio, Checkbox, Slider, Flex, Button } from "theme-ui";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .send(
        "service_qszrwrm",
        "template_qnjiz6a",
        {
          name,
          title,
          message,
          email,
        },
        "NRmTW7Hyd30eoyL1n"
      )
      .then(
        (result) => {
          window.alert("message sent successfully. we will reach you out as soon as posible.");
          console.log(result.text);
          setEmail("");
          setName("");
          setTitle("");
          setMessage("");
          setSending(false);
        },
        (error) => {
          console.log(error.text);
          setSending(true);
        }
      );
  };
  return (
    <section id="contact" sx={{ variant: "section.faq" }}>
      <Container>
        <SectionHeader title="Contact us" />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Box as="form" onSubmit={(e) => sendEmail(e)}>
            <Label htmlFor="username">Full name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} required name="username" id="username" mb={3} />
            <Label htmlFor="email">email</Label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" name="mail" id="mail" mb={3} />

            <Label htmlFor="title">title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} required name="title" id="title" mb={3} />

            <Label htmlFor="comment">Your message</Label>
            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} required name="message" id="message" rows={6} mb={3} />
            <Button disabled={sending}>Send message</Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
