'use client'

// ChatComponent.tsx

import React, { useEffect } from 'react';
import { FaRobot } from "react-icons/fa";

const ChatComponent: React.FC = () => {
  useEffect(() => {
    const coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function (this: HTMLElement) {
        this.classList.toggle("active");

        let content = this.nextElementSibling as HTMLElement;

        if (content.style.maxHeight) {
          content.style.maxHeight = null!;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }

    // Function to get current time
    function getTime() {
      let today = new Date();
      let hours: number | string = today.getHours();
      let minutes: number | string = today.getMinutes();

      if (hours < 10) {
        hours = "0" + hours;
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      let time = hours + ":" + minutes;
      return time;
    }

    // Function to display initial bot message
    function firstBotMessage() {
      let firstMessage = "How's it going?";
      document.getElementById("botStarterMessage")!.innerHTML =
        '<p class="botText"><span>' + firstMessage + "</span></p>";

      let time = getTime();

      document.getElementById("chat-timestamp")!.innerHTML = time;
      document.getElementById("userInput")!.scrollIntoView(false);
    }

    firstBotMessage();

    // Function to get bot response based on user input
    function getHardResponse(userText: string) {
      let botResponse = getBotResponse(userText);
      let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
      document.getElementById("chatbox")!.innerHTML += botHtml;

      document.getElementById("chat-bar-bottom")!.scrollIntoView(true);
    }

    // Function to process user input and get bot response
    function getResponse() {
      let userText = (document.getElementById("textInput") as HTMLInputElement).value;

      if (userText === "") {
        userText = "🙂";
      }

      let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

      (document.getElementById("textInput") as HTMLInputElement).value = "";
      document.getElementById("chatbox")!.innerHTML += userHtml;
      document.getElementById("chat-bar-bottom")!.scrollIntoView(true);

      setTimeout(() => {
        getHardResponse(userText);
      }, 1000);
    }

    // Function to handle sending text via button click
    function buttonSendText(sampleText: string) {
      let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

      (document.getElementById("textInput") as HTMLInputElement).value = "";
      document.getElementById("chatbox")!.innerHTML += userHtml;
      document.getElementById("chat-bar-bottom")!.scrollIntoView(true);

      setTimeout(() => {
        getHardResponse(sampleText);
      }, 1000);
    }

    // Function to send user text on button click
    function sendButton() {
      getResponse();
    }

    // Function to send heart emoji on button click
    function heartButton() {
      buttonSendText("❤️");
    }

    // Handle key press to send message
    (document.getElementById("textInput") as HTMLInputElement).addEventListener("keypress", function (e) {
      if (e.which === 13) {
        getResponse();
      }
    });

    // Cleanup: Remove event listeners on component unmount
    return () => {
      (document.getElementById("textInput") as HTMLInputElement).removeEventListener("keypress", function (e) {
        if (e.which === 13) {
          getResponse();
        }
      });
    };
  }, []);

  function getBotResponse(input: string): string {
    // Rock paper scissors
    if (input === "rock") {
      return "paper";
    } else if (input === "paper") {
      return "scissors";
    } else if (input === "scissors") {
      return "rock";
    }
  
    // Simple Greetings
    if (/^(hi|hello|hey|yo)[!]?$/i.test(input)) {
      return "Hi! I'm jackBot, here to assist with any questions about Jack's work. How can I help you today?\n\nOptions:\n1. Just saying Hello!\n2. How can I reach out to you?\n3. Daily Reminder\n4. What techstack do you use?";
    }
  
    // Asking Robot name
    if (/^(what's your name|who are you|your name)[?]?$/i.test(input)) {
      return "My name is jackBot.";
    }
  
    // Health questions
    if (/^(how are you|how are you feeling)[?]?$/i.test(input)) {
      return "I'm fine. Thanks for asking.";
    }
  
    // Joke
    if (/^(tell me a joke|say a joke)[?]?$/i.test(input)) {
      return "You, you're the joke 🤡";
    }
  
    // Simple Valediction
    if (
      /^(goodbye|good bye|bye|take care|peace|peace out|later|catch you later|im out|brb)[!]?$/i.test(
        input
      )
    ) {
      return "Talk to you later!";
    }
  
    // Curse Words
    if (
      /^(fuck|fuck you|fuck off|piss off|bastard|bitch|bloody hell|slut|whore|hoe)[!]?$/i.test(
        input
      )
    ) {
      return "That's not nice to say.";
    }

    if (/^(Can someone look like they wear lifting gloves?|who are you|your name)[?]?$/i.test(input)) {
        return "Yes, according to a recent 2024 study, 9 out of 10 people said that Will Richardson looks like he owns a pair.";
      }
  
    // Favorite color
    if (/^(what is your favorite color|what's your favorite color)[?]?$/i.test(input)) {
      return "My favorite color is blue.";
    }
  
    // Default response
    return "Try asking something else!";
  }

  return (
    <section className="chat-bar-collapsible">
      <button type="button" className="collapsible">
        <p className='flex text-zinc-700'>
         <FaRobot className='items-center mx-2 text-lg text-center text-white'/>

        </p>
        <i className="fa-regular fa-comments" style={{ color: "#ffffff1f" }}></i>
      </button>

      <div className="content bg-gradient-to-tr from-zinc-600/60 to-zinc-700/60">
        <div className="full-chat-block">
          <div className="outer-container">
            <div className="chat-container">
              <div id="chatbox">
                <h5 id="chat-timestamp"></h5>
                <p id="botStarterMessage" className="botText"><span>Loading...</span></p>
              </div>

              <div className="chat-bar-input-block">
                <div id="userInput">
                  <input id="textInput" className="input-box" type="text" name="msg" placeholder="Tap 'Enter' to send a message" />
                  <p></p>
                </div>

                {/* <div className="chat-bar-icons">
                  <i className="fa-solid fa-heart" style={{ color: "#E54854" }} onClick={() => heartButton()}></i>
                  <i className="fa-solid fa-paper-plane" style={{ color: "#acacac" }} onClick={() => sendButton()}></i>
                </div> */}
              </div>

              <div id="chat-bar-bottom">
                <p></p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatComponent;