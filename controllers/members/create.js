import Member from "../../models/Member.js";

let create = async (req, res, next) => {
    try {
        let member = req.body
        let all = await Member.create(member)
        return res.status(201).json({
            response:all
        })

    } catch(error){
        next(error)

    }
}

let createMany = async (req, res, next) => {
    try {
        let members = req.body;

        // Validar que req.body sea un arreglo
        if (!Array.isArray(members)) {
            next(error)
        }

        let all = await Member.insertMany(members);
        return res.status(201).json({
            response: all
        });
    } catch (error) {
        next(error)
    }
}

export {create,createMany}