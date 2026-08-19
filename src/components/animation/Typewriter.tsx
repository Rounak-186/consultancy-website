"use client";

import React, { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  className?: string;
  cursor?: boolean;
  cursorStyle?: string;
  cursorClassName?: string;
}

export function Typewriter({
  words,
  loop = true,
  typeSpeed = 100,
  deleteSpeed = 50,
  delaySpeed = 1500,
  className = "",
  cursor = true,
  cursorStyle = "|",
  cursorClassName = "text-primary animate-cursor-blink ml-0.5",
}: TypewriterProps) {
  const [text, setText] = useState(words[0] || "");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setText(""); // Start from empty on client to show typing animation
  }, []);

  useEffect(() => {
    if (!isMounted || isDone || words.length === 0) return;

    let timer: NodeJS.Timeout;
    const currentFullWord = words[wordIndex % words.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentFullWord.substring(0, text.length - 1));
      }, deleteSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentFullWord.substring(0, text.length + 1));
      }, typeSpeed);
    }

    // Word completed typing
    if (!isDeleting && text === currentFullWord) {
      if (!loop && (wordIndex % words.length) === words.length - 1) {
        setIsDone(true);
        return;
      }
      timer = setTimeout(() => setIsDeleting(true), delaySpeed);
    }

    // Word completed deleting
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, loop, typeSpeed, deleteSpeed, delaySpeed, isMounted, isDone]);

  const currentFullWord = words[wordIndex % words.length] || "";
  const isWordCompleted = !isDeleting && text === currentFullWord && text.length > 0;
  const showCursor = cursor && isMounted && !isDone && !isWordCompleted;

  return (
    <span className={className}>
      {text}
      {showCursor && (
        <span className={cursorClassName} style={{ display: "inline-block" }}>
          {cursorStyle}
        </span>
      )}
    </span>
  );
}
