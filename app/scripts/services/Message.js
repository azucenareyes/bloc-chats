(function () {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);
    var getMessagesById = function (roomId) {
      var filteredMessages = ref.orderByChild('roomId').equalTo(roomId);
      var convo = $firebaseArray(filteredMessages);
      return convo;
    };

    return { all: messages, getMessagesByRoom: getMessagesById };
  }

  angular
    .module('blocChats')
    .factory('Message', ['$firebaseArray', Message]);
})();
