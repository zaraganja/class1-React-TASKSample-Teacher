import {useState} from 'react'

const AboutMe = () => {
    const [sliderValue, setSliderValue] = useState(40); // State to control the slider value

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value); // Update the state when the slider changes
    };
  return (
    <div name={"aboutme"} className=' flex w-full h-screen'>
        
    {/* <input type="range" min={0} max={100} value="40" className="range [--range-shdw:yellow]" /> */}
    <input
                type="range"
                min={0}
                max={100}
                value={sliderValue} // Controlled by state
                onChange={handleSliderChange} // Update state on change
                className="range [--range-shdw:yellow]"
            />
 </div>
   )
}
export default AboutMe
        
   

