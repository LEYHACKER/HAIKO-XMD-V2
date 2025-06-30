'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});

const { zokou } = require("../framework/zokou");

zokou({
  'nomCom': "support",
  'reaction': '🐥',
  'categorie': "Support-Owner",
  'nomFichier': __filename
}, async (zk, dest) => {
    await zk.sendMessage(dest, {
        text: "*Holla*\n\n*Click on the button below to join the official WhatsApp Channel*",
        contextInfo: {
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363398101781980@newsletter',
                newsletterName: "𝗛𝗔𝗜𝗞𝗢-𝗫𝗠𝗗-𝗩𝟮",
                serverMessageId: 143,
            },
            forwardingScore: 999, // Score to indicate it has been forwarded
            externalAdReply: {
                title: "𝗛𝗔𝗜𝗞𝗢-𝗫𝗠𝗗-𝗩𝟮",
                body: "Next Generation",
                thumbnailUrl: 'https://files.catbox.moe/rpea5k.jpg', // Add thumbnail URL if required 
                sourceUrl: 'https://whatsapp.com/channel/0029Vb9qyTY47XeJ7i0wcQ40', // Add source URL if necessary
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    });
});
