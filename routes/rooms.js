module.exports = function(io, roomsdb){
	io.of('/rooms').on('connection', socket=>{
		console.log('New User Connected')
		socket.emit('rooms', roomsdb.all())
	})
}