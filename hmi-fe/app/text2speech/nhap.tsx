import * as PlayHT from 'playht';
import fs from 'fs';

const user_id = '31Ivv5ymNXOEmPxBSBzonXQr5PF2';
const secret_key = '761a57aab3c84b1f96d30125f2fdec86';

async function generateAndStreamAudio() {
    try {
        
        PlayHT.init({
            userId: user_id,
            apiKey: secret_key,
        });

        let input_text = "Yes, integrating React with Django Admin is viable, but the process can be complex depending on the level of integration you want. Here’s an overview of how you can approach it:?";
        // const filePath = "D:\\Downloads\\Kì này\\HMI\\-INT2041_55-Seendyrella\\hmi-fe\\public\\audio\\hello-playht.mp3";
        const path = require("path");
        const filePath = path.join(__dirname, "audio.mp3");
        const fileStream = fs.createWriteStream(filePath);

        const stream = await PlayHT.stream(input_text, {
            voiceEngine: "Play3.0-mini"
        });

        stream.pipe(fileStream);

        fileStream.on('finish', async () => {
            console.log('Audio file has been generated successfully');
            const sound = require('sound-play');
            sound.play(filePath);
        });

        fileStream.on('error', (error) => {
            console.error('Error writing to file:', error);
        });

    } catch (error) {
        console.error('Error generating audio:', error);
    }
}

generateAndStreamAudio();