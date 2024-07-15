const story = {
    start: {
        text: "You're the captain of a spaceship. Your mission is to explore a newly discovered planet. As you approach, your sensors detect an anomaly. What do you do?",
        choices: [
            { text: "Investigate the anomaly", consequence: "investigateAnomaly" },
            { text: "Land on the planet", consequence: "landOnPlanet" }
        ],
        image: "https://static.wikia.nocookie.net/nomanssky_gamepedia/images/d/df/Ano_space.jpg/revision/latest?cb=20170818201220"
    },
    investigateAnomaly: {
        text: "As you get closer, you realize it's a wormhole. Do you enter it or retreat?",
        choices: [
            { text: "Enter the wormhole", consequence: "enterWormhole" },
            { text: "Retreat and land on the planet", consequence: "landOnPlanet" }
        ],
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/23/12/wormhole-stock-photo.jpg?width=1200"
    },
    enterWormhole: {
        text: "You enter the wormhole and find yourself in an unknown part of the galaxy. Your ship's systems are damaged. What's your priority?",
        choices: [
            { text: "Try to repair the ship", consequence: "repairShip" },
            { text: "Look for a nearby planet", consequence: "lookForPlanet" }
        ],
        image: "https://static.scientificamerican.com/sciam/cache/file/7C99F6E3-E75F-4495-A73906310813D996_source.jpg"
    },
    repairShip: {
        text: "You manage to repair your ship, but you're lost in space with no way home. THE END.",
        choices: [],
        image: "https://imgix.bustle.com/inverse/ff/1b/e7/10/7c06/41f4/9899/74018958f878/lost-in-space-netflix-premiere-2018-matt-leblanc.jpeg?w=400&h=300&fit=crop&crop=faces&q=50&dpr=2"
    },
    lookForPlanet: {
        text: "You find a planet with an advanced alien civilization. They offer to help you get home. THE END.",
        choices: [],
        image: "https://i.ytimg.com/vi/LrrNu_m_9K4/maxresdefault.jpg"
    },
    landOnPlanet: {
        text: "You land on the planet and discover strange ruins. Do you explore them or set up a base camp?",
        choices: [
            { text: "Explore the ruins", consequence: "exploreRuins" },
            { text: "Set up base camp", consequence: "setUpCamp" }
        ],
        image: "https://images.wral.com/asset/news/local/2024/01/17/21240956/415497850_18408317473056680_7582697578096548687_n-DMID1-61nsda669-640x360.jpg?w=640&h=360"
    },
    exploreRuins: {
        text: "In the ruins, you find an ancient alien artifact. Do you take it or leave it?",
        choices: [
            { text: "Take the artifact", consequence: "takeArtifact" },
            { text: "Leave the artifact", consequence: "leaveArtifact" }
        ],
        image: "https://imgix.bustle.com/uploads/image/2021/6/30/37ee5ae2-29d1-4750-a573-c363947cc858-90011245-b296-4fb8-af43-1f6b6b38909b-181bdc3e-fbca-4ff5-9607-38e1f356ea69-c83175b6-8c9e-4594-9005-47c567fb09f6-ad0e13d8-474f-44bc-9c40-8f41d8757da2-story-trailer-for-fortnite-chapter-2-season-7-0-48-screenshot.jpg?w=400&h=300&fit=crop&crop=faces&q=50&dpr=2"
    },
    takeArtifact: {
        text: "The artifact activates and teleports you to an alien mothership. You become an intergalactic diplomat. THE END.",
        choices: [],
        image: "https://cloudfront-us-east-1.images.arcpublishing.com/archetype/CI55IATKWNCW3FXRFJKGE2T2JI.jpg"
    },
    leaveArtifact: {
        text: "You respect the ruins and leave. Your ethical decision impresses watching aliens who reveal themselves. THE END.",
        choices: [],
        image: "https://bigthink.com/wp-content/uploads/2022/12/war-of-the-worlds.jpg?w=480&h=270&crop=1"
    },
    setUpCamp: {
        text: "While setting up camp, you discover underground caverns. Do you explore them or call for backup?",
        choices: [
            { text: "Explore the caverns", consequence: "exploreCaverns" },
            { text: "Call for backup", consequence: "callBackup" }
        ],
        image: "https://images.locationscout.net/2018/02/luray-underground-caverns-usa.jpg?h=1100&q=83"
    },
    exploreCaverns: {
        text: "In the caverns, you find a hibernating alien species. Your discovery reshapes human understanding of the universe. THE END.",
        choices: [],
        image: "https://physicsworld.com/wp-content/uploads/2021/10/PWOct21Appell_Dyson-collage.jpg"
    },
    callBackup: {
        text: "Backup arrives, but so does a massive sandstorm. Your team's efforts to survive become legendary. THE END.",
        choices: [],
        image: "https://wiki.guildwars.com/images/thumb/0/07/Eternal_Survivor.jpg/220px-Eternal_Survivor.jpg"
    }
};

let currentStage = 'start';

function startGame() {
    currentStage = 'start';
    updatePage();
    document.getElementById('restart-button').style.display = 'none';
}

function updatePage() {
    const stage = story[currentStage];
    document.getElementById('story-text').textContent = stage.text;
    
    const choicesElement = document.getElementById('choices');
    choicesElement.innerHTML = '';
    
    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => makeChoice(choice.consequence));
        choicesElement.appendChild(button);
    });

    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = `<img src="${stage.image}" alt="Scene Image">`;

    if (stage.choices.length === 0) {
        document.getElementById('restart-button').style.display = 'block';
    }
}

function makeChoice(consequence) {
    currentStage = consequence;
    updatePage();
}

document.getElementById('restart-button').addEventListener('click', startGame);

startGame();