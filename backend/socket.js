const express = require('express');
const http = require('http')
const socketSetup = () =>{
const app = express();
const socketIo  = require('socket.io')
const server = http.createServer(app);
const User = require('./model/message');
const messages = require('./model/message')
const socketIoServer = socketIo(server,{
  path: "/api/socket.io",
  cors: {
    origin: true,
    credentials: true
  }
});
let activeSockets = [];
socketIoServer.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    activeSockets.push(socket.id);
    socket.on('userLoggedIn', async ({username}) => {
        let user = await User.findOne({username});
        socket.emit('initialMessages', {content });
    });

    socket.on('sendMessage', async (data) => {
        const { username, content } = data;
        try {
          const response = await generateAIResponse(content);
          const user = await User.findOne({ username });
          user.messages.push({ sender: 'USER', content : content });
          user.messages.push({ sender: 'AI', content: response });
          await user.save();
          socket.emit('newMessage', {messages: user.messages });
      } catch (error) {
          console.error(error);
      }
    });

    async function generateAIResponse(input) {
      try {
          const response = await openai.chat.completions.create({
              model: "gpt-3.5-turbo",
              messages: [
                  {
                      "role": "system",
                      "content": "You will be provided with a block of text, and your task is to generate a human-like answer or reply for it within 50 words."
                  },
                  {
                      "role": "user",
                      "content": input
                  }
              ],
              max_tokens: 50,
          });
          return response.choices[0].message.content;
      } catch (error) {
          console.error('Error generating AI response:', error);
          return 'Sorry, an error occurred while generating the AI response.';
      }
  }

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        activeSockets = activeSockets.filter((id) => id !== socket.id);
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('route error');
});

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
}

module.exports = socketSetup;