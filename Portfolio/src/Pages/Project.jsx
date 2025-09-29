import Ubisoftimg1 from '../natashya-peddle-ubisoft-next-lvl-natashyapeddle-0068.png';
import Ubisoftimg2 from "../natashya-peddle-ubisoft-next-2024-beautyshot-1.png";
import Ubisoftimg3 from "../natashya-peddle-ubisoftnext2024-3dart-heropropbreakdown.png";
import Ubisoftimg4 from "../natashya-peddle-ubisoft-next-2024-earlystages.png"

import FMAR1 from "../Flymearoundtheroom2.jpg"
import FMAR2 from "../Flymearoundtheroom.jpg"
import FMAR3 from "../spritesheetplantscene.png"

import SCimg1 from "../MRC-HoldingSpace-Molana-Sketch_Exploration_Environment_BAZAAR_BUTCHER_SHOP_NP_03.png"
import SCimg2 from "../CHARACTER_CONCEPT_GREEDYBUTCHER_NATASHYAPEDDLE.png"

import Other1 from "../natashya-peddle-esg1.jpg"
import Other2 from "../natashya-peddle-esg2.jpg"
import Other3 from "../natashya-peddle-stylized-medieval-dinner-0031.png"
import Other4 from "../natashya-peddle-abandonedsubway-rendermain-natashyapeddle.png"


//STUDENT INFORMATION: Name: Natashya Peddle / StudentID: 301487275 / Date: September 27th 2025 / File Name: Portfolio: Project.jsx

export default function Project() { // project description + image linked through name imports
    return (
        <div>
            <h2>My Projects</h2>
            <p>
                <h3>Fly Me Through The Room Game {"(2024-2025)"}</h3>
                 A 2D top-down game created in Unity using C#. You play as a small Fly
                 trying to navigate around a room while avoiding obstacles and enemies.
                 Your goal is to collect crumbs to raise your score or hearts to regain health
                 until you reach the end of the level. The level finishes with a cinematic animation of a flytrap eating the fly.
                 <br /><br />
                 I worked in a small group and my role had myself focusing on the level design, 2D asset creation and animations.
                    <br /><br />
                <img src={FMAR1} alt="Natashya Peddle" width="800" height="400"/> <br />
                <img src={FMAR2} alt="Natashya Peddle" width="800" height="1100"/> <br />
                <img src={FMAR3} alt="Natashya Peddle" width="800" height="400"/> <br />

                <br /><br /> <hr /> <br /><br />
                <h3>Ubisoft Next 2024</h3>
                 A 3D Environment crafted for the Ubisoft Next 2024 competition.
                 I completed every element from concept art, lighting, asset creation, level design and camera cinematics. 
                    <br /><br />
                <img src={Ubisoftimg1} alt="Natashya Peddle" width="800" height="400"/> <br />
                <img src={Ubisoftimg2} alt="Natashya Peddle" width="800" height="400"/> <br />
                <img src={Ubisoftimg3} alt="Natashya Peddle" width="800" height="800"/> <br />
                <img src={Ubisoftimg4} alt="Natashya Peddle" width="800" height="400"/> <br />
                <br /><br /> <hr /> <br /><br />
                <h3>Soul Compass Short Film {"(2022-2023)"}</h3>
                 A short animated film directed by Maziar Ghaderi, about the story of a poor wanderer's journey for treasure that transforms into a spellbinding quest of self-discovery, leading him where he least expected.
                 <br /><br />
                 I worked with a team to create a style guide, character and environment concepts and designs. 
                    <br /><br />
                <img src={SCimg1} alt="Natashya Peddle" width="800" height="400"/> <br />
                <img src={SCimg2} alt="Natashya Peddle" width="800" height="600"/> <br />
                <br /><br /> <hr /> <br /><br />
                 <h3>Other Projects </h3>
                 A mix of 3D assets and environments that I've created over the years. 
                 I am quite proud with how these assets and environments turned out as I believe they're some of the more high quality assets that I've created.
                  <br /><br />
                 <img src={Other1} alt="Natashya Peddle" width="800" height="500"/> <br />
                 <img src={Other2} alt="Natashya Peddle" width="800" height="600"/> <br />
                 <img src={Other3} alt="Natashya Peddle" width="800" height="400"/> <br />
                 <img src={Other4} alt="Natashya Peddle" width="800" height="500"/> <br />

                <br /><br /> <hr /> <br /><br />
            </p>
        </div>
    );
}