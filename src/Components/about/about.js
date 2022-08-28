import { useSelector } from 'react-redux';

function About(){
    
    // const counter = useSelector(state =>state.counterReducer.counter)
    const counter = useSelector((state) => state.counterReducer.counter);
    return (
        <div>
             <h2 className='header'>About</h2>
        <div className="m-5 ">
        <h3> NAME:<samp> Abdelrahman Mohamed Abdallah</samp></h3>
        <p>
        Support Us <br />
        {counter} $ donated so far !
      </p>
    </div>
    </div>
    
    )
}
export default About
