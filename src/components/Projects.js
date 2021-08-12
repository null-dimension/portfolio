import React from "react";
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
  List,
} from "@arwes/core";

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
const FONT_FAMILY_CODE = '"Source Code Pro", monospace';
const IMAGE_URL = "/wallpaper.jpg";

let themeSettings = {};
const animatorGeneral = { duration: { enter: 200, exit: 200, stagger: 30 } };

const Projects = () => {
  const [activate, setActivate] = React.useState(true);
  return (
    <ArwesThemeProvider animator={animatorGeneral}>
      <StylesBaseline
        styles={{
          "html, body": { fontFamily: FONT_FAMILY_ROOT },
          "code, pre": { fontFamily: FONT_FAMILY_CODE },
        }}
      />
      <div className="projects">
        <AnimatorGeneralProvider animator={animatorGeneral}>
          <div className="row">
            <div className="project">
              <Card
                animator={{ activate }}
                image={{
                  src: IMAGE_URL,
                  alt: "A nebula",
                }}
                title="Scatter Network"
                options={
                  <Button palette="secondary">
                    <Text>Learn More</Text>
                  </Button>
                }
                style={{ maxWidth: 400 }}
              >
                <Blockquote palette="success">
                  <Text>Technology Used</Text>
                </Blockquote>
                <List>
                  <li>Php</li>
                </List>
                <Blockquote palette="success">
                  <Text>Features</Text>
                </Blockquote>
                <List>
                  <li>Admin and User side</li>
                  <li>Admins can manage the site</li>
                  <li>
                    Users can create posts, comments, follow others and message
                  </li>
                  <li>
                    Users can create topics with # and discuss with others
                  </li>
                </List>
              </Card>
            </div>
            <div className="project">
              <Card
                animator={{ activate }}
                image={{
                  src: IMAGE_URL,
                  alt: "A nebula",
                }}
                title="Quiz Project"
                options={
                  <Button palette="secondary">
                    <Text>Learn More</Text>
                  </Button>
                }
                style={{ maxWidth: 400 }}
              >
                <Blockquote palette="success">
                  <Text>Technology Used</Text>
                </Blockquote>
                <List>
                  <li>React</li>
                  <li>Nodejs</li>
                </List>
                <Blockquote palette="success">
                  <Text>Features</Text>
                </Blockquote>
                <List>
                  <li>
                    Admins can create quizzes with options, timer and points
                  </li>
                  <li>Users get points based on their performance</li>
                  <li>Leaderboard for users</li>
                  <li>Users can rate and review the quiz</li>
                </List>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="project">
              <Card
                animator={{ activate }}
                image={{
                  src: IMAGE_URL,
                  alt: "A nebula",
                }}
                title="Scatter Network"
                options={
                  <Button palette="secondary">
                    <Text>Learn More</Text>
                  </Button>
                }
                style={{ maxWidth: 400 }}
              >
                <Blockquote palette="success">
                  <Text>Technology Used</Text>
                </Blockquote>
                <List>
                  <li>Php</li>
                </List>
                <Blockquote palette="success">
                  <Text>Features</Text>
                </Blockquote>
                <List>
                  <li>Admin and User side</li>
                  <li>Admins can manage the site</li>
                  <li>
                    Users can create posts, comments, follow others and message
                  </li>
                  <li>
                    Users can create topics with # and discuss with others
                  </li>
                </List>
              </Card>
            </div>
            <div className="project">
              <Card
                animator={{ activate }}
                image={{
                  src: IMAGE_URL,
                  alt: "A nebula",
                }}
                title="Quiz Project"
                options={
                  <Button palette="secondary">
                    <Text>Learn More</Text>
                  </Button>
                }
                style={{ maxWidth: 400 }}
              >
                <Blockquote palette="success">
                  <Text>Technology Used</Text>
                </Blockquote>
                <List>
                  <li>React</li>
                  <li>Nodejs</li>
                </List>
                <Blockquote palette="success">
                  <Text>Features</Text>
                </Blockquote>
                <List>
                  <li>
                    Admins can create quizzes with options, timer and points
                  </li>
                  <li>Users get points based on their performance</li>
                  <li>Leaderboard for users</li>
                  <li>Users can rate and review the quiz</li>
                </List>
              </Card>
            </div>
          </div>
        </AnimatorGeneralProvider>
      </div>
    </ArwesThemeProvider>
  );
};

export default Projects;
