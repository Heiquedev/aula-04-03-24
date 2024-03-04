import { Level } from "./enum";

export class Survivor{
    protected level: Level

constructor (level: Level = Level.Blue){
    this.level = level


}
getLevel():Level {
    return this.level

}

levelUp():Level | null{

const nextLevel = this.getLevel()

if (nextLevel !== null) {
    this.level = nextLevel;
    return this.level

} else {
    console.log("Não há outro nível disponível");
    return null
    
}

}

private nextLevel (): Level | null{

    switch (this.level) {
        case Level.Blue:
            return Level.Yellow

        case Level.Yellow:
            return Level.Orange

        case Level.Orange:
            return Level.Red

        case Level.Red:
           return null
    }


}

}


