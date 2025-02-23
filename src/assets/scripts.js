// Event listener for parallax effect
document.addEventListener('mousemove', (e) => {
    const walls = document.getElementById('walls');
    const screenCards = document.getElementById('screenCards');
    const bogoParche = document.getElementById('bogoParche');
    const desk = document.getElementById('desk');
    const computer = document.getElementById('computer');
    const piano = document.getElementById('piano');
    const globe = document.getElementById('globe');
    const tables = document.getElementById('tables');
    const card = document.getElementById('card');
    const photo = document.getElementById('photo');
    const sofa = document.getElementById('sofa');

    const screenCardsArea = document.getElementById('screenCardsArea');
    const bogoParcheArea = document.getElementById('bogoParcheArea');
    const computerArea = document.getElementById('computerArea');
    const pianoArea = document.getElementById('pianoArea');
    const globeArea = document.getElementById('globeArea');
    const cardArea = document.getElementById('cardArea');
    const photoArea = document.getElementById('photoArea');

    // Get the x-coordinate of the mouse position and the screen width
    const mouseX = e.clientX;
    const screenWidth = window.innerWidth;

    const mouseY = e.clientY;
    const screenHeight = window.innerHeight;

    // Set the left position of every layer
    walls.style.left = `calc(50% + ${-20 * (mouseX / screenWidth)}px)`;

    screenCardsArea.style.left = `calc(50% + ${-20 * (mouseX / screenWidth)}px)`;
    screenCards.style.left = `calc(50% + ${-20 * (mouseX / screenWidth)}px)`;

    bogoParcheArea.style.left = `calc(50% + ${-20 * (mouseX / screenWidth)}px)`;
    bogoParche.style.left = `calc(50% + ${-20 * (mouseX / screenWidth)}px)`;

    desk.style.left = `calc(50% + ${-30 * (mouseX / screenWidth)}px)`;

    computerArea.style.left = `calc(50% + ${-30 * (mouseX / screenWidth)}px)`;
    computer.style.left = `calc(50% + ${-30 * (mouseX / screenWidth)}px)`;

    pianoArea.style.left = `calc(50% + ${-40 * (mouseX / screenWidth)}px)`;
    piano.style.left = `calc(50% + ${-40 * (mouseX / screenWidth)}px)`;

    globeArea.style.left = `calc(50% + ${-50 * (mouseX / screenWidth)}px)`;
    globe.style.left = `calc(50% + ${-50 * (mouseX / screenWidth)}px)`;

    tables.style.left = `calc(50% + ${-70 * (mouseX / screenWidth)}px)`;

    cardArea.style.left = `calc(50% + ${-70 * (mouseX / screenWidth)}px)`;
    card.style.left = `calc(50% + ${-70 * (mouseX / screenWidth)}px)`;

    photoArea.style.left = `calc(50% + ${-70 * (mouseX / screenWidth)}px)`;
    photo.style.left = `calc(50% + ${-70 * (mouseX / screenWidth)}px)`;

    sofa.style.left = `calc(50% + ${-90 * (mouseX / screenWidth)}px)`;

    // Set the top position of every layer
    walls.style.top = `calc(50% + ${-5 * (mouseY / screenHeight)}px)`;

    screenCardsArea.style.top = `calc(50% + ${-5 * (mouseY / screenHeight)}px)`;
    screenCards.style.top = `calc(50% + ${-5 * (mouseY / screenHeight)}px)`;

    bogoParcheArea.style.top = `calc(50% + ${-5 * (mouseY / screenHeight)}px)`;
    bogoParche.style.top = `calc(50% + ${-5 * (mouseY / screenHeight)}px)`;

    desk.style.top = `calc(50% + ${-10 * (mouseY / screenHeight)}px)`;

    computerArea.style.top = `calc(50% + ${-10 * (mouseY / screenHeight)}px)`;
    computer.style.top = `calc(50% + ${-10 * (mouseY / screenHeight)}px)`;

    pianoArea.style.top = `calc(50% + ${-15 * (mouseY / screenHeight)}px)`;
    piano.style.top = `calc(50% + ${-15 * (mouseY / screenHeight)}px)`;

    globeArea.style.top = `calc(50% + ${-20 * (mouseY / screenHeight)}px)`;
    globe.style.top = `calc(50% + ${-20 * (mouseY / screenHeight)}px)`;

    tables.style.top = `calc(50% + ${-25 * (mouseY / screenHeight)}px)`;

    cardArea.style.top = `calc(50% + ${-25 * (mouseY / screenHeight)}px)`;
    card.style.top = `calc(50% + ${-25 * (mouseY / screenHeight)}px)`;

    photoArea.style.top = `calc(50% + ${-25 * (mouseY / screenHeight)}px)`;
    photo.style.top = `calc(50% + ${-25 * (mouseY / screenHeight)}px)`;

    sofa.style.top = `calc(50% + ${-30 * (mouseY / screenHeight)}px)`;
});