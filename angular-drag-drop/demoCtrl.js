(function() {
    'use strict';

    angular
        .module('demoApp')
        .controller('demoCtrl', demoCtrl);

    function demoCtrl(demoFactory, demoService) {
        var that = this;

        // Methods
        that.addBucketable = demoService.addBucketable;
        that.deleteBucketable = demoService.deleteBucketable;
        that.dump = dump;
        that.setCategory = demoService.setCategory;

        // Variables
        that.bucketables = demoFactory.bucketables;
        that.newBucketable = demoService.newBucketable;
        that.newSortable = demoService.newSortable;
        that.sortables = demoFactory.sortables;

        function deleteBucketable(index) {
            that.bucketables.splice(index, 1);
        }

        function dump() {
            console.log(that);
        }
    }

})();
