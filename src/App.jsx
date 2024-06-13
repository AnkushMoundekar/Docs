import { Route, Routes } from "react-router-dom"
import AngularDocs from "./Docs/AngularDocs/AngularDocs"
import Home from "./Home"
import ReactDocs from "./Docs/ReactDocs/ReactDocs"
import Installation from "./Docs/ReactDocs/Installation"

function App() {
  const path="https://ankushmoundekar.github.io/Docs/"
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path={path+"/"} Component={Home} />
          <Route path={path+"/angular"} Component={AngularDocs} />
          <Route path="/react" Component={ReactDocs} />
          <Route path="/react/installation" Component={Installation} />
        </Routes>
      </div>

    </>
  )
}

export default App
