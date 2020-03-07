const user = {
  _id: '1',
  name: 'Marcus',
  email: 'Marcus@gmail.com',
  picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fgray-toolbar-3%2F512%2Fuser-512.png&f=1&nofb=1"
}

module.exports = {
  Query: {
    me: () => user
  }
}