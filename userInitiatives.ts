import { UserTurn, ANYTHING } from "narratory"
import * as narrative from "./narrative"

/*
    Questions and other user-driven initiatives
*/

const nameQuery: UserTurn = {
    intent: ["Hi", "Hello", "Yes?", "What are you doing?","Anybody there?"],
        bot: {
            say:"Oh hello there!",
            goto: "Info1"
            }

}


export default [nameQuery]