import React from "react";
import {MdHeadsetMic} from "react-icons/md";

import DialogContainer from "../DialogContainer";
import CallSupport from "./CallSupport";
import {Wrapper, Contacts, Message, Input, Textarea, Submit, CallUs} from "./styles";

export default function Help(){
  const [callSupport, setCallSupport] = React.useState(false)
  
  function handleMessageSubmit(evt){
    evt.preventDefault();
  }
  
  return (
    <Wrapper>
      <DialogContainer show={callSupport} close={()=>setCallSupport(false)}>
        <CallSupport close={()=>setCallSupport(false)}/>
      </DialogContainer>
      <Contacts>
        <MdHeadsetMic/>
        <CallUs onClick={()=>setCallSupport(true)}>Call our support team</CallUs>
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