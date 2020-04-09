import { Entity, Intent, entities, RichSay, Item, Content,Image } from "narratory"

export const Yes : Intent = {
  examples: ["Yes", "yep", "absolutely", "correct", "that is right", "right", "okay"]
}

export const No : Intent = {
  examples: ["no", "nope", "wrong", "not right", "nothing"]
}

export const answerOne: Entity = {
  name: "answerOne",
  enums:[
    {name: "79614c46-a4ba-4c6d-ac16-8d26b9078935", alts:["alternative 1", "1", "number 1", "one"]},
    {name: "64ddf765-8ad4-431c-bd68-b28f54473802", alts:["alternative 2", "2", "number 2", "two"]},
    {name: "c5c7fe7c-09e5-4921-ab54-b692044efb37", alts:["alternative 3", "3", "number 3", "three"]},
    {name: "8807bd4e-780b-4f3a-819e-789887bb56df", alts:["alternative 4", "4", "number 4", "four"]},
    {name: "cd347fa2-4d16-4a1e-8e2c-79c43978d435", alts:["alternative 5", "5", "number 5", "five"]}
  ]
}

export const answerOneIntent: Intent = {
  entities: {
    answer: answerOne,
  },
  examples: [
    "I think _answer",
    "_answer",
    "I choose _answer",
    "_answer is my final answer"
  ]
}

export const answerTwo: Entity = {
  name: "answerTwo",
  enums:[
    {name: "3e4e008a-b102-43ef-8668-86377f00ca49", alts:["alternative 1", "1", "number 1", "one"]},
    {name: "3a33ba29-e383-43ba-b9c5-2535381f155b", alts:["alternative 2", "2", "number 2", "two"]},
    {name: "14cc2daa-57cb-4728-b350-f50f93f10a5d", alts:["alternative 3", "3", "number 3", "three"]},
    {name: "983c5f8e-3c95-4049-be9a-57809697092d", alts:["alternative 4", "4", "number 4", "four"]},
    {name: "b3651d2a-b92b-4274-89c1-56daf1ddc325", alts:["alternative 5", "5", "number 5", "five"]}
  ]
}

export const answerTwoIntent: Intent = {
  entities: {
    answer2: answerTwo,
  },
  examples: [
    "I think _answer2",
    "_answer2",
    "I choose _answer2",
    "I choose _answer2 and _answer2",
    "_answer2 is my final answer",
    "_answer2 and _answer2",
    "_answer2, _answer2 and _answer2",
    "_answer2, _answer2, _answer2 and _answer2",
    "_answer2, _answer2, _answer2, _answer2 and _answer2",
    "_answer2 _answer2 _answer2 _answer2 _answer2",
    "_answer2 _answer2 _answer2 _answer2"
  ]
}


export const problemArea : Entity = {
  name: "ProblemArea",
  enums: [
    { name: "order", alts: ["purchase", "item I bought", "purchased item", "ordered item"]},
    { name: "payment", alts: ["invoice", "credit card"]},
  ]
}

export const queryProblem : Intent = {
  entities: {
    problem: problemArea,
    identifier: entities.numberSequence
  },
  examples: [
    "I have a question about my _problem",
    "I have a problem with my _problem",
    "I have problems with my _problem",
    "I have problems with my _problem with id _identifier",
    "questions about _problem",
    "I wanna talk about _problem",
    "my _problem has a problem",
    "my _problem has issues",
    "I have issues with my _problem",
    "issues with my _problem",
    "issue with my _problem",
    "with my _problem",
    "_problem",
    "problem with my _problem"
  ]
}



export class List1 extends Content {
  items: string[] = ["Alternative 1","Alternative 2","Alternative 3","Alternative 4","Alternative 5"];
  title?: string
  image?: Image
}