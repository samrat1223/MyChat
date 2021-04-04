import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return(
        <ChatEngine 
         height="100vh" //entire project screen
         projectID="ffac8f54-c51f-4f1d-8da2-5f055772810e"
         userName="Asamate"
         userSecret="Asamate"
         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;
