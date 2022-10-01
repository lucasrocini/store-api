import SaleRepository from "../repositories/sale.repository.js"
import ClientRepository from "../repositories/client.repository.js"
import ProductRepository from "../repositories/product.repository.js"

async function createSale(sale){
    let error = "";
    if(! await ClientRepository.getClient(sale.client_id)) {
        error = "Client ID informado não existe!";
    }  
    const product = await ProductRepository.getProduct(sale.product_id);
    if(!product) {
        error += "Product ID informado não existe!";
    }     
    if(error) {
        throw new Error(error);
    }

    
   if(product.stock > 0 ) {
        sale =  await SaleRepository.insertSale(sale);
        product.stock--;
        await ProductRepository.updateProduct(product);
        return sale;
   } else {
    throw new Error("O produto informado não possui estoque");
   }
}

async function getSales(){
    return await SaleRepository.getSales();
}

async function getSale(id){
    return await SaleRepository.getSale(id);
}

async function updateSale(sale){
    let error = "";
    if(! await ClientRepository.getClient(sale.client_id)) {
        error = "Client ID informado não existe!";
    }  
    if(! await ProductRepository.getProduct(sale.product_id)) {
        error += "Product ID informado não existe!";
    }     
    if(error) {
        throw new Error(error);
    }
    return await SaleRepository.updateSale(sale);
}

async function deleteSale(id){
    await SaleRepository.deleteSale(id);
}

export default{
    createSale,
    getSales,
    getSale,
    updateSale,
    deleteSale
}