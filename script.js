window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');

    // resizing
    
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

   
    // adding/filling canvas fillRect(x,y,w,h)
    context.fillRect(50, 50, 100, 100);
    context.fillRect(350, 50, 100, 100);
    context.fillRect(290, 400, 100, 100);
    
    context.strokeStyle = 'red'
    context.strokeRect(130, 180, 200, 200);
    context.strokeStyle = 'blue';
    context.lineWidth = 4;
    context.strokeRect(230, 190, 200, 200);

    // triangle 
    context.strokeStyle = 'green';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(20, 190);
    context.lineTo(20, 250);
    context.lineTo(50, 250);
    context.closePath();
    context.stroke();
   

    // variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e); // to be able to do dots
    }
    function finishedPosition() {
        painting = false;
        context.beginPath(); // we need this here so that the line doesent connect to itself once we stop/start
    }

    function draw(e) {
        if (!painting) return;
        context.lineWidth = 3;
        context.lineCap = 'round';
        context.strokeStyle = 'blue';
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath(); // added just for smoothness
        context.moveTo(e.clientX, e.clientY); // added just for smoothness

    }

    //eventListeners

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
   
});

