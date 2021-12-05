import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  ${tw`
    px-5
    py-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-500
    ease-in-out
    m-1
  `};
  &::hover {
    transform: translateY(20px);
    display: none;
  }
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-red-500
    hover:bg-transparent
    hover:text-red-500
    hover:border-red-500
  `};
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-red-500
    text-red-500
    bg-transparent
    hover:bg-red-500
    hover:text-white
    hover:border-transparent
  `};
`;

export const Button = ({ theme, text, className }: IButtonProps) => {
  return theme === "filled" ? (
    <FilledButton className={className}>{text}</FilledButton>
  ) : (
    <OutlinedButton className={className}>{text}</OutlinedButton>
  );
};
