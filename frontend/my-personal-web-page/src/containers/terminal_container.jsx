import { useState, useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import TerminalComponent from "../components/terminal_component";
import {isMobile} from "../handlers/RedirectHandler";
import MobileTerminalComponent from "../components/mobile/mobile_terminal_component";

function TerminalContainer() {
    const [messages, setMessages] = useState(['Hello', 'another message']);
    const description = "Here you will find a selection of the work I've done as a Java developer, showcasing my skills and experience in building robust, scalable, and efficient applications. \n\n" +
        "My projects reflect my dedication to quality code and innovative solutions.";
    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    const cursorRef = useRef(null);
    const client = useRef(null);

    useEffect(() => {
        const socket = new SockJS('http://localhost:8080/chat');
        client.current = new Client({
            webSocketFactory: () => socket,
            debug: (str) => {
                console.log(str);
            },
            onConnect: () => {
                client.current.subscribe('/topic/messages', (message) => {
                    setMessages((prevMessages) => [...prevMessages, message.body]);
                });
            },
            onStompError: (frame) => {
                console.error('Broker reported error: ' + frame.headers['message']);
                console.error('Additional details: ' + frame.body);
            },
        });

        client.current.activate();

        return () => {
            if (client.current) {
                client.current.deactivate();
            }
        };
    }, []);

    let handleSend = () => {
        if (input.trim()) {
            client.current.publish({
                destination: '/app/message',
                body: input,
            });
            setMessages((prevMessages) => [...prevMessages, `> ${input}`]);
            setInput('');
        }
    };

    let updateCursor = () => {
        const inputElement = inputRef.current;
        const cursorElement = cursorRef.current;
        if (inputElement && cursorElement) {
            const text = inputElement.value;
            const textWidth = getTextWidth(text, getComputedStyle(inputElement));
            cursorElement.style.left = `${textWidth + inputElement.offsetLeft}px`;
        }
    };

    let getTextWidth = (text, style) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = `${style.fontSize} ${style.fontFamily}`;
        return context.measureText(text).width;
    };

    return (
        <div>
            {isMobile ?
                <MobileTerminalComponent
                    messages={messages}
                    description={description}
                    inputRef={inputRef}
                    input={input}
                    client={client}
                    cursorRef={cursorRef}
                    handleSend={handleSend}
                    setInput={setInput}
                    updateCursor={updateCursor}
                />
                :
                <TerminalComponent
                    messages={messages}
                    description={description}
                    inputRef={inputRef}
                    input={input}
                    client={client}
                    cursorRef={cursorRef}
                    handleSend={handleSend}
                    setInput={setInput}
                    updateCursor={updateCursor}
                />
            }
        </div>

    );
}

export default TerminalContainer;
