const initState = {
  posts: [
    {
      id: "1",
      title:
        "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
      body:
        "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
    },
    {
      id: "2",
      title: "soluta aliquam aperiam consequatur illo quis voluptas",
      body:
        "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem"
    },
    {
      id: "3",
      title: "qui enim et consequuntur quia animi quis voluptate quibusdam",
      body:
        "iusto est quibusdam fuga quas quaerat molestias\na enim ut sit accusamus enim\ntemporibus iusto accusantium provident architecto\nsoluta esse reprehenderit qui laborum"
    }
  ]
};
//the first time it runs the state is not defined by that time.
const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    //the filter method does not alter the original array
    //it makes a new array
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });

    return {
      ...state,
      posts: newPosts
    };
  }

  //console.log(action);
  return state;
};

export default rootReducer;
