import React from "react";
import Video from "@/components/video/video";
import { HomeWrapper } from "@/pages/home/home.styles";

export default function Home() {
  const [showButtons, setShowButtons] = React.useState(false);
  const [option, setOption] = React.useState<string>();

  return (
    <HomeWrapper>
      {option === undefined ? (
        <>
          {!showButtons ? (
            <Video controls onEnded={() => setShowButtons(true)} />
          ) : (
            <>
              <button onClick={() => setOption("Option One")}>Option One</button>
              <button onClick={() => setOption("Option Two")}>Option Two</button>
            </>
          )}
        </>
      ) : (
        <div>
          <p>{option}</p>
          <button
            onClick={() => {
              setShowButtons(false);
              setOption(undefined);
            }}
          >
            Reset
          </button>
        </div>
      )}
    </HomeWrapper>
  );
}
