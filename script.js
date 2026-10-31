
const envelope = document.getElementById("envelope");
const entrancePage = document.getElementById("entrance-page");
const website = document.getElementById("website");
const clickHint = document.getElementById("click-hint");

let envelopeOpened = false;
let pageHistory = [];

function showPage(pageId) {
  const currentPage = document.querySelector(".page.active");

  if (currentPage && currentPage.id !== pageId) {
    pageHistory.push(currentPage.id);
  }

  switchPage(pageId);
}

function switchPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const targetPage = document.getElementById(pageId);

  if (targetPage) {
    targetPage.classList.remove("active");

    // Restart page entrance animation
    void targetPage.offsetWidth;

    targetPage.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function goBack() {
  if (pageHistory.length === 0) return;

  const previousPage = pageHistory.pop();
  switchPage(previousPage);
}

// Envelope interaction
envelope.addEventListener("click", () => {
  if (!envelopeOpened) {
    envelope.classList.add("opened");
    clickHint.textContent = "Tap once more to enter ♡";
    envelopeOpened = true;
  } else {
    entrancePage.classList.add("fade-out");

    setTimeout(() => {
      entrancePage.classList.add("hidden");
      website.classList.remove("hidden");
      switchPage("home");
    }, 800);
  }
});

// Homepage feature cards
document.querySelectorAll("[data-page]").forEach(card => {
  card.addEventListener("click", () => {
    showPage(card.dataset.page);
  });
});

// Back buttons
document.querySelectorAll(".back-button").forEach(button => {
  button.addEventListener("click", goBack);
});


// OPEN WHEN LETTERS

const letters = {
  miss: {
    title: "When You Miss Me ♡",
    body: [
      "Hi, sayang.",
      "Missing me already? Hehe. I wish I could be there right now, give you a big hug, and tell you everything is okay.",
      "Even when we're not in the same place, please remember that you're always somewhere in my thoughts. Distance doesn't make you any less loved.",
      "I hope we get to see each other soon. Until then, imagine me giving you the warmest hug ever.",
      "I miss you too, more than you know."
    ]
  },

  sad: {
    title: "When You're Feeling Sad",
    body: [
      "Hey, my love.",
      "First of all, it's okay to feel sad. You don't have to pretend to be okay all the time, especially not with me.",
      "You don't need to figure everything out today. Take a breath, rest for a little while, and be gentle with yourself.",
      "I might not always know the perfect words to make things better, but I will always want to listen. You don't have to go through everything alone.",
      "I love you, even on the days when you don't feel like your best self."
    ]
  },

  "bad-day": {
    title: "After a Bad Day",
    body: [
      "Hi, sayang.",
      "So today wasn't exactly your day, huh?",
      "I just want you to know that one bad day doesn't mean you have a bad life. You did what you could, and that is enough for today.",
      "Please get some rest, eat something nice, and don't be too hard on yourself.",
      "Tomorrow is a new page. And whatever happens, I'm always cheering for you."
    ]
  },

  sleep: {
    title: "When You Can't Sleep 🌙",
    body: [
      "Hello, sleepyhead.",
      "If you're reading this late at night, I hope you know that you deserve a peaceful rest.",
      "For now, let the worries wait until tomorrow. You don't have to solve everything tonight.",
      "Close your eyes, take a deep breath, and imagine a warm hug from me.",
      "Good night, sayang. Sweet dreams. I hope I get to be part of them."
    ]
  },

  insecure: {
    title: "When You Doubt Yourself",
    body: [
      "Hey, beautiful.",
      "I wish you could see yourself through my eyes, even just for a moment.",
      "You are so much more than your achievements, your appearance, or the things you think you should have done better.",
      "You don't have to be perfect to be wonderful. You already are, simply by being you.",
      "Please don't forget how special you are. I'm so proud of you."
    ]
  },

  happy: {
    title: "When You're Happy ☀️",
    body: [
      "HIIII SAYANGGG!",
      "You're happy!! And that makes me happy too.",
      "I hope you enjoy every second of this moment. Celebrate the little wins, the big wins, and everything in between.",
      "I wish I could see your smile right now. I bet it's the prettiest thing ever.",
      "May you have many, many more days like this. You deserve all the happiness in the world."
    ]
  },

  angry: {
    title: "When You're Upset With Me",
    body: [
      "Hi, sayang.",
      "If you're reading this because I upset you, I'm sorry. I never want you to feel like your feelings don't matter.",
      "I know we won't always agree on everything, and we won't always get things right. But I hope we can keep choosing to understand each other.",
      "Take the time you need. When you're ready, I want to listen, understand, and make things better together.",
      "I love you. Even when things are a little difficult, I still choose us."
    ]
  },

  love: {
    title: "When You Need to Feel Loved ♡",
    body: [
      "My dearest sayang,",
      "In case nobody has reminded you today: you are loved. So, so loved.",
      "I love your little habits, your laugh, your stories, your random thoughts, and all the tiny things that make you who you are.",
      "You don't need a special reason to deserve love. You don't need to do anything extra to earn mine.",
      "I hope this letter makes you feel even a little bit of the love I have for you."
    ]
  }
};

const lettersGrid = document.querySelector(".letters-grid");
const letterReading = document.getElementById("letter-reading");
const letterTitle = document.getElementById("letter-title");
const letterLabel = document.getElementById("letter-label");
const letterBody = document.getElementById("letter-body");
const letterBack = document.getElementById("letter-back");

document.querySelectorAll(".letter-card").forEach(card => {
  card.addEventListener("click", () => {
    const letter = letters[card.dataset.letter];

    if (!letter) return;

    letterTitle.textContent = letter.title;
    letterLabel.textContent = "A LITTLE LETTER FOR YOU";

    letterBody.replaceChildren();

    letter.body.forEach(paragraph => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      letterBody.appendChild(p);
    });

    lettersGrid.classList.add("hidden");
    letterReading.classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

letterBack.addEventListener("click", () => {
  letterReading.classList.add("hidden");
  lettersGrid.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
});

// OUR SOUNDTRACK PLAYER

const soundtrack = [
  {
    title: "Coming Up Roses",
    artist: "Harry Styles",
    file: "music/Coming%20Up%20Roses.mp3"
  },
  {
    title: "Turning Page",
    artist: "Sleeping At Last",
    file: "music/Turning%20Page.mp3"
  }
];

const audio = document.getElementById("soundtrack-audio");
const vinyl = document.getElementById("vinyl");
const playButton = document.getElementById("music-play");
const prevButton = document.getElementById("music-prev");
const nextButton = document.getElementById("music-next");
const progress = document.getElementById("music-progress");
const currentTimeText = document.getElementById("music-current");
const durationText = document.getElementById("music-duration");
const musicTitle = document.getElementById("music-title");
const musicArtist = document.getElementById("music-artist");
const playlistButtons = document.querySelectorAll(".playlist-song");

let currentTrack = 0;

function formatMusicTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function loadTrack(index, shouldPlay = false) {
  currentTrack = index;
  const track = soundtrack[currentTrack];

  audio.pause();
  audio.src = track.file;
  audio.load();

  musicTitle.textContent = track.title;
  musicArtist.textContent = track.artist;

  progress.value = 0;
  currentTimeText.textContent = "0:00";
  durationText.textContent = "0:00";

  playlistButtons.forEach((button, i) => {
    button.classList.toggle("active", i === currentTrack);
  });

  playButton.textContent = "▶";
  playButton.setAttribute("aria-label", "Play");
  vinyl.classList.remove("playing");

  if (shouldPlay) {
    playMusic();
  }
}

function playMusic() {
  audio.play().then(() => {
    playButton.textContent = "Ⅱ";
    playButton.setAttribute("aria-label", "Pause");
    vinyl.classList.add("playing");
  }).catch(() => {
    playButton.textContent = "▶";
    vinyl.classList.remove("playing");
  });
}

function pauseMusic() {
  audio.pause();
  playButton.textContent = "▶";
  playButton.setAttribute("aria-label", "Play");
  vinyl.classList.remove("playing");
}

playButton.addEventListener("click", () => {
  if (audio.paused) {
    playMusic();
  } else {
    pauseMusic();
  }
});

prevButton.addEventListener("click", () => {
  const previous = (currentTrack - 1 + soundtrack.length) % soundtrack.length;
  loadTrack(previous, true);
});

nextButton.addEventListener("click", () => {
  const next = (currentTrack + 1) % soundtrack.length;
  loadTrack(next, true);
});

playlistButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTrack = Number(button.dataset.track);
    loadTrack(selectedTrack, true);
  });
});

audio.addEventListener("loadedmetadata", () => {
  durationText.textContent = formatMusicTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  if (!Number.isFinite(audio.duration) || audio.duration === 0) return;

  progress.value = (audio.currentTime / audio.duration) * 100;
  currentTimeText.textContent = formatMusicTime(audio.currentTime);
});

progress.addEventListener("input", () => {
  if (!Number.isFinite(audio.duration) || audio.duration === 0) return;

  audio.currentTime = (Number(progress.value) / 100) * audio.duration;
});

audio.addEventListener("ended", () => {
  pauseMusic();
  progress.value = 100;
  currentTimeText.textContent = formatMusicTime(audio.duration);
});

// Load the opening song without autoplay
loadTrack(0);