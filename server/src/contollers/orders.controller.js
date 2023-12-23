import { getConnection, sql, queries } from "../database"; 

export const getOrders = async (req,res)=>{
    try {
        const pool = await getConnection()
        const result= await pool.request().query(queries.getAllOrders)

        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const addNewOrder = async (req, res) => {
  const { product_id } = req.body;
  const quantity = 1;
  if (product_id == null) {
      return res.status(400).json({ msg: 'Bad Request. Fill all fields' });
  }

  try {
      const pool = await getConnection();
      const result = await pool
          .request()
          .input('product', sql.Int, product_id)
          .query(queries.addNewOrder);

      
      res.json({ product_id, quantity });
  } catch (error) {
      res.status(500).send(error.message);
  }
};

  
export const deleteOrder = async (req,res)=>{
    const {id} = req.params
    const pool = await getConnection()
    const result = await pool.request()
    .input("id", id)
    .query(queries.deleteOrder)

    res.sendStatus(204)
}

export const clearCart = async (req,res)=>{
  const pool = await getConnection()
  const result = await pool.request()
  .query(queries.deleteCart)

  res.sendStatus(204)
}

export const updateOrderById = async (req,res)=>{
    try {
        const {id} = req.params
    const { quantity } = req.body;
  
    if (quantity == null) {
      return res.status(400).json({ msg: 'Bad Request. Fill all fields' });
    }

    const pool = await getConnection()
    const result = await pool.request()
    .input("id", id)
    .input("quantity",quantity)
    .query(queries.updateOrder)

    res.json({ id, quantity });
    } catch (error) {
        res.status(500).send(error.message);
    }
}