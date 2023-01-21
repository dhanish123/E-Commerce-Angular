//import db

const db= require('./db')

//get all products from the database

const getAllProducts=()=>{
    // to fetch all products from mongodb
  return  db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    Products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'Product not found'
                }
            }
        }
     )
}

//addwishlist
const addtowishlist=(id,title,price,description,image)=>{
return db.Wishlist.findOne({id}).then(
    (result)=>{
        if(result){
            return{
                status:false,
                statusCode:401,
                message:'product already exist'
            }
        }
        else{
            const newProduct=new db.Wishlist({
                id,
                title,
                price,
                description,
                image
            })
            newProduct.save()
            return{
                status:true,
                statusCode:200,
                message:'product added sucessfully'
        }
    }}
)
}

//get wishlist product

const getwishlist =()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:'your wishlist is Empty'
                } 
            }
        }
    )
}
const deleteitem=(id) =>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                // return{
                //     status:true,
                //     statusCode:200,
                //    wishlist:result,
                //    message:"Product Removed"
                // }
            }
            return db.Wishlist.find().then(
                (result)=>{
                    if(result){
                        return{
                            status:true,
                            statusCode:200,
                            wishlist:result,
                            message:"Product Removed Successfully"
                        }
                    }
                    else{
                        return{
                            status:false,
                            statusCode:401,
                            message:'Product not found'
                        } 
                    }
                }
            )
        }
    )

}
module.exports={
    getAllProducts,
    addtowishlist,
    getwishlist,
    deleteitem

}