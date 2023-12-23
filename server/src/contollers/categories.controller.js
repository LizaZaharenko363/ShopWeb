import { getConnection, sql, queries } from "../database"; 

export const getCategories = async (req,res)=>{
    try {
        const pool = await getConnection()
        const result = await pool.request().query(queries.getAllCategories)

        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const getProductsByCategory = async (req,res)=>{
    try {
        const {id} = req.params
        const pool = await getConnection()
        const result = await pool.request().input("id", id).query(queries.getProductByCategory)

        res.json(result.recordset)
    } catch (error) {
        res.send(error.message)
    }
}

export const getCategoryById = async (req,res)=>{
    try {
        const {id} = req.params
        const pool = await getConnection()
        const result = await pool.request().input("id", id).query(queries.getCategory)

        res.json(result.recordset)
    } catch (error) {
        res.send(error.message)
    }
}