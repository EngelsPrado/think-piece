import React from "react";
import { useColorMode } from "theme-ui";
import { Styled } from "theme-ui";

export const TestTheme = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header>
      <div>
        <Styled.h1>Hello, styled heading!</Styled.h1>
        <div
          sx={{
            // values referencing scales defined in a theme
            color: "primary",
            bg: "lightgray",
            fontFamily: "body",
            // raw CSS value
            boxShadow: "0 0 1px 3px rgba(0, 0, 0, .125)"
          }}
        />
        lol
      </div>
      <button
        onClick={e => {
          setColorMode(colorMode === "light" ? "dark" : "light");
        }}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </button>
    </header>
  );
};
