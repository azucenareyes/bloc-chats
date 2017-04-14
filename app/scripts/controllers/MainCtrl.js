(function() {
  function MainCtrl(Room) {
    this.title = "Bloc Chats";
    this.rooms = Room.all;
    var consoleLogSofia = function() {
      console.log('sofia');
    };
  }

  angular
    .module('blocChats')

    .controller('MainCtrl', ['Room', MainCtrl]);
})();
