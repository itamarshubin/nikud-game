import './App.css'
import Card from './Card';

// import all the letters
import l1 from './imgs/א.png'
import l2 from './imgs/ב.png'
import l3 from './imgs/ב2.png'
import l4 from './imgs/ג.png'
import l5 from './imgs/ד.png'
import l6 from './imgs/ה.png'
import l7 from './imgs/ו.png'
import l8 from './imgs/ז.png'
import l9 from './imgs/ח.png'
import l10 from './imgs/ט.png'
import l11 from './imgs/י.png'
import l12 from './imgs/כ.png'
import l13 from './imgs/כ2.png'
import l14 from './imgs/ל.png'
import l15 from './imgs/מ.png'
import l16 from './imgs/נ.png'
import l17 from './imgs/ס.png'
import l18 from './imgs/ע.png'
import l19 from './imgs/פ.png'
import l20 from './imgs/פ2.png'
import l21 from './imgs/צ.png'
import l22 from './imgs/ק.png'
import l23 from './imgs/ר.png'
import l24 from './imgs/ש.png'
import l25 from './imgs/ש2.png'
import l26 from './imgs/ת.png'
//import all the nikuds
import n1 from './imgs/a.png'
import n2 from './imgs/i.png'
import n3 from './imgs/o.png'
import n4 from './imgs/e.png'
import n5 from './imgs/u.png'
import n6 from './imgs/sh.png'
function App() {

  const letters = [l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20,l21,l22,l23,l24,l25,l26];
  const nikuds = [n1,n2,n3,n4,n5,n6];

    return (
      <div className="App">
        <div className="cards-container">
          <div className="letters-container">
            {letters.map((letter,index) => <Card className="letter" image={letter} key={index} />)}
          </div>
          <div className="break-line" />
          <div className="nikud-container">
            {nikuds.map((nikud,index) => <Card className="nikud" image={nikud} key={index} />)}
          </div>
        </div>

        <div className="theWord">מילים</div>
        <div className="board-table">d</div>
      </div>
    );
  }
  
  export default App;