'use client';
import React, { useEffect, useRef, useState } from 'react';

const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const displayValueRef = useRef<HTMLParagraphElement>(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {
    const enteredUsername = usernameInputRef.current?.value;
    console.log('username is: ' + enteredUsername);
    setUsername(enteredUsername || '');

    // Update the displayed value
    displayValueRef.current!.innerText = `Entered username: ${enteredUsername}`;
  };

  return (
    <div className="useRefExample">
      <input ref={inputRef} type="text" placeholder="focus here" />
      <input ref={usernameInputRef} type="text" placeholder="username" />
      <button onClick={handleClick}>Send</button>
      <p ref={displayValueRef}></p>
    </div>
  );
};

export default UseRefExample;
