(function () {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);
    var getMessagesById = function (roomId) {
      var filteredMessages = ref.orderByChild('roomId').equalTo(roomId);
      var convo = $firebaseArray(filteredMessages);
      return convo;
    };
    var newMessage = function (message, currentRoom, currentUser) {
      messages.$add({
        content: message,
        roomId: currentRoom,
        sentAt: Date.now(),
        username: currentUser,
      })
    }

    return { getMessagesByRoom: getMessagesById, addNewMessage: newMessage };
  }

  angular
    .module('blocChats')
    .factory('Message', ['$firebaseArray', Message]);
})();
