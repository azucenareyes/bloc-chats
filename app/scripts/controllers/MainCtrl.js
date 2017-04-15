(function() {
  function MainCtrl(Room, $uibModal) {
    this.title = "Bloc Chats";
    this.rooms = Room.all;
    console.log(Room.all);
    this.newRooms = Room.addNewRoom;
    this.open = function() {
      var newChatRoomModal = $uibModal.open({
        templateUrl: '/templates/newChatRoomModal.html',
        controller: 'ModalCtrl as modal'
      });

      newChatRoomModal.result.then(function(newChatRoomName) {
        Room.addNewRoom(newChatRoomName);
      });
    };
  }

  angular
    .module('blocChats')

    .controller('MainCtrl', ['Room', '$uibModal', MainCtrl]);
})();
