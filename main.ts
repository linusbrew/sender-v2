radio.onReceivedString(function (receivedString) {
    light22 = parseFloat(receivedString.substr(1, 1))
    temp2 = parseFloat(receivedString.substr(3, 1))
    basic.showNumber(light2)
})
let temp2 = 0
let light22 = 0
let light2 = 0
radio.setGroup(137)
light2 = 3
let temp = 4
light22 = 0
basic.showString("L" + convertToText(light2) + "T" + temp)
radio.sendString("L" + convertToText(light2) + "T" + temp)
