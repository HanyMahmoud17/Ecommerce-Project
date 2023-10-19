import React, { useEffect, useState } from 'react'
import MyContext from './myContext';
import { toast } from 'react-toastify';
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
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
        QuerySnapshot.forEach((doc) => {
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

  useEffect(() => {
    getProductData();
  }, []);


  return (
    // i here pass the value that i need 
    <MyContext.Provider value={{mode,toggleMode,loading,setLoading, product, setProducts,addProduct }}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState