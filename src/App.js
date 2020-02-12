import React from "react";
import "./App.css";
import { Layout } from "antd";
import "./sound.css";
import Sound from "./Sound";

import audio1 from "./tracks/1.wav";
import audio2 from "./tracks/2.wav";
import audio3 from "./tracks/3.wav";
import audio4 from "./tracks/4.wav";
import audio5 from "./tracks/5.wav";
import audio6 from "./tracks/6.wav";
import audio7 from "./tracks/7.mp3";
import audio8 from "./tracks/8.wav";
import audio9 from "./tracks/9.wav";
import audio10 from "./tracks/10.wav";
import audio11 from "./tracks/11.mp3";
import audio12 from "./tracks/12.wav";
import audio13 from "./tracks/13.wav";
import audio14 from "./tracks/14.wav";
import audio15 from "./tracks/15.aiff";
import audio16 from "./tracks/16.wav";
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
