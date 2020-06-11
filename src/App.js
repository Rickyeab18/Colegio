import React , { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
   return (
    <div style={{height: '600px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
            <Navigation>
                <Link to="/idload">Id Load Data</Link>
                <Link to="/addfields">Add Data</Link>
                <Link to="/identifiedid">IdentifiedId</Link>
                <Link to="/landingpage">LandingPage</Link>
                <Link to="/operationData">Operation</Link>
                <Link to="/readfile">ReadFile</Link>
                <Link to="/textreader">TextReader</Link>
                <Link to="/xml_data">XMLDATA</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/identifiedid">IdentifiedId</Link>
                <Link to="/landingpage">LandingPage</Link>
                <Link to="/">Link</Link>
                <Link to="/">Link</Link>
            </Navigation>
        </Drawer>
        <Content>
          <Main/>
        </Content>
    </Layout>
</div>
  ); 
 
}

/* import React , { Component } from 'react'
import './App.css'
import Operationdata from './components/operationdata';

class App extends Component {
  render() {
  return (
      <div className= "APP">
        <Operationdata />
      </div>
  )
  } 
}*/

export default App;
