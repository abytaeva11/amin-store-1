import {Game1Module, Game2Module, Game3Module} from "./modules";
import "src/styles/section.scss"
import "./index.scss";

export const GamePage = () => {


  return (
    <div className="">
      <Game1Module />
        <Game2Module/>
      <Game3Module />
    </div>
  );
};
