// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from './components/Button';
// import Card from './components/Card'

// import './App.css';

// // 1ere solution avec une methode pour chaque button //

// class App extends Component {

//   constructor() {
//     super()
//     // this.onClickBT = this.onClickBT.bind(this)
//     this.onClickBTbra = this.onClickBTbra.bind(this)
//     this.onClickBTcroa = this.onClickBTcroa.bind(this)
//     this.onClickBTfr = this.onClickBTfr.bind(this)

//     this.state = {
//       name: '',
//       capital: '',
//       flag: '',
//       population: 0,
//       region: '',
//       active: '',
//     }
//   }
 

 
//   componentDidMount() {

//     fetch('https://restcountries.eu/rest/v2/name/france')
//       .then(res => res.json())
//       .then(json => {
//         this.setState({
//           name: json[0].name,
//           capital: json[0].capital,
//           flag: json[0].flag,
//           population: json[0].population,
//           region: json[0].region

//         })
//         // console.log(this.state.name)
//       });

//   };

 
//   onClickBTfr() {
//     fetch('https://restcountries.eu/rest/v2/name/france')
//       .then(res => res.json())
//       .then(json => {

//         this.setState({ name: json[0].name, })
//         this.setState({ capital: json[0].capital })
//         this.setState({ flag: json[0].flag })
//         this.setState({ population: json[0].population })
//         this.setState({ region: json[0].region })


//         console.log(this.state)

//       });

//   }
 
//   onClickBTcroa() {
//     fetch('https://restcountries.eu/rest/v2/name/croatia')
//       .then(res => res.json())
//       .then(json => {

//         this.setState({ name: json[0].name, })
//         this.setState({ capital: json[0].capital })
//         this.setState({ flag: json[0].flag })
//         this.setState({ population: json[0].population })
//         this.setState({ region: json[0].region })


//         console.log(this.state)

//       });

//   }onClickBTbra() {
//     fetch('https://restcountries.eu/rest/v2/name/brazil')
//       .then(res => res.json())
//       .then(json => {
//         this.setState({ name: json[0].name, })
//         this.setState({ capital: json[0].capital })
//         this.setState({ flag: json[0].flag })
//         this.setState({ population: json[0].population })
//         this.setState({ region: json[0].region })


//         console.log(this.state)
//       });
//   }


//   render() {

//     return (
//       <div className='App'>

       

//         {/* <Button onClick={this.onClickBT} >Send</Button>  */}

//         <Button isSlected={this.state.active === 'france'} onClick={this.onClickBTfr}> France</Button>


//          <Button isSlected={this.state.active === 'brazil'} onClick={this.onClickBTbra} >Brazil</Button> 

//         <Button isSlected={this.state.active === 'croatia'} onClick={this.onClickBTcroa} >Croatia</Button>
        
//         <Card name={this.state.name} 
//         capital={this.state.capital}
//         flag= {this.state.flag}
//         population={this.state.population}
//         region={this.state.region}>
//         </Card>



       

//       </div>
//     );
//   }
// }

// export default App;

//   // 2 eme methode avec une seule fonctio fetch //

import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';
import Card from './components/Card';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: '',
      capital: "",
      flag: "",
      population: 0,
      region: "",

    }
  }
  componentDidMount() {
    this.clickCountry('france')

  }

  clickCountry(country) {
    const url = `https://restcountries.eu/rest/v2/name/${country}`;
    
    fetch(url)
      .then(res => res.json())
      .then(json =>
        this.setState({
          name: json[0].name,
          capital: json[0].capital,
          flag: json[0].flag,
          population: json[0].population,
          region: json[0].region,
        }))
      .catch(error => error);

    console.log(this.state)
  }

  render() {
    return (
      <div className="App">

       

        <Button  onClick={this.clickCountry.bind(this, 'france')}>France</Button>
        <Button onClick={this.clickCountry.bind(this, 'brazil')}>Brazil</Button>
        <Button onClick={this.clickCountry.bind(this, 'croatia')}>Croatia</Button>

        

        <Card name={this.state.name} 
        capital={this.state.capital}
        flag= {this.state.flag}
        population={this.state.population}
        region={this.state.region}>
        </Card>

      </div>
    );
  }
}

export default App;