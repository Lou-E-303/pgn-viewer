const pgnTextEl = document.querySelector('.pgn');

document.querySelector('.render').addEventListener('click', render);

function render() {
    LichessPgnViewer(
        document.querySelector('.lpv'), {
            pgn: pgnTextEl.value,
            orientation: 'black',
            showPlayers: false,
            showMoves: false,
            showClocks: false,
            // showControls: false,
            scrollToMove: false,
            drawArrows: true,
        }
    );
}
