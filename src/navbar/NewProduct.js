import React,{useState,useEffect} from 'react'
import toast from 'react-hot-toast';
import { IoCloudUploadOutline } from "react-icons/io5";
import { ImagetoBase64 } from '../utility/imagetobase64';

const NewProduct = () => {

    const [data,setdata]=useState({
        name:"",
        category:"",
        image:"",
        price:"",
        description:""
    });
    
    const [products, setProducts] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [productId, setProductId] = useState(null);

    const uploadImage= async(e)=>{
     const data = await ImagetoBase64(e.target.files[0])
    setdata((prev)=>{
        return{
            ...prev,
            image:data
        }
    })
}

const handleOnChange=(e)=>{
    const {name,value}= e.target
    setdata((prev)=>({ ...prev, [name]: value }));
}

const handleSubmit= async(e)=>{
    e.preventDefault()
    console.log(data);

    const {name,image,category,price}= data

    if (name && image && category && price) {
        let url = `${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`;
        let method = "POST";
        if (editMode) {
            url = `${process.env.REACT_APP_SERVER_DOMIN}/updateProduct/${productId}`;
            method = "PUT";
        }

        const fetchData = await fetch(url, {
            method: method,
       headers :{
        "content-type" : "application/json"
       },
       body:JSON.stringify(data)
    })
    const fetchRes= await fetchData.json()

    console.log(fetchRes)
    toast(fetchRes.message)

    setdata(()=>{
        return{
            name:"",
            category:"",
            image:"",
            price:"",
            description:""
        }
    })
    // setImagePreview(null);
    setEditMode(false);
    setProductId(null);
}
else{
    toast("enter required fields")
}
}
const fetchProducts = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`);
    const productsData = await response.json();
    setProducts(productsData);
};

const handleEdit = (product) => {
    setdata(product);
    setEditMode(true);
    setProductId(product._id);
};

const handleDelete = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/deleteProduct/${id}`, {
        method: "DELETE"
    });
    const resData = await response.json();
    toast(resData.message);
    fetchProducts();
};

useEffect(() => {
    fetchProducts();
}, []);
  return (
    <div className='pt-16 min-w[{calc(100vh)}] '>
            <div className='p-4'>
                <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" className='bg-slate-200 p-1 my-1' value={data.name} onChange={handleOnChange} />

                    <label>Category</label>
                    <select name="category" className='bg-slate-200 p-1 my-1' value={data.category} onChange={handleOnChange}>
                        <option value="other">Select category</option>
                        <option value="fruits">Fruits</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="ice cream">Ice Cream</option>
                        <option value="cake">Cake</option>
                        <option value="sandwich">Sandwich</option>
                        <option value="shake">Shakes</option>
                    </select>

                    <label>Image</label>
                    <div className="h-40 w-full bg-slate-200 my-1 rounded flex items-center justify-center relative">
                        {data.image ? (
                            <img src={data.image} name="image" alt="Preview" className="h-full object-contain" />
                        ) : (
                            <span className='text-5xl'><IoCloudUploadOutline /></span>
                        )}
                        <input type="file" accept='image/*' id="image" onChange={uploadImage} className='absolute inset-0 opacity-0 cursor-pointer' />
                    </div>

                    <label>Price</label>
                    <input type="text" name="price" value={data.price} className='bg-slate-200 p-1 my-1' onChange={handleOnChange} />

                    <label>Description</label>
                    <textarea rows={2} name="description" value={data.description} className='bg-slate-200 p-1 my-1 resize-none' onChange={handleOnChange}></textarea>

                    <button className='bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium my-2 drop-shadow-sm'>{editMode ? "Update" : "Save"}</button>
                </form>

                <div className='mt-8'>
                    <h2 className='text-2xl font-semibold'>Products List</h2>
                    <div className='mt-4'>
                        {products.map((product) => (
                            <div key={product._id} className='p-4 shadow bg-white my-2 flex justify-between items-center'>
                                <div>
                                    <h3 className='text-xl'>{product.name}</h3>
                                    <p>{product.category}</p>
                                    <p>{product.price}</p>
                                    <img src={product.image} alt={product.name} className='h-16 object-contain' />
                                </div>
                                <div>
                                    <button className='bg-yellow-500 hover:bg-yellow-600 text-white p-2 mr-2' onClick={() => handleEdit(product)}>Edit</button>
                                    <button className='bg-red-500 hover:bg-red-600 text-white p-2' onClick={() => handleDelete(product._id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    
    
      )
}

export default NewProduct
