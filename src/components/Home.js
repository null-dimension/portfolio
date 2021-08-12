import { AnimatorGeneralProvider } from "@arwes/animation";
import { ArwesThemeProvider } from "@arwes/core";
import {
  StylesBaseline,
  Text,
  LoadingBars,
  Button,
  Card,
  FrameCorners,
  Blockquote,
} from "@arwes/core";

import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
const FONT_FAMILY_CODE = '"Source Code Pro", monospace';
const IMAGE_URL = "/wallpaper.jpg";

let themeSettings = {};
const duration = { enter: 1000 };
const animatorGeneral = { duration: { enter: 200, exit: 200, stagger: 30 } };

const Home = () => {
  const [loading, setLoading] = useState(true);

  const [activate, setActivate] = React.useState(true);

  const timeout = setTimeout(() => setActivate(true), 2000);
  const history = useHistory();

  let appLoaded = false;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  function changeRoute() {
    history.push("/projects");
  }

  return (
    <ArwesThemeProvider themeSettings={themeSettings}>
      <StylesBaseline
        styles={{
          "html, body": { fontFamily: FONT_FAMILY_ROOT },
          "code, pre": { fontFamily: FONT_FAMILY_CODE },
        }}
      />
      {loading && !appLoaded ? (
        <div className="loading-bar">
          <LoadingBars animator={{ activate }} />
        </div>
      ) : (
        <div className="main-content">
          <AnimatorGeneralProvider animator={animatorGeneral}>
            <FrameCorners animator={{ activate }} hover>
              <Card
                animator={{ activate }}
                title="Null byte"
                options={
                  <div>
                    <Button
                      animator={{ activate }}
                      onClick={(event) => changeRoute()}
                      palette="success"
                    >
                      Projects
                    </Button>
                    <Button palette="secondary">
                      <Text>Github</Text>
                    </Button>
                  </div>
                }
                hover
                style={{ maxWidth: 800 }}
              >
                <Blockquote palette="success">
                  <Text animator={{ activate }}>Fullstack Developer</Text>
                </Blockquote>
                <div>
                  <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quidem impedit blanditiis laboriosam recusandae
                  </Text>
                </div>
              </Card>
            </FrameCorners>
          </AnimatorGeneralProvider>
        </div>
      )}
    </ArwesThemeProvider>
  );
};
export default Home;
