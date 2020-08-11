import React from "react";

import {Wrapper, Contacts, Message, Input, Textarea, Submit} from "./styles";

export default function Help(){
  
  function handleMessageSubmit(evt){
    evt.preventDefault();
  }
  
  return (
    <Wrapper>
      <Contacts></Contacts>
      <Message onSubmit={handleMessageSubmit}>
        <Input type="text" placeholder="Your Name"/>
        <Input type="email" placeholder="Your email adress"/>
        <Input type="text" placeholder="Your mobile number"/>
        <Textarea placeholder="Your message"></Textarea>
        <Submit>Send</Submit>
      </Message>
    </Wrapper>
  )
}