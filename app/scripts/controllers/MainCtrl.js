(function() {
  function MainCtrl(Room) {
    this.title = "Bloc Chats";
    this.rooms = Room.all;
  }

  angular
    .module('blocChats')

    .controller('MainCtrl', ['Room', MainCtrl]);
})();
