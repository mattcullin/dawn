/* CLUB - adds Beacon modal function to all specified Beacon hash links */

window.addEventListener('DOMContentLoaded', () => {

    const beaconLinkList = [
        {
            "hashLink": "beacon-modal-delivery",
            "beaconArticleID": "5dd57de904286364bc91fbb5"
        },
        {
            "hashLink": "beacon-modal-returns",
            "beaconArticleID": "5dccfc9d2c7d3a7e9ae3ee62"
        },
        {
            "hashLink": "beacon-modal-latest",
            "beaconArticleID": "5e78b8292c7d3a7e9ae997ba"
        },
        {
            "hashLink": "beacon-modal-sale",
            "beaconArticleID": "5f3d2a7a2c7d3a352e910f8b"
        },
        {
            "hashLink": "beacon-modal-bulk",
            "beaconArticleID": "620679b168cd260cc2d3a303"
        }
    ]

    beaconLinkList.forEach(function(beaconLink) {

        var hashLink = 'a[href^="#'+beaconLink["hashLink"]+'"]';
        var linkNodes = document.querySelectorAll(hashLink);
        linkNodes.forEach(function(node) {
            node.addEventListener('click', function() {
                Beacon('article', beaconLink["beaconArticleID"], { type: 'modal' })
            });
        });    
    
    });

});