import React from "react";
import "./App.css";
import { Layout } from "antd";
import "./sound.css";
import Sound from "./Sound";

import audio1 from "./sounds/1.wav";
import audio2 from "./sounds/2.wav";
import audio3 from "./sounds/3.wav";
import audio4 from "./sounds/4.wav";
import audio5 from "./sounds/5.wav";
import audio6 from "./sounds/6.wav";
import audio7 from "./sounds/7.mp3";
import audio8 from "./sounds/8.wav";
import audio9 from "./sounds/9.wav";
import audio10 from "./sounds/10.wav";
import audio11 from "./sounds/11.mp3";
import audio12 from "./sounds/12.wav";
import audio13 from "./sounds/13.wav";
import audio14 from "./sounds/14.wav";
import audio15 from "./sounds/15.aiff";
import audio16 from "./sounds/16.wav";
const { Content } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Content>
          <div className="main">
            <div>
              <Sound audio={audio1} />
            </div>
            <div>
              <Sound audio={audio2} />
            </div>
            <div>
              <Sound audio={audio3} />
            </div>
            <div>
              <Sound audio={audio4} />
            </div>
            <div>
              <Sound audio={audio5} />
            </div>
            <div>
              <Sound audio={audio6} />
            </div>
            <div>
              <Sound audio={audio7} />
            </div>
            <div>
              <Sound audio={audio8} />
            </div>
            <div>
              <Sound audio={audio9} />
            </div>
            <div>
              <Sound audio={audio10} />
            </div>
            <div>
              <Sound audio={audio11} />
            </div>
            <div>
              <Sound audio={audio12} />
            </div>
            <div>
              <Sound audio={audio13} />
            </div>
            <div>
              <Sound audio={audio14} />
            </div>
            <div>
              <Sound audio={audio15} />
            </div>
            <div>
              <Sound audio={audio16} />
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}
export default App;
