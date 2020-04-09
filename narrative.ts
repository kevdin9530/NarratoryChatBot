import { UserTurn, BotTurn, ANYTHING, EXIT, BridgeTurn, Content } from "narratory"
import * as nlu from "./nlu"
const config = require("../../config.json")

/* 
    Narrative, i.e the bot-driven interaction
*/


const greeting: BridgeTurn = {
  say: ["Hi there", "Greetings", "Hello"],
  set: {
    initial: true
  },
  bot: ["This is a survey system"]
}

export const InfoQuestion1:BotTurn={
  label:"Info1",
  say:[
    "Detta är en informationsfråga. Den innehåller en informationstext som exempelvis kan beskriva kommande frågor. Man kan inte svara på; denna frågan."
  ],
  goto:"First_Question"
}

const FirstQuestion: BotTurn ={
  label: "First_Question",
  say:[
   "Detta är en envalt fråga" 
  ],
  user: 
  [{
      intent: nlu.answerOneIntent,
      bot:{
        "say": "Du har valt _answer",
      set:{
        "QuestionID": "15118404-fc32-48a2-8012-874252d73984", 
        "AnswerID" : "_answer"
      },
      url: config.logWebhook,
      params: ["QuestionID", "AnswerID"],
      asyncWebhook: true,
      repair: true,
      goto: "Info2"
      }
  }]
}

const InfoQuestion2:BotTurn={
  label:"Info2",
  say:[
    "Detta är en informationsfråga. Den innehåller en informationstext som exempelvis kan beskriva kommande frågor. Man kan inte svara på; denna frågan."
  ],
  goto:"Second_Question"
}

const SecondQuestion: BotTurn ={
  label: "Second_Question",
  say:[
    "Detta är en flervalsfråga. Det innebär att man kan välja flera alternativ"
     ],
  user: 
  [{
      intent: nlu.answerTwoIntent,
      bot:{
        "say": "Thanks for your answer",
      set:{
        "QuestionID2": "9ea7301c-69ac-44d5-9686-fc3a015e8320", 
        "AnswerID2" : "_answer2"
      },
      url: config.logWebhook,
      params: ["QuestionID2", "AnswerID2"],
      asyncWebhook: true,
      repair: true,
      goto: "Info3"
      }
  }]
}
const InfoQuestion3:BotTurn={
  label:"Info3",
  say:[
    "Detta är en informationsfråga. Den innehåller en informationstext som exempelvis kan beskriva kommande frågor. Man kan inte svara på; denna frågan."
  ],
  goto:"Third_Question"
}

const ThirdQuestion: BotTurn ={
  label: "Third_Question",
  say:[
    "Detta är en fritextfråga. Det finns inga fördefinerade svar utan man får själv skriva in sitt svar." 
    ],
  user: 
  [{
      intent: ANYTHING,
      bot:{
        "say": "Du har svarat _user_text",
      set:{
        "QuestionID": "5da117a8-65d4-4541-9273-4ba66b04cf3c", 
        "AnswerID" : "_user_text"
      },
      url: config.logWebhook,
      params: ["QuestionID", "AnswerID"],
      asyncWebhook: true,
      repair: true,
      goto: "END"
      }
  }]
}


const goodbye: BotTurn = {
  label: "END",
  say: ["Thanks for today. Goodbye!", "Thanks, goodbye!"]
}

export class Button extends Content {
  type: "account_link"
  url: string
  
}
export const Jump =[InfoQuestion1]
export default [greeting, InfoQuestion1, FirstQuestion, InfoQuestion2, SecondQuestion, InfoQuestion3, ThirdQuestion, goodbye]
