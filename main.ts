// base
radio.onReceivedString(function (receivedString) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > 10) {
        basic.showString("cerca")
    } else {
        basic.showString("lejos")
    }
})
