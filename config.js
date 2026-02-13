// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Sayangku kelaa",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Sayang mau gak jadi valentinenya abanggg? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Sayangg, suka gak sama abangg?",                                    // First interaction
            yesBtn: "Iyaaaaa",                                             // Text for "Yes" button
            noBtn: "Emoh",                                               // Text for "No" button
            secretAnswer: "Bukan sekedar suka, TAPI CINTAAA BANGET! ❤️"           // Secret hover message
        },
        second: {
            text: "Seberapa cinta Kela ke abangg?",                          // For the love meter
            startText: "Sebesar INIIIII!",                                   // Text before the percentage
            nextBtn: "Lanjut ❤️"                                         // Text for the next button
        },
        third: {
            text: "Sayang mau jadi Valentinenya abang di tanggal 14? 🌹", // The big question!
            yesBtn: "MAUUUU!",                                             // Text for "Yes" button
            noBtn: "gak"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW Sayang secinta itu ya sama abangg?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "MENUJU TAK TERBATAS DAN MELAMPAUINYA! 🚀💝",              // Shows when they go past 1000%
        normal: "CINTAA TERUSS TERUSAN! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Abang merasa orang yang paling beruntung di duniaaa! 🎉💝💖💝💓",
        message: "MAKASIH YA SAYANGGG UDAH MILIH ABANG JADI PASANGAN KELAA!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },
    
    music: {
    enabled: true, // Music feature is enabled
    autoplay: true, // Try to autoplay (note: some browsers may block this)
    musicUrl: "https://res.cloudinary.com/dkel2bnjn/video/upload/v1770991205/Stephen_Sanchez_-_Until_I_Found_You_Official_Video_obzr3n.mp3", // Paste your music URL here
    startText: "🎵 Play Music", // Button text to start music
    stopText: "🔇 Stop Music", // Button text to stop music
    volume: 1.0 // Volume level (0.0 to 1.0)
}
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
