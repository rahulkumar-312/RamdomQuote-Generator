let collection = [
    '“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.” —Mister Rogers',

    '“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.” —John Wooden',

    '“I never dreamed about success. I worked for it.” —Estée Lauder',

    '“Success is getting what you want, happiness is wanting what you get.” ―W. P. Kinsella',

    '“The best time to plant a tree was 20 years ago. The second best time is now.” ―Chinese Proverb',

    '“Only the paranoid survive.” —Andy Grove',

    '“Its hard to beat a person who never gives up.” —Babe Ruth',

    '“I wake up every morning and think to myself, How far can I push this company in the next 24 hours.’” —Leah Busque',

    '“If people are doubting how far you can go, go so far that you can’t hear them anymore.” —Michele Ruiz',

    '“We need to accept that we wont always make the right decisions, that we will screw up royally sometimes―understanding that failure is not the opposite of success, its part of success.” ―Arianna Huffington',

    '“Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.” —Joss Whedon',

    '“Everything you can imagine is real.”―Pablo Picasso',



]

let randomnumber = Math.floor(Math.random() * collection.length)

document.querySelector("button").innerText = collection[randomnumber];