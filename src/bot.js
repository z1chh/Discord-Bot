require("dotenv").config();

const { token } = process.env
const { Client, Collection, GatewayIntentBits} = require("discord.js");
const fs = require("fs");
const { dirname } = require("path");

const client = new Client( {
    intents: GatewayIntentBits.Guilds
});

client.commands = new Collection();
client.commandArray = [];
client.color = 0x18e1ee;

// Get all the folders from src/functions
const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
    // Get all the files
    const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));

    // Pass the client to each file
    for (const file of functionFiles) {
        require(`./functions/${folder}/${file}`)(client);
    }
}

client.handleEvents();
client.handleCommands();
client.login(token);