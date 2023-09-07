import React from "react";
import BubbleScene from "./Bubble";
import GameSelection from "./GameSelection";


const gameList = () => {
    return(
        <div>
            <BubbleScene>
                <GameSelection/>
            </BubbleScene>
        </div>
    );
}
export default gameList;