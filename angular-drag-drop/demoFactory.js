(function() {
    'use strict';

    angular
        .module('demoApp')
        .factory('demoFactory', demoFactory);

    function demoFactory() {
        var that = {};

        that.buckets = [
            {
                id: 1,
                label: "Bucket 1"
            },
            {
                id: 2,
                label: "Bucket 2"
            },
            {
                id: 3,
                label: "Bucket 3"
            }
        ];

        that.bucketables = [
            {   
                category: 1,
                id: 1,
                label: "One"
            },  
            {   
                category: 2,
                id: 2,
                label: "Zwei"
            },  
            {   
                category: 2,
                id: 3,
                label: "Tres"
            },  
            {   
                category: 3,
                id: 4,
                label: "Quatre"
            },  
            {   
                category: 3,
                id: 5,
                label: "Khamsa"
            }   
        ]; 

        that.newBucketable = {
            label: ""
        };

        that.newBucket = {
            label: ""
        };

        that.newSortable = {
            label: ""
        };

        that.sortables = [
            {
                id: 1,
                label: "Hamburger",
                number: 1
            },
            {
                id: 2,
                label: "Bun",
                number: 2
            },
            {
                id: 3,
                label: "Cheese",
                number: 3
            },
            {
                id: 4,
                label: "Ketchup",
                number: 4
            },
            {
                id: 5,
                label: "Lettuce",
                number: 5
            }
        ];

        return that;
    }

})();
