import ProductRepository from "../repositories/product.repository.js"
import SupplierRepository from "../repositories/supplier.repository.js"
import SaleRepository from "../repositories/sale.repository.js"
import { Error } from "sequelize";
import ProductInfoRepository from "../repositories/productInfo.repository.js";

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
    const product = await ProductRepository.getProduct(id);
    product.info = await ProductInfoRepository.getProductInfo(parseInt(id));
    return product;
}

async function updateProduct(product){
    if(await SupplierRepository.getSupplier(product.supplierId)) {
        return await ProductRepository.updateProduct(product);
    }
    throw new Error("Supplier ID informado não existe!")  
}

async function deleteProduct(id){
    const sales = await SaleRepository.getSalesByProductId(id);
    if( sales.length > 0 ) {
        throw new Error("Não é possível excluir, pois já houve vendas com este produto!")
    }
    await ProductRepository.deleteProduct(id);
}

async function createProductInfo(productInfo){
    await ProductInfoRepository.createProductInfo(productInfo);
}

async function updateProductInfo(productInfo){
    await ProductInfoRepository.updateProductInfo(productInfo);
}

export default{
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    createProductInfo,
    updateProductInfo
}