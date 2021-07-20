// Code your solution in this file!
const distanceFromHqInBlocks = function(pickUp){
    return (Math.abs(pickUp - 42))
}
function distanceFromHqInFeet(pickUp) {
    return (distanceFromHqInBlocks(pickUp) * 264)
}
function distanceTravelledInFeet(pickUp, dropOff) {
    return (Math.abs(pickUp - dropOff) * 264)
}
function calculatesFarePrice(start, destination){
    let totalDistance = distanceTravelledInFeet(start, destination)
    if (totalDistance <= 399) {
        return 0
    }
        else if (totalDistance >= 400 && totalDistance <= 2000) {
            return (totalDistance - 400) * .02
        }
        else if (totalDistance >= 2000 && totalDistance <=2500) {
            return 25
        }
        else {
            return 'cannot travel that far'
        }
    }