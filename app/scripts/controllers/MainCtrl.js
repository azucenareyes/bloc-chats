(function() {
  function MainCtrl(Room, $uibModal) {
    this.title = 'bloc chats';
    this.rooms = Room.all;
    this.open = function() {
      const newChatRoomModal = $uibModal.open({
        templateUrl: '/templates/newChatRoomModal.html',
        controller: 'ModalCtrl as modal',
        size: 'sm',
      });
    };
  }

  angular
    .module('blocChats')
    .controller('MainCtrl', ['Room', '$uibModal', MainCtrl]);
})();
