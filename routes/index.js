module.exports = function(io){
	clients=[]
	io.of('/gameplay').on("connection", socket => {
    console.log("New client connected");
    clients.push(socket.id)
    //Here we listen on a new namespace called "incoming data"
    socket.on('create', function(roomname){
        room=roomname
        socket.join(room)
        socket.emit("event", "hello")
    })
    //socket.emit("outgoing data", "HELLO");
    //A special namespace "disconnect" for when a client disconnects
    socket.on("disconnect", () =>{
        clients.pop()
        console.log("Client disconnected")
        console.log(clients)
    });
    
    socket.on('play', function(play){
        socket.to(play.room).emit('event', play.move)
        console.log(clients)
    })
});
}