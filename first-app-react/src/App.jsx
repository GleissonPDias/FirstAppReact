import './styles.css'
import { useState } from "react";
import reactLogo from './assets/react-logo.png'



const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there"
  ]
];


function App() {
  
  //Criar estados
  // const[estado, função que altera o estado da aplicacão] = useState(valorInicial)
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  
  

  return (
    <div>
      <header>
        <img src={reactLogo} alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>
      <div id="tabs">
        <menu>
          <button onClick={() => setActiveContentIndex(0)}>Why React?</button>
          <button onClick={() => setActiveContentIndex(1)}>Core Features</button>
          <button onClick={() => setActiveContentIndex(2)}>Related Resources</button>
          <button onClick={() => setActiveContentIndex(3)}>React vs. Vanilla</button>
          
        </menu>

        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default App
