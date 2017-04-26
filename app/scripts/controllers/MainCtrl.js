(function() {
  function MainCtrl(Room, $uibModal, Message) {
    this.title = 'bloc chats';
    this.rooms = Room.all;
    this.messages = null;
    this.activeRoom = null;
    this.open = function () {
      $uibModal.open({
        templateUrl: '/templates/newChatRoomModal.html',
        controller: 'ModalCtrl as modal',
        size: 'sm',
      });
    };
    this.setActiveChatRoom = function (room) {
      this.activeRoom = room;
      this.messages = Message.getMessagesByRoom(room.$id);
    };
  }

  angular
    .module('blocChats')
    .controller('MainCtrl', ['Room', '$uibModal', 'Message', MainCtrl]);
})();
