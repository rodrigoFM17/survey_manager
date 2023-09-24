import logo from './logo.svg';
import './App.css';
import Title from './atoms/Title';
import CardQuestion from './molecules/CardQuestion';
import PlusButton from './atoms/Button';
import CreateForm from './templates/CreateFom';
import { QuestionContextProvider } from './context/QuestionContext';


function App() {
  return (
    <div className="App">
      <QuestionContextProvider>
        <CreateForm/>
      </QuestionContextProvider>
        
      
      
    </div>
  );
}

export default App;
