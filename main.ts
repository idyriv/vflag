player.onChat("run", function () {
	
})
player.onChat("Прапор", function () {
    agent.setItem(BLUE_WOOL, 1, 1)
    for (let index = 0; index < 3; index++) {
        agent.move(BACK, 1)
        agent.place(FORWARD)
    }
    agent.setItem(YELLOW_WOOL, 1, 1)
    agent.move(LEFT, 1)
    agent.move(FORWARD, 3)
    for (let index = 0; index < 3; index++) {
        agent.move(BACK, 1)
        agent.place(FORWARD)
    }
})
