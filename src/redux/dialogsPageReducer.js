let initialStore = {
    dialogs: [
        {id: 1, name: "Dima", avatarLink: "https://image.flaticon.com/icons/png/128/168/168874.png"},
        {id: 2, name: "Sasha", avatarLink: "https://image.flaticon.com/icons/png/128/168/168870.png"},
        {id: 3, name: "Masha", avatarLink: "https://image.flaticon.com/icons/png/128/168/168883.png"},
        {id: 4, name: "Vova", avatarLink: "https://image.flaticon.com/icons/png/128/168/168881.png"},
    ],
    messages: [
        [
            {id: 0, text: "Hi"},
            {id: 1, text: "What's up?"},
            {id: 0, text: "Yo, amazing!"}
        ],

        [
            {id: 1, text: "Heey"},
            {id: 1, text: "How was your day?"},
            {id: 0, text: "Hey there, amazing!"}
        ],

        [
            {id: 0, text: "Wuss up"},
            {id: 1, text: "Hii"},
            {id: 1, text: "How is it going?"}
        ],

        [
            {id: 0, text: "Hello"},
            {id: 0, text: "Are you ok?"},
            {id: 1, text: "Thanks, i'm good"}
        ],

    ],
    newMessageText: "Write your message here"
}

const dialogsPageReducer = (state = initialStore, action) => {
    switch (action.type){
        case "ADD-MESSAGE":
            let message = {
                id: 1,
                text: state.newMessageText
            }

            let locationNumber = window.location.pathname.replace(/[^0-9]/g, '');
            state.messages[locationNumber - 1].push(message);
            state.newMessageText = "";
            return state

        case "UPDATE-MESSAGE-AREA":
            state.newMessageText = action.newText;
            return state
        default:
            return state
    }

}

export let addMessageActionCreator = () => ({type: "ADD-MESSAGE"})
export let onMessageChangeActionCreator = (text) => ({type: "UPDATE-MESSAGE-AREA", newText: text})

export default dialogsPageReducer;