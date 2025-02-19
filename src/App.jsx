import AboutMe from "./components/AboutMe"
import Header from "./components/header"
import Projects from "./components/Projects"
import TopBanner from "./components/TopBanner"



function App() {


  return (
    <div className=' w-[100vw] h-auto flex flex-col place-content-start place-items-start bg-white '>
      <Header />
      <TopBanner />
      <Projects />
      <AboutMe />
    </div>
  )
}

export default App
