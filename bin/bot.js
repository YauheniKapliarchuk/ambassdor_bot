import Bot from 'bot';

Bot.start().catch((error) => {
    console.error(error);
    process.exit(1);
});
