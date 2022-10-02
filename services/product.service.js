import ProductRepository from "../repositories/product.repository.js"
import SupplierRepository from "../repositories/supplier.repository.js"
import SaleRepository from "../repositories/sale.repository.js"
import { Error } from "sequelize";

async function createProduct(product){
    if(await SupplierRepository.getSupplier(product.supplierId)) {
        return await ProductRepository.insertProduct(product);
    }
    throw new Error("Supplier ID informado não existe!")    
}

async function getProducts(){
    return await ProductRepository.getProducts();
}

async function getProduct(id){
    return await ProductRepository.getProduct(id);
}

async function updateProduct(product){
    if(await SupplierRepository.getSupplier(product.supplierId)) {
        return await ProductRepository.updateProduct(product);
    }
    throw new Error("Supplier ID informado não existe!")  
}

async function deleteProduct(id){
    const sales = await SupplierRepository.getSupplier(product.supplierId);
    if( sales ) {
        throw new Error("Não é possível excluir, pois já houve vendas com este produto!")
    }
    await ProductRepository.deleteProduct(id);
}

export default{
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}