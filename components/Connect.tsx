'use client'

import React, { useState } from 'react';
import { Button, Input } from "@nextui-org/react";
import { init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
import useInView from 'react-cool-inview'
import { useToast } from '@chakra-ui/react';
import { FaArrowRightLong } from "react-icons/fa6";
import { MailIcon } from './MailIcon'

const Connect = () => { 
  const clearInput = () => {
    setMessage('');
    setIsLoading(false);
  }

  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  });

  init("5ZYR13DMdRvzV54Zy");
  const toast = useToast();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);

    if (message.trim() !== '') { 
      emailjs.send("service_fl3n0ru","template_h2auxrc", {
        message: message,
      })
      .then((response) => {   
        console.log('Email sent successfully:', response);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again later.');
      });
      clearInput();
    }
  }

  return (
    <div className='flex flex-col w-full mt-2 '>
      <div className='mt-4 mb-2 '>
        <div className='flex items-center gap-2 py-2 justify-evenly'>
          <MailIcon className='stroke-1 brightness-25 text-zinc-600' />
          <div className="block w-full text-left">
            <p className='text-base font-normal text-white'> 
              Lets connect - <span className='italic font-light text-zinc-600'> send me a message</span>
            </p> 
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-wrap h-48 mb-6 w-72 md:flex-nowrap md:mb-0">
        <Input
          id='message'
          type='message'
          role="textbox" 
          value={message}
          placeholder="Type your message.."
        //   variant={"bordered"}
          labelPlacement="outside"
          onChange={event => setMessage(event.currentTarget.value)}
          classNames={{
            input: "resize-y min-h-[40px] text-lg", /* Ensure font size is at least 16px */
          }}
          endContent={
            <Button
              className='bg-inherit'
              type="submit"
              isLoading={isLoading}>
              <FaArrowRightLong className="flex-shrink-0 text-xl pointer-events-none text-default-400" />
            </Button>
          }
        />
      </form>  
    </div>
  )
}

export default Connect;