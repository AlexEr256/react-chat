const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server)
const cors = require('cors');


app.use(cors());
app.use(express.json());

const rooms = new Map();

/** Get a room on chosen id.*/

app.get('/:id', (req, res)=>{
    let {id} = req.params;
    let names, messages;
    if(rooms.has(id)){
        names =[...rooms.get(id).get('names').values()];
        messages =[...rooms.get(id).get('messages').values()]
    }else{
        names =[];
        messages =[]; 
    }
   res.json({
       names, 
       messages
   })
});

app.post('/', (req, res)=>{
   res.send();
   const {id, name} = req.body;
   if(!rooms.has(id)){
       rooms.set(id, new Map([
           ['names', new Map()],
           ['messages', []]
       ]));
   }

   
});

/** Work with sockets.io.*/

io.on('connection', (socket) => {  

    /**Join the room*/
    socket.on('ROOM:JOIN', (data) =>{  
        socket.join(data.id);
        rooms.get(data.id).get('names').set(socket.id, data.name);
        const users = rooms.get(data.id).get('names').values();
        const messages =rooms.get(data.id).get('messages').values();
        io.in(data.id).emit('ROOM:JOINED', [...users]);
    });

     /**Leave the room*/

    socket.on('disconnect', () =>{
        rooms.forEach((value, id) =>{
            if(value.get('names').delete(socket.id)){
                const users=[...value.get('names').values()];
                io.in(id).emit('ROOM:LEAVED', users)
            }
        })
    })

    /**send message*/

    socket.on('ROOM:MESSAGES', ({id, name, message}) =>{
        let obj ={
            name,
            message, 
            id
        }
        rooms.get(id).get('messages').push(obj)
        io.in(id).emit('ROOM:NEW_MESSAGE', obj)
    })
    

});

  /**start server*/

server.listen(9999, (err)=>{
    console.log('Server is running');
   if(err){
    throw err;
}
})



