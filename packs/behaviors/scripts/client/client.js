let clientSystem = client.registerSystem(0, 0);
const ChatEvent = "minecraft:display_chat_event";

clientSystem.initialize = function () {
	this.listenForEvent("minecraft:client_entered_world", (eventData) => this.BdsCoreEnterinTheWord(eventData));
}

clientSystem.BdsCoreEnterinTheWord = function(eventData) {
	this.broadcastEvent(ChatEvent, "Hello from Bedrock Bridge!");
}

clientSystem.update = function() {}
