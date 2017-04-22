(function () {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child('messages').orderByChild('roomId')
    var messages = $firebaseArray(ref);
    return {
      all: messages,
      getByRoomId: function (roomId) {
        // return filtered messages
        //I can re-state the ref line. The argument roomID is the long keything
      }
     };
  }

  angular
    .module('blocChats')
    .factory('Message', ['$firebaseArray', Message]);
})();
