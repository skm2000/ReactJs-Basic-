import React, { Component, Fragment } from 'react'
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/Functionclick'
import ClassClick from './Components/ClassClick'
import Eventbinding from './Components/EventBinding'
import ParentComponent from './Components/ParentComponent'
import NameList from './Components/NameList'
import Stylesheet from './Components/Stylesheet'
import Inline from './Components/Inline'
import Form from './Components/Form'
import LifecycleA from './Components/LifecycleA'
import FragmentDemo from './Components/FragmentDemo'
import Table from './Components/Table'
import PureComponent from './Components/PureCompo'
import ParentCompo from './Components/ParentCompo'
import RefsDemo from './Components/RefsDemo'
import focusInput from './Components/focusInput'
import PortalDemo from './Components/PortalDemo'
import Hero from './Components/Hero'
import ErrorBounding from './Components/ErrorBounding'
import ClickedCounter from './Components/ClickedCounter'
import HoverCounter from './Components/HoverCounter'

class App extends Component {
  render () {
    return(
      <div className="App">
      <ClickedCounter/>
      <HoverCounter/>
      {/* <ErrorBounding>
          <Hero heroName='Batman'/>
      </ErrorBounding>

      <ErrorBounding>
          <Hero heroName='Joker'/>
      </ErrorBounding>

      <PortalDemo/>
      <focusInput/>
      <RefsDemo/>
      <ParentCompo/>
      <PureComponent/>
      <Table/>
      <FragmentDemo/>
      <LifecycleA/>
      <Form/>
      <ParentComponent/>
      <NameList/>
      <Stylesheet  primary="true"/>
      <Inline/>
      <FunctionClick/>
      <ClassClick/>
      <Eventbinding/>
        <Counter/>
        <Greet name="Shubham" code="one">
          <p>This is Children props inside Shubham</p>
        </Greet>
        <Greet name="Pratik" code="two">
          <button>Action</button>
        </Greet>
        <Greet name="Souvik" code="three"/>
        <Welcome name="Shubham" code="one">
        <p>This is Children props inside Shubham</p>
        </Welcome>
        <Welcome name="Pratik" code="two"/>
        <Welcome name="Souvik" code="three"/>
        <Message/> */}
      </div>
    )
  }

}

export default App