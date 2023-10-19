import React, { useEffect, useState } from 'react'
import MyContext from './myContext';
import { toast } from 'react-toastify';
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query,doc,deleteDoc,setDoc } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';

function MyState(props) {
  const [mode,setMode]=useState('light')
  // this is the loading state
  const [loading,setLoading]=useState(false)


  const toggleMode =()=>{
    if(mode=='light'){
      setMode('dark')
      document.body.style.backgroundColor='rgb(17, 24, 39)'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }



  // product 
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })
  // ********************** Add Product Section  **********************
  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }
    // make collection with nam of products at firebaseDB 
    const productRef = collection(fireDB, "products")
    setLoading(true)
    try {
      await addDoc(productRef, products)
      toast.success("Product Add successfully")
      setTimeout(()=>{
        window.location.href=('/dashboard')
      },800)
      getProductData()
      closeModal()
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setProducts("")
  }

  // this is the state that would had the data of products 
  const [product, setProduct] = useState([]);

  // ****** get product
  const getProductData = async () => {
    setLoading(true)
    try {
      // this to get data of the products and order it by time
      const q = query(
        collection(fireDB, "products"),
        orderBy("time"),
        // limit(5)
      );
      // this to listen of change that happens to the data and to add id for products array
     const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
  
        // console.log(QuerySnapshot);
        QuerySnapshot.forEach((doc) => {
          // console.log({doc});
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

// ****** update and delete the product *****//
  const edithandle = (item) => {
    setProducts(item)
  }
  // update product
  const updateProduct = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated successfully")
    setTimeout(() => {
      window.location.href = '/dashboard'
    }, 800);
    getProductData();
    setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    setProducts("")
  }

// delete the product
  const deleteProduct = async (item) => {
    // console.log(item.id);
    try {
      // console.log("start");
      setLoading(true)
      await deleteDoc(doc(fireDB, "products", item.id));
      // console.log("end");
      toast.success('Product Deleted successfully')
      setLoading(false)
      getProductData()
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error('Product Deletion Failed');
      setLoading(false);
    }
  }

  useEffect(() => {
    getProductData();
  }, []);


  return (
    // i here pass the value that i need 
    <MyContext.Provider value={{mode,toggleMode,loading,setLoading, product,products, setProducts,addProduct,edithandle,updateProduct,deleteProduct }}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState