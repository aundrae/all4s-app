module.exports = function(io){
	rooms=[{
		'name': 'Room1',

	},{
		'name': 'Room2',
	}]
	console.log(rooms)
	io.of('/rooms').on('connection', socket=>{
		console.log('New User Connected')
		socket.emit('rooms', rooms)
	})
}