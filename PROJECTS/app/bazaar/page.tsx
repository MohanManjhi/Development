"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Star, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const products = [
  {
    id: 1,
    name: "Brass Puja Thali Set",
    description: "Complete set for daily rituals",
    price: 1299,
    rating: 4.5,
    reviews: 128,
    category: "Puja Items",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Sandalwood Incense Sticks",
    description: "Pack of 20 premium sticks",
    price: 199,
    rating: 4.8,
    reviews: 256,
    category: "Incense",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Bhagavad Gita - Hardcover",
    description: "With Sanskrit text and English translation",
    price: 499,
    rating: 5.0,
    reviews: 312,
    category: "Books",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Silver Lakshmi Idol",
    description: "Handcrafted 4-inch silver statue",
    price: 3999,
    rating: 4.7,
    reviews: 89,
    category: "Idols",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Cotton Puja Asana Mat",
    description: "Traditional design, washable",
    price: 349,
    rating: 4.3,
    reviews: 76,
    category: "Puja Items",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Diwali Decoration Lights",
    description: "LED string lights, 5 meters",
    price: 599,
    rating: 4.6,
    reviews: 154,
    category: "Decor",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const categories = ["All Categories", "Puja Items", "Books", "Incense", "Idols", "Decor"]

export default function BazaarPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [quantity, setQuantity] = useState(1)
  const [cartItems, setCartItems] = useState<number[]>([])

  const addToCart = (productId: number) => {
    if (!cartItems.includes(productId)) {
      setCartItems([...cartItems, productId])
    }
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="container py-8 space-y-6 mb-16 md:mb-0">
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className="text-orange-500">🛒</span> Hindu Bazaar
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="aspect-square relative">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-2 right-2 bg-orange-500">{product.category}</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-base">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{product.description}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-lg font-bold">₹{product.price}</p>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                  <span className="text-sm ml-1">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setSelectedProduct(product)
                      setQuantity(1)
                    }}
                  >
                    View Details
                  </Button>
                </DialogTrigger>
                {selectedProduct && (
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>{selectedProduct.name}</DialogTitle>
                      <DialogDescription>{selectedProduct.category}</DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="aspect-square">
                        <img
                          src={selectedProduct.image || "/placeholder.svg"}
                          alt={selectedProduct.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">{selectedProduct.description}</p>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                          <span className="text-sm ml-1">
                            {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                          </span>
                        </div>
                        <p className="text-2xl font-bold">₹{selectedProduct.price}</p>
                        <Separator />
                        <div className="space-y-2">
                          <p className="font-medium">Quantity</p>
                          <div className="flex items-center">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center">{quantity}</span>
                            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        className="w-full bg-orange-500 hover:bg-orange-600"
                        onClick={() => addToCart(selectedProduct.id)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart - ₹{selectedProduct.price * quantity}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                )}
              </Dialog>
              <Button
                variant="default"
                size="icon"
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => addToCart(product.id)}
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div className="fixed bottom-20 md:bottom-4 right-4 z-10">
          <Button className="bg-orange-500 hover:bg-orange-600" asChild>
            <Link href="/bazaar/cart">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart ({cartItems.length})
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}
