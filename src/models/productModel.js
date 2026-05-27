
export class ProductModel {

    static async getAllProducts() {
        try {
            const result = await pool.query("SELECT * FROM product");
            return result.rows;
        } catch (error) {
            console.log(error);
        }
    }
    static async getProductById(id) {
        try {
            const result = await pool.query("SELECT * FROM product WHERE id = $1", [id]);
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
    }
    static async createProduct(product) {
        try {
            const result = await pool.query("INSERT INTO product (nombre, descripcion, precio, stock, imagen_url) VALUES ($1, $2, $3, $4, $5) RETURNING *", [product.nombre, product.descripcion, product.precio, product.stock, product.img_url]);
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
    }
    static async updateProduct(product) {
        try {
            const result = await pool.query("UPDATE product SET nombre = $1, precio = $2, descripcion = $3 WHERE id = $4 RETURNING *", [product.nombre, product.precio, product.descripcion, product.stock, product.img_url]);
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
    }
    static async deleteProduct(id) {
        try {
            const result = await pool.query("DELETE FROM product WHERE id = $1 RETURNING *", [id]);
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
    }
}