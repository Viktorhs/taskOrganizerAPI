import Joi from "joi";

const taskSchema = Joi.object({
    task: Joi.string().required(),
    description: Joi.string(),
    day: Joi.date().iso().required(),
    responsible: Joi.number().required(),
})

export{
    taskSchema
}