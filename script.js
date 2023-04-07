var words = [
    "Believe in yourself, and anything is possible.",
    "Believe in yourself, and you can accomplish anything.",
    "Believe in yourself, and you can achieve anything.",
    "Believe in yourself, and you can do anything.",
    "Don't be afraid to take risks and try new things.",
    "Don't give up, great things take time!",
    "Don't give up, you are closer than you think.",
    "Don't give up, you are stronger than you think.",
    "Don't let fear hold you back from reaching your full potential.",
    "Every day is a new opportunity to be better than yesterday.",
    "Keep going, you are on the right path.",
    "You are a beacon of light in the darkness.",
    "You are a blessing to those who know you, and you are loved.",
    "You are a fighter, and you will overcome any obstacle.",
    "You are a gift to the world, and you have so much to offer.",
    "You are a leader, and you can make a difference in the world.",
    "You are a masterpiece, a work of art.",
    "You are a problem solver, and you can find solutions to any challenge.",
    "You are a source of inspiration to those around you.",
    "You are a source of strength and inspiration for others.",
    "You are a survivor, and you have overcome so much already.",
    "You are a survivor, and you will get through this.",
    "You are a valuable and important person.",
    "You are a valuable member of your community.",
    "You are a wonderful person, inside and out.",
    "You are a work in progress, and that's okay.",
    "You are amazing, and you deserve to be happy.",
    "You are amazing, and you have so much to offer.",
    "You are amazing, just the way you are.",
    "You are an important part of the world, and you make a difference.",
    "You are an inspiration to others.",
    "You are an original, and that is something to be celebrated.",
    "You are brave, and you can face any challenge with courage.",
    "You are braver than you think.",
    "You are capable of achieving balance and harmony in your life.",
    "You are capable of achieving greatness, and you will.",
    "You are capable of achieving greatness.",
    "You are capable of achieving happiness and fulfillment.",
    "You are capable of achieving success on your own terms.",
    "You are capable of achieving your dreams, no matter how big they may seem.",
    "You are capable of achieving your dreams.",
    "You are capable of achieving your goals and dreams, one step at a time.",
    "You are capable of achieving your goals and dreams.",
    "You are capable of amazing things!",
    "You are capable of greatness, so never settle for less.",
    "You are capable of making a difference in the world.",
    "You are capable of making a positive impact in the world.",
    "You are capable of overcoming any challenge that comes your way.",
    "You are capable of overcoming any obstacle.",
    "You are deserving of happiness and success.",
    "You are enough, just as you are.",
    "You are important and have a purpose in life.",
    "You are loved and appreciated for who you are.",
    "You are loved and appreciated.",
    "You are loved, and you matter.",
    "You are making progress, even if it doesn't feel like it.",
    "You are not alone, there are people who care about you.",
    "You are not alone, we are all in this together.",
    "You are strong and capable.",
    "You are stronger than you know.",
    "You are talented and creative.",
    "You are unique and special in your own way.",
    "You are unique and special, and that's what makes you great.",
    "You are unstoppable, and you will achieve your goals and dreams.",
    "You are worthy and deserving of love and happiness.",
    "You are worthy of respect and kindness.",
    "You have the ability to overcome any obstacle.",
    "You have the potential to do great things!",
    "You have the power to change your life for the better, starting now.",
    "You have the power to change your life for the better.",
    "You have the power to create the life you want to live.",
    "You have the power to create the life you want.",
    "You have the power to inspire and uplift those around you.",
    "You have the power to make your dreams a reality.",
    "You have the strength to face any challenge.",
    "You have the strength to overcome any challenge.",
    "Your creativity and imagination are powerful tools.",
    "Your determination and hard work will lead you to success.",
    "Your determination and perseverance will lead you to victory.",
    "Your determination will lead you to success.",
    "Your generosity and kindness make the world a better place.",
    "Your hard work and dedication will lead you to success, no matter what.",
    "Your hard work and dedication will lead you to success.",
    "Your hard work and dedication will pay off in the end.",
    "Your hard work and dedication will pay off.",
    "Your hard work will pay off in the end.",
    "Your kindness and compassion make the world a better place.",
    "Your life has meaning and purpose, and you are fulfilling your destiny.",
    "Your life has meaning and purpose.",
    "Your mistakes do not define you.",
    "Your persistence and determination will help you achieve your goals.",
    "Your positive attitude and outlook will take you far in life.",
    "Your positive attitude will take you far in life.",
    "Your positivity and optimism are contagious.",
    "Your potential is limitless, and your possibilities are endless.",
    "Your strength and resilience will help you get through anything.",
    "Your strength and resilience will help you overcome any challenge.",
    "Your talents and skills make you a valuable member of society.",
    "Your unique qualities make you special and important.",
];

function changeWords() {
    var randWords = words[Math.floor(Math.random() * words.length)];
    document.getElementById("randWords").innerHTML = randWords;
}