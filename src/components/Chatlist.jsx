import ChatItem from "./ChatItem";
function Chatlist(){
   const chats = [
        {
            id:1,
            name: "Rahul",
            message: "Hi bro"
        },
        {
            id:2,
            name: "Sai",
            message: "Where are you?"
        },
        {
            id:3,
            name: "Kiran",
            message: "Call me"
        },
        {
            id:4,
            name:"Narasimha",
            message:"yeah dont you worry about be 😉😉"
        }
    ];
    

        // <ChatItem name=" rahul " message="hi bro, whats up  " />
      return (
    <div>
        {chats.map((chat) => {
            return (
                <ChatItem
                    key={chat.id}
                    name={chat.name}
                    message={chat.message}
                />
            );
        })}
    </div>
);

    
}
export default Chatlist;