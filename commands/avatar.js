module.exports = {
  name: "avatar",
  description: "bring avatar of a user",
  execute(message, arg) {
    if (!message.mentions.users.size) {
      return message.channel.send(
        `Your avatar: <${message.author.displayAvatarURL({
          format: "png",
          dynamic: true
        })}>`
      );
    }

    const avatarList = message.mentions.users.map(user => {
      return `${user.username}'s avatar: <${user.displayAvatarURL({
        format: "png",
        dynamic: true
      })}>`;
    });
    // Send the entire array of strings as a message
    // By default, discord.js will `.join()` the array with `\n`
    message.channel.send(avatarList);
  }
};