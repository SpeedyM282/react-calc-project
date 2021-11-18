import { useState } from 'react';
import './style.css';


function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
    
  const ops = ['/', '*', '+', '-', '.'];
    
  const updateCalc = value => {

    if (
        ops.includes(value) && calc === '' ||
        ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }
    
    setCalc(calc + value);

    if(!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if (calc === '') {
      return;
    }

    const value = calc.slice(0, -1);
    const result = 0;

    setCalc(value);
    setResult(result);
  }

  return (
    <div className="App">
      <div className='wrapper'>

        <div className='screen'>
          {result ? <span></span> : ''}&nbsp; 
          {calc || '0'}
        </div>
        
        <div className='buttons-wrapper'>
          <div className='numbers-wrapper'>  
            <div>
              <button className='button double clear' onClick={deleteLast}>C</button>
              <button className='button' onClick={() => updateCalc('/')}>&divide;</button>
            </div>  
            
            <div className='numbers-wrapper'>
              <div>
                <button className="button" onClick={() => updateCalc('7')}>7</button>
                <button className="button" onClick={() => updateCalc('8')}>8</button>
                <button className="button" onClick={() => updateCalc('9')}>9</button>
              </div>
              
              <div>
                <button className="button" onClick={() => updateCalc('4')}>4</button>
                <button className="button" onClick={() => updateCalc('5')}>5</button>
                <button className="button" onClick={() => updateCalc('6')}>6</button>
              </div>
              
              <div>
                <button className="button" onClick={() => updateCalc('1')}>1</button>
                <button className="button" onClick={() => updateCalc('2')}>2</button>
                <button className="button" onClick={() => updateCalc('3')}>3</button>
              </div>
            </div>
            
            <div>
              <button className="button double" onClick={() => updateCalc('0')}>0</button>
              <button className="button" onClick={() => updateCalc('.')}>.</button>
            </div>
          </div>
          
          <div className='operators-wrapper'>
            <button className="button" onClick={() => updateCalc('*')}>&times;</button>
            <button className="button" onClick={() => updateCalc('-')}>&ndash;</button>
            <button className="button plus" onClick={() => updateCalc('+')}>+</button>
            <button className="button equal" onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
