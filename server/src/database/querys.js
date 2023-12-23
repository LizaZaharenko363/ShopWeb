export const queries = {
    getAllProducts: 'SELECT * FROM Products',
    addNewProduct: 'INSERT INTO Products (product_name, category_id, description, quantity) VALUES (@name, @category,@description, @quantity)',
    getProductById: 'SELECT * FROM Products Where product_id = @id',
    deleteProduct: 'DELETE FROM [Shop].[dbo].[Products] Where product_id = @id',
    getAllCategories: 'SELECT * FROM Category',
    getProductByCategory: 'SELECT * From Products WHERE category_id = @id',
    getCategory: 'SELECT * FROM Category WHERE category_id=@id',
    getAllOrders:'SELECT * From Orders',
    addNewOrder:'INSERT INTO Orders (product_id) SELECT @product WHERE NOT EXISTS (SELECT * FROM Orders WHERE product_id = @product)',
    deleteOrder: 'DELETE FROM [Shop].[dbo].[Orders] Where order_id = @id',
    updateOrder:'UPDATE Orders SET quantity = @quantity WHERE order_id = @id',
    deleteCart:'DELETE From Orders',
    getAllComments:'SELECT * From Comments Where product_id = @product_id',
    createNewComment: 'INSERT INTO Comments (comment,product_id) VALUES (@comment,@product_id)',
    deleteComment:'DELETE From [Shop].[dbo].[Comments] Where comment_id = @comment_id'
}