import React, { useState,useEffect } from 'react';
import styles from './addproduct.module.scss';
import upload_area from '../../assets/upload_area.svg';
const AddProduct = () => {
    const[image,setImage]= useState(false);
    const[productDetails,setProductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })
     // Check if productDetails.image is updated
     useEffect(() => {
       
        if(productDetails.image){
             fetch('http://localhost:4000/addProduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productDetails),
            }).then((response) => response.json()).then((data)=>{
                setProductDetails({});
                data.success?alert("Product added successfully"):alert("Failed to add product")
            })
           
           
        }
    }, [productDetails]); // This will log whenever productDetails changes
    const imageHandler = (e)=>{
     setImage(e.target.files[0]);
    }
    const changeHandler = (e)=>{
        setProductDetails({...productDetails,[e.target.name]: e.target.value})
    }
    
    const addProduct = async () => {
        try {
            // Check if the image is a valid File object
            if (!image || !(image instanceof File)) {
                throw new Error('No valid image selected');
            }
    
            // Initialize FormData and append the image file only
            let formData = new FormData();
            formData.append('product', image); 
    
            // Debugging: Log FormData contents
            for (const [key, value] of formData.entries()) {
               
            }
    
            // Send only the image to the upload endpoint
            const response = await fetch('http://localhost:4000/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error('Failed to upload image');
            }
    
            const data = await response.json();
         
            // Check if the upload was successful
            if (!data.success) {
                throw new Error('Failed to upload image');
            }
    
            // Update `productDetails.image` with the image URL received from the backend
            setProductDetails((prevDetails) => ({
                ...prevDetails,
                image: data.image_url // `data.image_url` is the URL returned from the server
            }));
    
           
    
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    
  return (
    <div className={styles.addProduct}>
      <div className={styles.addProductItemField}>
      <p>Product Title</p>
      <input value={productDetails.name} name='name' onChange={changeHandler} type='text' placeholder='Type here'/>
      </div>
      <div className={styles.addProductPrice}>
      <div className={styles.addProductItemField}>
      <p>Price</p>
      <input value={productDetails.old_price} onChange={changeHandler} type='text' placeholder='Type here' name='old_price'/>
      </div>
      <div className={styles.addProductItemField}>
      <p>Offer Price</p>
      <input value={productDetails.new_price} onChange={changeHandler} type='text' placeholder='Type here' name='new_price'/>
      </div>
      </div>
      <div className={styles.addProductItemField}>
      <p>Product Category</p>
      <select value={productDetails.category} onChange={changeHandler} name='category' className={styles.addProductSelect}>
        <option value="women">Women</option>
        <option value="men">Men</option>
        <option value="kid">Kid</option>
      </select>
      </div>
      <div className={styles.addProductItemField}>
        <label htmlFor='file-input'>
        <img src={image? URL.createObjectURL(image):upload_area} className={styles.addProductThumbnail} alt="" name='image' />
        </label>
        <input onChange={imageHandler} type='file' name='image' id='file-input' hidden/>
      </div>
      <button onClick={addProduct}className={styles.addButton}>
      ADD
      </button>
      </div>
    
  )
}

export default AddProduct
