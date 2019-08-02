/**
* Database Configerations and rooms will be placed here.
*/

function RoomsList(){
	let rooms=[{
		'name': 'Room1',

	},{
		'name': 'Room2',
	}]

	return {

		all:()=>{
			return rooms
		},

		findRoomById: id=>{
			const roomIndex = rooms.findIndex(item, i => {
				if(item.id === id)
					return i
				return -1
			})
			return roomIndex
		},

		removePlayer: id =>{
			let room = findRoomById(id)
			room.capacity -= 1
			if(room.capacity == 0)
				deleteRoom(room.id)
			return rooms 
		},

		deleteRoom: id=>{
			const room = findRoomById(id)
			if (index > -1)
				rooms.splice(room, 1)
			return rooms
		}
	}
}

module.exports = RoomsList