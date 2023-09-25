import logo from './logo.svg';
import { Route } from 'wouter';
import './App.css';
import CreateForm from './templates/CreateFom';
import { QuestionContextProvider } from './context/QuestionContext';
import MadeForm from './templates/MadeForm';


function App() {
  return (
    <QuestionContextProvider>
      
      <Route 
      component={CreateForm}
      path='/'
      />
      <Route
      component={MadeForm} 
      path='/Form'
      />
    </QuestionContextProvider>
    
  );
}

export default App;
