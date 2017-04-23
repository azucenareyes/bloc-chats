(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);

    var newRoom = function (newRoomName) {
      rooms.$add({ name: newRoomName });
    };
    // changed newRoom to newRoomName
    return { all: rooms, addNewRoom: newRoom };
  }

  angular
    .module('blocChats')
    .factory('Room', ['$firebaseArray', Room]);
})();
