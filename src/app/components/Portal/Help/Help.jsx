import React from "react";
import {MdHeadsetMic} from "react-icons/md";
import {Wrapper, Contacts, Message, Input, Textarea, Submit, CallUs} from "./styles";

export default function Help(){
  
  function handleMessageSubmit(evt){
    evt.preventDefault();
  }
  
  return (
    <Wrapper>
      <Contacts>
        <MdHeadsetMic/>
        <CallUs>Call our support team</CallUs>
      </Contacts>
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