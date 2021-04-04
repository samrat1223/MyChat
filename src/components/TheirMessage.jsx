const  TheirMessage = ({lastMessage,message}) => {
    //Checking if this is the first message by the user
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username != message.sender.username; 
    return(
        <div className="message-row">
           {isFirstMessageByUser && (
               <div 
                 className="message-avatar"
                 style={{backgroundImage:`url(${message?.sender?.avatar})`}}
               />
           )}
            {/**
             * Checking if the message is not firstMessage by the user and handling
             */}

             {message?.attachments?.length>0 
                    ?(
                        <img 
                          src={message.attachments[0].file}
                          alt="message-attachment"
                          className="message-image"
                          style={{marginLetf:isFirstMessageByUser ? '4px' : '48px'}}
                        />
                    ) : (
                        <div className="message" style={{float:'left',backgroundColor:'#CABCDC',marginLetf:isFirstMessageByUser ? '4px' : '48px'}}>
                            {message.text}
                        </div>
                    )
               }
            
        </div>
    )
}

export default TheirMessage;