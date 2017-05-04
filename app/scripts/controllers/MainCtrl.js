(function() {
  function MainCtrl(Room, $uibModal, Message, $cookies) {
    this.title = 'bloc chats';
    this.rooms = Room.all;
    this.messages = null;
    this.activeRoom = null;
    this.text = '';
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
    this.sendMessage = function () {
      var currentUser = $cookies.get('CurrentUser');
      Message.addNewMessage(this.text, this.activeRoom.$id, currentUser);
      this.text = '';
    },
    this.formatDate = function (date) {
      var dateObj = new Date(date);
      var hours = dateObj.getHours();
      var minutos = dateObj.getMinutes();
      var minutes = (minutos <= 9) ? '0' + minutos : minutos
      return hours + ':' + minutes
      }
  }

  angular
    .module('blocChats')
    .controller('MainCtrl', ['Room', '$uibModal', 'Message', '$cookies', MainCtrl]);
})();
