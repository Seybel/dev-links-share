export const generateRandomId = (length = 7): string => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charLength = characters.length;
    let randId = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charLength);
      randId += characters[randomIndex];
    }
  
    return randId;
}