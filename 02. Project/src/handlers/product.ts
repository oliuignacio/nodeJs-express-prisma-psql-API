import prisma from "../db";

// Get all
export const getAllProducts = async (req, res) => {
  //look schema, there are two ways, you can go to user and get the aeeay of products
  // or go to products and find every product with belongsToId === userId
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id
    },
    include: {
      products: true //in sql this ensures that the products are joint
      // in mongodb would be a population
    }
  })
  res.json({data: user.products})
}

export const getOneProduct = async (req, res) => {
  const id = req.params.id
  // now we need to check if teheres a product with this id and belongsto user
    
  const product = await prisma.product.findFirst({ //if product && userid was indexed we could search with findUnique
    where: {
      id,
      belongsToId: req.user.id,
    }
  })

  res.json({data: product})
}

