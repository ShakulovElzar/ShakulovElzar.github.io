let initialStore = {
    posts: [
        {id: 1, text: "Hi, how are you", likes: 12},
        {id: 2, text: "Hey there", likes: 32},
        {id: 3, text: "I won", likes: 124},
        {id: 4, text: "I did my first job", likes: 2}
    ],
    areaText: "Write your post here"
}

const profilePageReducer = (state = initialStore, action) => {
    switch (action.type){
        case "ADD-POST":

            let post = {

                id: state.posts.length - 2,
                text: state.areaText,
                likes: 0
            }
            state.posts.unshift(post);
            state.areaText = '';
            return state
        case "UPDATE-POST-TEXT-AREA":
            state.areaText = action.newText;
            return state
        default :
            return state
    }
}

export let addPostActionCreator = () => ({type: "ADD-POST"})
export let onAreaChangeActionCreator = (text) => ({type: "UPDATE-POST-TEXT-AREA", newText: text})

export default profilePageReducer;