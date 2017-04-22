(function () {
  function ModalCtrl($uibModalInstance, Room) {
    //2 things this controller needs to do
    this.text = '';
    this.textNewName = '';

    this.submit = function() {
//Make sure the data is coming in from the input field, verify then we can delete
      Room.addNewRoom(this.text);

      $uibModalInstance.close();
    };
    this.cancel = function(){
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
    .module('blocChats')

  //  .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
    .controller('ModalCtrl', [ '$uibModalInstance', 'Room', ModalCtrl]);
})();
